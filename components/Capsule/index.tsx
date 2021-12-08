type Props = {
  text: string
  className: string
  icon: JSX.Element
}

export default function Capsule({ text, className, icon }: Props) {
  return (
    <div
      className={`inline-block border flex items-center border-solid border-gray-300 rounded-full py-2 px-3 transition duration-300 ease-in-out hover:bg-gray-200 hover:cursor-default hover:border-transparent ${className}`}
    >
      {icon && <div className="mr-2">{icon}</div>}
      <span className="text-sm text-secondary">{text}</span>
    </div>
  )
}
