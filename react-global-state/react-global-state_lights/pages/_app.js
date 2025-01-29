import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { lights } from "@/lib/lights";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(lights);

function toggleLight(id) {
  setIsOn((prev) => prev.map(light => light.id === id ? {...light, isOn: !light.isOn} : light))
}

function allOn() {
  setIsOn((prev) => prev.map((light) => ({ ...light, isOn: true }))); // Fix
}

function allOff() {
  setIsOn((prev) => prev.map((light) => ({ ...light, isOn: false }))); // Implemented
}

  return (
    <Layout>
      <GlobalStyle />
      <Component 
      onOn={allOn}
      onOff={allOff}
      isOn={isOn} 
      toggleLight={toggleLight} 
      {...pageProps} />
    </Layout>
  );
}
