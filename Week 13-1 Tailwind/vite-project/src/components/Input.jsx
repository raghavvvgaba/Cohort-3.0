export const Input = ({
    disabled,
    onClick,
    type,
    placeholder
}) => {
    return <span onClick={onClick} className={`p-8 px-2 py-2 text-white cursor-pointer rounded-2xl text-4xl bg-blue-500`} >
        <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none"></input>
    </span>
} 