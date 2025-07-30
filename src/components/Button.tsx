
interface Props {
    onClick: () => void;
    children: string;
}
const Button = ({onClick, children}: Props) => {
  return (
    <button onClick={onClick} className="bg-blue-400 border border-gray-400 text-xl flex items-center justify-center">{children}</button>
  )
}

export default Button