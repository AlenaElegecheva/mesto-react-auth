import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import '../index.css';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [editAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [editProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [addPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loadText, setLoadText] = useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(data) {
    setSelectedCard(data);
    setImagePopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleDeleteClick(_id) {
    api.deleteCards(_id)
      .then(() => {
        setCards(cards.filter((d) => d._id !== _id))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function closePopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUsersData()])
      .then((data) => {
        const dataCard = data[0]
        const dataUser = data[1]
        setCards(dataCard);
        setCurrentUser(dataUser);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function handleUpdateUser(data) {
    setLoadText(true);
    api.setUsersData(data)
      .then((newInfo) => {
        setCurrentUser(newInfo);
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadText(false);
      })
  }

  function handleUpdateAvatar(data) {
    setLoadText(true);
    api.setAvatar(data)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadText(false);
      })
  }

  function handleAddPlaceSubmit(data) {
    setLoadText(true);
    api.createCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadText(false);
      })
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteClick}
          cards={cards}
        />
        <Footer />

        {/* <!--Попап редактирования--> */}
        <EditProfilePopup isOpen={editProfilePopupOpen} onClose={closePopups} onUpdateUser={handleUpdateUser} loadText={loadText} />

        {/* <!--Попап добавления карточки--> */}
        <AddPlacePopup isOpen={addPlacePopupOpen} onClose={closePopups} onAddPlace={handleAddPlaceSubmit} loadText={loadText} />

        {/* <!--Попап картинки--> */}
        <ImagePopup card={selectedCard} isOpen={imagePopupOpen} onClose={closePopups} />

        {/* <!--Попап редактирования аватара--> */}
        <EditAvatarPopup isOpen={editAvatarPopupOpen} onClose={closePopups} onUpdateAvatar={handleUpdateAvatar} loadText={loadText} />

        {/* <!--Попап удаления карточки--> */}
        <PopupWithForm
          name={"delete-card"}
          title={"Вы уверены?"}
          formName={"card-delete"}
          formId={"card-delete"}
          btnText={"Да"}
        >
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
