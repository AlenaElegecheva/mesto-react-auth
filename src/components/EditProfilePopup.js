import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, loadText }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  //  Обработчик изменения инпута обновляет стейт
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser?.name || '');
    setDescription(currentUser?.about || '');
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name={"edit"}
      title={"Редактировать профиль"}
      formName={"edit"}
      formId={"edit"}
      btnText={"Сохранить"}
      btnLoadText={"Сохранение"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      loadText={loadText}
    >
      <input value={name} onChange={handleNameChange} className="popup__input popup__input_field_name" type="text" name="username" id="username" placeholder="Имя" minLength="2" maxLength="40" required />
      <span className="popup__error username-error"></span>
      <input value={description} onChange={handleDescriptionChange} className="popup__input popup__input_field_aboutme" type="text" name="aboutme" id="aboutme" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
      <span className="popup__error aboutme-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;