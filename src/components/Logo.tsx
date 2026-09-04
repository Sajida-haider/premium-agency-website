import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function LogoMark({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-xl",
        "bg-gradient-to-br from-primary-400 via-teal-400 to-iris-500",
        "shadow-[0_0_24px_-4px_rgba(52,211,153,0.6)]",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-background" fill="none">
        <path
          d="M12 2.5 20.2 6.9v7.4L12 20.9 3.8 14.3V6.9L12 2.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </span>
  );
}

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="Aurelia home"
    >
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight text-ink">
        Aurelia
      </span>
    </a>
  );
}
