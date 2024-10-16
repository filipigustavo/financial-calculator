import { ChangeEvent, FormEvent, forwardRef, useImperativeHandle, useReducer } from "react"

import { calculate, reducer } from "./helpers"
import NumField from "./NumField"


const body = {
  time: 0,
  initialValue: 0,
  monthlyValue: 0,
  tax: 0,
  contribution: 0
}
 
const Calculator = forwardRef(function Calculator({ onSubmit }: CalculatorProps, ref) {
  const [calc, dispatch] = useReducer(reducer, body)

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    const val = calculate(calc)

    onSubmit(val)
  }

  const handleChangeField = (ev: ChangeEvent<HTMLInputElement>) => dispatch({
    type: "change",
    field: ev.target.name,
    payload: Number(ev.target.value)
  })

  useImperativeHandle(ref, () => {
    return { calc }
  }, [calc])

  return (
    <form onSubmit={handleSubmit} className="calculator">
      <NumField label="Time" name="time" value={calc.time} onChange={handleChangeField} />
      <NumField label="Initial value" name="initialValue" value={calc.initialValue} onChange={handleChangeField} />
      <NumField label="Monthly value" name="monthlyValue" value={calc.monthlyValue} onChange={handleChangeField} />
      <NumField label="Tax" name="tax" value={calc.tax} onChange={handleChangeField} />
      <NumField label="Contribution" name="contribution" value={calc.contribution} onChange={handleChangeField} />

      <div className="calculator__actions">
        <button className="calculator__submit-button">Submit</button>
      </div>
    </form>
  )
})

export default Calculator