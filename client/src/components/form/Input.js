const Input = ({ value, type, name, onChange, placeholder, id }) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
