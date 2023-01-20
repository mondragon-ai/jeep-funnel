const SquareCard = ({ status, handleSubmit, isLoading }) => {
  return (
    <>
      <form id="payment-form">
        <div id="card-container">
          <div id="card-element"></div>
        </div>
        {/* <button
          id="card-button"
          type="button"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          Pay $1.00
        </button> */}
      </form>
      <div id="payment-status-container" className={status}></div>
    </>
  );
};

export default SquareCard;
