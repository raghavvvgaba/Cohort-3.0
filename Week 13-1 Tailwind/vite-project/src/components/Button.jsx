export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return <span onClick={onClick} className={`px-32 py-8 text-white cursor-pointer rounded-2xl text-4xl ${disabled? "bg-blue-200": "bg-green-400"}`}>
        {children}
    </span>
} 