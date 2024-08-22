/*
      <div>
        <input value={nro} onChange={(e) => setNro(e.target.value)} />
        <button onClick={() => cepHandle(nro)}>Obter</button>
      </div>
*/

import styled from "styled-components";

interface Props {
  button: string;
  placeholder: string;
  value: string;
  set: (value: string) => void;
  click: (nro:string) => void;
}

export default function Input(props: Props) {
  return (
    <WrapperSld>
      <InputSld placeholder={props.placeholder} value={props.value} onChange={(e) => props.set(e.target.value)} />
      <ButtonSld onClick={() => props.click(props.value)}>{props.button}</ButtonSld>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  background-color: yellow;
`;

const InputSld = styled.input`
  width: 200px;
  border-radius: 5px;
`;

const ButtonSld = styled.button`
  background-color: blue;
`;
