interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

/**
 * Constrains content to a max width and centers it on wide screens.
 */
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10 ${className ?? ""}`}
      {...props}
    />
  );
}
