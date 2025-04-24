import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  rounded?: "sm" | "md" | "lg" | "full" | "none"
}

const baseStyles = "flex justify-center items-center gap-1 p-2 hover:text-zinc-50";

const roundedStyles = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
  none: "rounded-none",
}

function Button({ children, rounded = "none", className, ...props }: ButtonProps) {
  return (
    <button {...props} className={clsx(baseStyles, roundedStyles[rounded], className)}>
      {children}
    </button>
  )
}

export default Button