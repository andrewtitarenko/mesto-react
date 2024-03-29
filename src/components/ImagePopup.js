import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div
      className={
        Object.keys(card).length !== 0
          ? "popup popup_open-photo popup_opened"
          : "popup popup_open-photo"
      }
      id="popup-image"
      onClick={onClose}
    >
      <div className="popup__overlay"></div>
      <div className="popup__image-container">
        <img src={card.link} alt={card.name} className="popup__image" />
        <p className="popup__image-name">{card.name}</p>
        <button type="button" className="popup__close-button"></button>
      </div>
    </div>
  );
}

export default ImagePopup;
