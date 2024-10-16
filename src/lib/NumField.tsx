const NumField = ({ label, cssClasses, name, value, onChange }: CalculatorFieldProps) => (
  <div className={cssClasses.group}>
    <label className={cssClasses.label}>{label}</label>
    <input className={cssClasses.input} required type="number" {...{ name, value, onChange }} />
  </div>
)

export default NumField