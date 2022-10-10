import closeIcon from "../images/close-icon.svg";

const ImagePopup = ({ selectedCard, onClose }) => {
  return (
    <div
      className={`popup popup_picture ${selectedCard ? "popup_opened" : ""}`}
    >
      {selectedCard ? (
        <div className="picture popup__content">
          <button
            onClick={onClose}
            className="popup__close popup__close_picture"
            type="button"
          >
            <img className="popup__close-icon" src={closeIcon} alt="Крест" />
          </button>
          <img
            className="picture__image"
            src={selectedCard.link}
            alt={selectedCard.name}
          />
          <div className="picture__description">{selectedCard.name}</div>
        </div>
      ) : null}
    </div>
  );
};
export default ImagePopup;
