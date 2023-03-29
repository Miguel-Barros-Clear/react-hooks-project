import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function verify(num) {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [checked, setChecked] = useState("");
  const [forCheck, setForCheck] = useState(1);

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);

  useEffect(() => {
    if (fatorial > 10000) {
      document.title = "Eita!";
    } else {
      document.title = "Calculo do fatorial";
    }
  }, [fatorial]);

  useEffect(() => {
    setChecked(verify(forCheck));
  }, [forCheck]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <div>
          <span className="text">Impar ou Par: </span>
          <span className="text red">{checked}</span>
        </div>
        <input
          type="number"
          className="input"
          value={forCheck}
          onChange={(e) => setForCheck(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
