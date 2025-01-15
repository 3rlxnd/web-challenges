export default function App() {
  return <Sum valueA={5} valueB={8}/>;
}

function Sum(props) {
return <p>{props.valueA} + {props.valueB} = {props.valueA + props.valueB}</p>
}