const Error = ({mensaje}) => {
    return (
        <div className=" bg-red-800 text-white text-center p-3 uppercase font-bold rounded-md mb-3">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error;