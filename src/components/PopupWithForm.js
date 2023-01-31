import React from 'react';


function PopupWithForm({title, name, textButton, children, isOpen, onClose}) {

    return(
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}
            onClick={
                (e) => {
                    (e.target === e.currentTarget) && onClose({})
                    }
                }>
            <div className="popup__content">
                <button className ="popup__close-button" aria-label="Close" type="button" onClick={onClose} ></button>
                <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
                <form className={`popup__container popup__container_${name}`} id="avatar" name="form-edit" noValidate>
                {children}
                <button className={`popup__button popup__button_${name}`} type="submit">{textButton}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;