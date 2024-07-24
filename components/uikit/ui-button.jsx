import { clsx } from "clsx";

export function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      lg: "px-5 py-5 leading-tight rounded-lg text-2xl",
      md: "rounded px-6 py-2 text-small",
    }[size],

    {
      primary: "text-white  bg-teal-600 hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );

  return (
    <button className={buttonClassName} size={size} variant={variant}>
      {children}
    </button>
  );
}
