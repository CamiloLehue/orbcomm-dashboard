import clsx from "clsx"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

function Input({ className, ...props }: InputProps) {
    return (
        <input {...props} className={clsx(`rounded bg-transparent px-3 py-2 text-sm  focus:outline-none `, className)} />
    )
}

export default Input