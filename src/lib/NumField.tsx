const NumField = ({ label, ...props }: any) => (
  <div className="calculator__group">
    <label className="calculator__label">{label}</label>
    <input className="calculator__field" required type="number" {...props} />
  </div>
)

export default NumField