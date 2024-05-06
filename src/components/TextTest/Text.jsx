const Text = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="text">
      <input type="text" />
      <p>{inputValue}</p>
    </div>
  );
};

export default Text;
