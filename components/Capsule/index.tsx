export default function Capsule ({text}){
    return (
        <div className="inline-block border border-solid border-gray-300 rounded-full py-1 px-2">
        <span className="text-gray-700 text-sm">
            {text}
        </span>
        </div>
    )
    
}