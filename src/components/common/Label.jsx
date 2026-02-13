const Label = ({ title }) => {
    return (
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-300">
            {title}
        </label>
    )
}

export default Label;