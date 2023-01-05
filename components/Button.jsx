function Button({ children, onClick }) {
  return (
    <button
      className="funnelbtn btntext"
      id="submit"
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
