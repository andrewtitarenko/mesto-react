import React from 'react';

function ImagePopup({card, onClose}) {
    return(
        <div className={`popup popup_open-image ${Object.keys(card).length !== 0 && 'popup_opened'}`} id="popup-pictures" onClick={onClose}>
        <div className="popup__overlay"></div>
        <div className="popup__photo-container">
            <img src={card.link} alt={card.name} className="popup__photo"/>
            <p className="popup__photo-title">{card.name}</p>
            <button type="button" className="popup__close-button"></button>
        </div>
    </div>
    )
}

export default ImagePopup;


