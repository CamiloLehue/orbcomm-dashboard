import clsx from "clsx"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?: string
}

function Select({ className, ...props }: SelectProps) {

    return (
        <select
            className={clsx(`focus:outline-none border border-secondary/20 rounded-lg  font-light bg-secondary/5 py-2 w-full`, className)}
            {...props}
        >
            <option value="" disabled>Seleccionar...</option>
            {props.children}
        </select>
    )
}

export default Select