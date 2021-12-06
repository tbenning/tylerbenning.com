export default function Capsule({ text, className }) {
  return (
    <div
      className={`inline-block border border-solid border-gray-300 rounded-full py-2 px-3 transition duration-300 ease-in-out hover:bg-gray-200 hover:cursor-default hover:border-transparent ${className}`}
    >
      <span className="text-sm text-secondary">{text}</span>
    </div>
  )
}
