function NameDisplay({ name }) {
  return (
    <div>
      <h3>Child B - Display</h3>
      <p>Hello, {name || "Anonymous"}!</p>
    </div>
  );
}

export default NameDisplay;
