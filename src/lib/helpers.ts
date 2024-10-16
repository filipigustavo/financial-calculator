export const money = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format;

export const calculate = ({
  time,
  initialValue,
  monthlyValue,
  tax,
  contribution
}: CalcTax): CalcResponse => {
  const applyTax = (v: number) => v * (1 + tax);

  let raw = initialValue
  let calc = initialValue;
  const monthlyResult = [calc]

  for (let i = 0; i < time; i++) {
    calc = applyTax(calc);
    calc += monthlyValue;
    raw += monthlyValue
    
    if (!!i && i % 12 === 0) {
      calc += contribution;
      raw += contribution;
    }
    
    monthlyResult.push(calc)
  }

  return {
    finalValue: calc,
    monthlyIncome: calc * tax,
    monthlyResult,
    raw
  };
};

export const reducer = (state: CalcTax, action: CalcAction) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        [action.field]: action.payload
      }

    default:
      return state
  }
}