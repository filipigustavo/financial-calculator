type CalcTax = {
  time: number
  initialValue: number
  monthlyValue: number
  tax: number
  contribution: number
}

type CalcResponse = {
  finalValue: number
  monthlyIncome: number
  monthlyResult: number[]
  raw: number
}

type CalcAction = {
  type: string
  field: string
  payload: number
}

type CalculatorLabels = {
  time: string
  initialValue: string
  monthlyValue: string
  tax: string
  contribution: string
  submit: string
}

type CalculatorCssClasses = {
  mainClass: string,
  group: string,
  label: string,
  input: string,
  actions: string,
  submit: string
}

type CalculatorProps = {
  labels?: CalculatorLabels
  cssClasses?: CalculatorCssClasses
  onSubmit: (val: CalcResponse) => void
}

type CalculatorFieldProps = {
  label: string
  cssClasses: CalculatorCssClasses
  name: string
  value: number
  onChange: ChangeEventHandler<HTMLInputElement>
}
