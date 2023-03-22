import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, loadText }) {
	const [place, setPlace] = useState('');
	const [src, setSrc] = useState('');

	function handlePlaceChange(e) {
		setPlace(e.target.value);
	}

	function handleSrcChange(e) {
		setSrc(e.target.value);
	}

	function handleSubmit(e) {
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();

		// Передаём значения управляемых компонентов во внешний обработчик
		onAddPlace({
			name: place,
			link: src,
		});
	}

	useEffect(() => {
		if(isOpen) {
		setPlace('');
		setSrc('');
		}
	}, [isOpen])

	return (
		<PopupWithForm
			name={"add"}
			title={"Новое место"}
			formName={"add"}
			formId={"add"}
			btnText={"Создать"}
			btnLoadText={"Сохранение"}
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
			loadText={loadText}
		>
			<input value={place} onChange={handlePlaceChange} className="popup__input popup__input_field_place" type="text" name="place" id="place" placeholder="Название" minLength="2" maxLength="30" required />
			<span className="popup__error place-error"></span>
			<input value={src} onChange={handleSrcChange} className="popup__input popup__input_field_src" type="url" name="src" id="src" placeholder="Ссылка на картинку" required />
			<span className="popup__error src-error"></span>
		</PopupWithForm>
	)
}

export default AddPlacePopup;