interface InputProps {
    type: string;
    className?: string;
    value: string | number | readonly string[] | undefined;
    setValue: (value: any) => void;
    placeholder?: string;
}