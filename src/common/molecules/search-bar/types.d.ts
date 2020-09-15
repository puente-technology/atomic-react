interface SearchBarProps {
    value: string | number | readonly string[] | undefined;
    setValue: (value: any) => void;
    right?: any;
    left?: any;
}