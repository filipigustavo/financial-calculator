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

type CalculatorProps = {
  onSubmit: (val: CalcResponse) => void
}
