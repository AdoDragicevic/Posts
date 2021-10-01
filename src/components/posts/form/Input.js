function TextInput({ name, type, reference, isRequired }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input 
        type={type}
        id={name} 
        name={name}
        ref={reference} 
        required={isRequired} 
      />
    </div>
  );
};

export default TextInput;