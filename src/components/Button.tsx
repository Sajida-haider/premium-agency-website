import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight } from "@/components/icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary-400 to-teal-400 text-background shadow-[0_8px_30px_-8px_rgba(52,211,153,0.7)] hover:shadow-[0_12px_40px_-8px_rgba(52,211,153,0.85)] hover:brightness-110",
  secondary:
    "glass text-ink hover:bg-white/10 hover:border-white/20",
  ghost:
    "text-ink/80 hover:text-ink hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
};

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type Props = ButtonAsAnchor | ButtonAsButton;

export function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
  } = props;

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-all duration-300 focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-primary-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {children as ReactNode}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, withArrow: _w, ...rest } = props;
    void _v;
    void _s;
    void _w;
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const { href: _href, variant: _v, size: _s, withArrow: _w, ...rest } =
    props as ButtonAsButton;
  void _href;
  void _v;
  void _s;
  void _w;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
