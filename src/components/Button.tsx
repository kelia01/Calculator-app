
interface Props {
    onClick: () => void;
    children: string;
}
const Button = ({onClick, children}: Props) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Button