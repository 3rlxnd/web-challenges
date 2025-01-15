export default function App() {
  return <Smiley isHappy={false}/>
}

function Smiley(props) {
  return <h1>{props.isHappy ? '😊' : '😭'}</h1>
}