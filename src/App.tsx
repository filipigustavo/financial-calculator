import { useRef, useState } from "react"

import Calculator from "./lib/Calculator"

function App() {
  const calcRef = useRef<{ calc: CalcTax }>(null)
  const [calcValue, setCalcValue] = useState<CalcResponse | null>(null)

  const handleSubmit = (val: CalcResponse) => setCalcValue(val)

  return <>
    <Calculator ref={calcRef} onSubmit={handleSubmit} labels={{
      time: "Tempo",
      initialValue: "Valor inicial",
      monthlyValue: "Valor mensal",
      tax: "Juros",
      contribution: "Aporte",
      submit: "Calcular"
    }} />
    <hr />
    <pre>
      { JSON.stringify(calcRef.current?.calc || {}, null, 2) }
    </pre>
    <pre>
      { JSON.stringify(calcValue || {}, null, 2) }
    </pre>
  </>
}

export default App
