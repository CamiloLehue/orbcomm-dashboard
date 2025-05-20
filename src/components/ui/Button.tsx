import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  rounded?: "sm" | "md" | "lg" | "full" | "none" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
}

const baseStyles = "flex justify-center items-center gap-1 p-2 hover:text-zinc-50";

const roundedStyles = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
  "5xl": "rounded-5xl",
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