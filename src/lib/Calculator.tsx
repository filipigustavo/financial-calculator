import { ChangeEvent, FormEvent, forwardRef, useImperativeHandle, useReducer } from "react"

import { body, labelsDefault, cssClassesDefault } from "./content"
import { calculate, reducer } from "./helpers"
import NumField from "./NumField"
 
const Calculator = forwardRef(function Calculator({ labels = labelsDefault, cssClasses = cssClassesDefault, onSubmit }: CalculatorProps, ref) {
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
    <form onSubmit={handleSubmit} className={cssClasses.mainClass}>
      <NumField label={labels.time} cssClasses={cssClasses} name="time" value={calc.time} onChange={handleChangeField} />
      <NumField label={labels.initialValue} cssClasses={cssClasses} name="initialValue" value={calc.initialValue} onChange={handleChangeField} />
      <NumField label={labels.monthlyValue} cssClasses={cssClasses} name="monthlyValue" value={calc.monthlyValue} onChange={handleChangeField} />
      <NumField label={labels.tax} cssClasses={cssClasses} name="tax" value={calc.tax} onChange={handleChangeField} />
      <NumField label={labels.contribution} cssClasses={cssClasses} name="contribution" value={calc.contribution} onChange={handleChangeField} />

      <div className={cssClasses.actions}>
        <button type="submit" className={cssClasses.submit}>{labels.submit}</button>
      </div>
    </form>
  )
})

export default Calculator