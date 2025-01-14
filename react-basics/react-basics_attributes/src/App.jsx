import "./styles.css";

export default function App() {
  return <Article/>;
}

function Article() {
  return <article className="article">
    <h2 className="article__title">What is your Question?</h2>
    <label htmlFor="input">Ask me</label>
    <input type="text" id="input"/>
    <a href="https://www.google.com" target="_blanc" className="article__link">Rather as Google</a>
  </article>
}
