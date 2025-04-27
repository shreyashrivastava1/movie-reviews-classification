const VerticallyCenteredModal = ({ show, onHide, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold">
          {message.includes("successful") ? "Success!" : "Error!"}
        </h2>
        <p className="mt-2">{message}</p>
        <button
          className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition"
          onClick={onHide}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VerticallyCenteredModal;
