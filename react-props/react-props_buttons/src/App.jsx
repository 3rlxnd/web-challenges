export default function App() {
  return <Button text="Click me" disabled={false} color="red" onClick={handleClick}/>;
}

function Button(props) {
  return <button color={props.color} disabled={props.disabled} onClick={props.onClick}>{props.text}</button>
}

function handleClick() {
  alert('You clicked me!')
}