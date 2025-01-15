export default function App() {
  return <Greeting name="Elli"/>
}

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>
}