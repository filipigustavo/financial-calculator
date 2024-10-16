import { useRef, useState } from "react"

import Calculator from "./lib/Calculator"

function App() {
  const calcRef = useRef<{ calc: CalcTax }>(null)
  const [calcValue, setCalcValue] = useState<CalcResponse | null>(null)

  const handleSubmit = (val: CalcResponse) => setCalcValue(val)

  return <>
    <Calculator ref={calcRef} onSubmit={handleSubmit} />
    <hr />
    <pre>
      { JSON.stringify(calcRef.current?.calc || {}, null, 2) }
      
      ----------
      
      {JSON.stringify(calcValue || {}, null, 2)}
    </pre>
  </>
}

export default App
