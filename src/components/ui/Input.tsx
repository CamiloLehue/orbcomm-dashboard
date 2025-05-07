import clsx from "clsx"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

function Input({ className, ...props }: InputProps) {
    return (
        <input {...props} className={clsx(`border border-gray/30 rounded-md font-light bg-gray/20 py-2 px-4 w-full focus:outline-none `, className)} />
    )
}

export default Input