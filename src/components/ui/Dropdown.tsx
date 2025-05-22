import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type DropdownProps = {
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    onClickVoid?: boolean;
    setClickVoid?: (value: boolean) => void;
};

function Dropdown({ children, onClickVoid = true, setClickVoid }: DropdownProps) {
    const [open, setOpen] = useState<boolean>(onClickVoid);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
                setClickVoid?.(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setClickVoid]);

    if (!open) return null;

    return (
        <div
            ref={dropdownRef}
            className={clsx("absolute right-[50%] translate-x-1/2 top-11.5 min-w-50 w-auto ")}
        >
            {children}
        </div>
    );
}

export default Dropdown;