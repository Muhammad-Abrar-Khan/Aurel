declare module "@emailjs/browser" {
  export function init(key: string): void;
  export function send(serviceID: string, templateID: string, templateParams: Record<string, any>): Promise<any>;
  const emailjs: { init: typeof init; send: typeof send };
  export default emailjs;
}
