import clsx from "clsx"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    className?: string
    name: string
}

function Label({ className, name, ...props }: LabelProps) {
    return (
        <label {...props} className={clsx(`font-light text-xs`, className)}>
            {name}
        </label>
    )
}

export default Label