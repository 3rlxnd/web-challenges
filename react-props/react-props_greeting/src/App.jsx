export default function App() {
  return <Greeting name="Elli"/>
}

function Greeting(props) {
  return <h1>Hello, {coaches.includes(props.name) ? "Coach" : props.name}</h1>
}

const coaches = ["Gimena", "Klaus"]