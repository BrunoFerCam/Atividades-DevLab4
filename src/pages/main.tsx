import { useState } from "react";
import useCep from "../hooks";
import Input from "../components/Input";

export default function Main() {
  const [nro, setNro] = useState("");
  const { cep, cepHandle } = useCep();

  return (
    <>
      <div>
        <Input
          button= "Obter"
          placeholder= "Cep sem traços e pontos"
          value= {nro}
          set= {setNro}
          click = {cepHandle}
        />
      </div>
      {cep && (
        <div>
          <div>Logradouro: {cep.logradouro}</div>
          <div>Cidade: {cep.localidade}</div>
          <div>UF: {cep.uf}</div>
        </div>
      )}
    </>
  );
}