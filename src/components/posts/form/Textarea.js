function Textarea({ name, reference, isRequired }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <textarea 
        id={name} 
        name={name} 
        ref={reference} 
        required={isRequired} 
      />
    </div>
  );
};

export default Textarea;


