import React, {useState, useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditAvatarPopupOpen, setEditAvatarClick] = useState(false);
    const [isEditProfilePopupOpen, setEditProfileClick] = useState(false);
    const [isAddPlacePopupOpen, setAddPlaceClick] = useState(false);
    const [selectedCard, setSelectedCard] = useState({})

   const handleEditAvatarClick = () => {
      setEditAvatarClick(true);
    };

   const handleEditProfileClick = () => {
      setEditProfileClick(true);
    };

   const handleAddPlaceClick = () => {
      setAddPlaceClick(true);
    }

    const closeAllPopups = () => {
      setEditAvatarClick(false);
      setEditProfileClick(false);
      setAddPlaceClick(false);
      setSelectedCard({})
    }

    const handleCardClick = (card) => {
      setSelectedCard(card)
    }

    useEffect(() => {
        const closeEscape = (e) => {(e.key === 'Escape') && closeAllPopups({})}
        return(isAddPlacePopupOpen || isEditAvatarPopupOpen || isEditProfilePopupOpen || selectedCard) 
        ? document.addEventListener('keydown', closeEscape)
        : () => document.removeEventListener('keydown', closeEscape)
    })

  return (
    <>
    <div className="page">
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
        />

        <PopupWithForm isOpen={isEditProfilePopupOpen}  onClose={closeAllPopups}  title='Редактировать профиль' name='edit' textButton='Сохранить'>
            <input className="popup__input popup__input_type_name" id="popup-edit"  name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
            <div id="popup-edit-error" className="popup__input-error" >
                <span className="popup__error-visible"></span>
            </div>

            <input className="popup__input popup__input_type_description" id="about" name="description" type="text" placeholder="О себе" minLength="2" maxLength="200" required />
            <div id="description-error" className="popup__input-error">
                <span className="popup__error-visible"></span>
            </div>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditAvatarPopupOpen}  onClose={closeAllPopups}  title='Новый аватар' name='avatar' textButton='Сохранить'>
            <input className="popup__input popup__input_type_image-link" id="avatar" name="avatar" type="url" minLength="2" required placeholder="Ссылка на аватар"/>
            <div id="avatar-error" className="popup__input-error">
                <span className="popup__error-visible"></span>
            </div>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen}  onClose={closeAllPopups}  title='Новое место' name='card' textButton='Создать'>
            <input className="popup__input popup__input_type_title" id="title-card" name="name" type="text" minLength="2" maxLength="30" required placeholder="Название" />
            <div id="title-card-error" className="popup__input-error">
                <span className="popup__error-visible"></span>
            </div>

            <input className="popup__input popup__input_type_image-link" id="link" name="link" type="url" minLength="2" required placeholder="Ссылка на картинку" />
            <div id="link-error" className="popup__input-error">
                <span className="popup__error-visible"></span>
            </div>
        </PopupWithForm>

        <PopupWithForm  title='Вы уверены?' name='confirm' textButton='Да'></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />


        {/* <div className="popup popup_confirm">
            <div className="popup__overlay"></div>
            <div className="popup__content">
                <h2 className="popup__title  popup__title_confirm">Вы уверены?</h2>
                <button className="popup__close-button" aria-label="Close" type="button"></button>
                <form className="popup__container popup__container_confirm" id="delete" name="form-delete" noValidate>
                    <button className="popup__button popup__button_confirm" type="submit">Да</button>
                </form>
            </div>
        </div> */}
       <Footer />
    </div>
    </>
  );
}

export default App; 