function NameInput({ name, setName }) {
  return (
    <div>
      <h3>Child A - Input</h3>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default NameInput;
