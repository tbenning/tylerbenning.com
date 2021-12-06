export default function Capsule({ text, className }) {
  return (
    <div
      className={`inline-block border border-solid border-gray-300 rounded-full py-2 px-3 ${className}`}
    >
      <span className="text-sm text-secondary">{text}</span>
    </div>
  )
}
