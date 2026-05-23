const ACCESS_TOKEN_KEY = 'aurel_access_token';
const REFRESH_TOKEN_KEY = 'aurel_refresh_token';

export const isBrowser = typeof window !== 'undefined';

export function getAccessToken() {
  return isBrowser ? window.localStorage.getItem(ACCESS_TOKEN_KEY) : null;
}

export function getRefreshToken() {
  return isBrowser ? window.localStorage.getItem(REFRESH_TOKEN_KEY) : null;
}

export function setAuthTokens(accessToken: string, refreshToken: string) {
  if (!isBrowser) return;
  window.localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export function clearAuthTokens() {
  if (!isBrowser) return;
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export async function refreshAccessToken() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    clearAuthTokens();
    return null;
  }

  const payload = await response.json();
  setAuthTokens(payload.accessToken, payload.refreshToken);
  return payload.accessToken;
}

export function getAuthHeaders() {
  const accessToken = getAccessToken();
  return accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {};
}
