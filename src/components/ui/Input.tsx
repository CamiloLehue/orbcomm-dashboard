import clsx from "clsx"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

function Input({ className, ...props }: InputProps) {
    return (
        <input {...props} className={clsx(`border border-secondary/20 rounded-lg font-light bg-secondary/5 py-2 px-4 w-full focus:outline-none `, className)} />
    )
}

export default Input