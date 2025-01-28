import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
    const Div = styled.div`
    background-color: ${isBlack ? 'black' : 'green'};
    width: 100px;
  height: 100px;
  margin: 2rem;

  &:hover {
    background-color: red
  }
    `
    return (
        <Div />
    );
}
