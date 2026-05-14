import { 
  Factory as LucideFactory, 
  Package2 as LucidePackage, 
  ShieldCheck as LucideShield, 
  Cpu as LucideCpu 
} from "lucide-react";

export const Factory = ({ className }: { className?: string }) => (
  <LucideFactory className={className} strokeWidth={1.5} />
);

export const Inventory = ({ className }: { className?: string }) => (
  <LucidePackage className={className} strokeWidth={1.5} />
);

export const Security = ({ className }: { className?: string }) => (
  <LucideShield className={className} strokeWidth={1.5} />
);

export const PrecisionManufacturing = ({ className }: { className?: string }) => (
  <LucideCpu className={className} strokeWidth={1.5} />
);
