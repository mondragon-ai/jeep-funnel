const AddressInput = ({ label, name, required }) => (
  <div className="input-group">
    <input
      defaultValue=""
      className="form-control"
      type="text"
      name={name}
      id={name}
      required={required}
    />
    <label htmlFor={name}>{label}</label>
    {required && <div className="req-mark">!</div>}
  </div>
);

export default AddressInput;
