export default function Capsule ({text}){
    return (
        <div className="inline-block border border-solid border-gray-300 rounded-full py-2 px-3">
        <span className="text-secondary text-sm">
            {text}
        </span>
        </div>
    )
    
}