const Input = ({ value, type, onChange, placeholder, id }) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
