function ImagePopup({ isOpen, onClose, card }) {

  return(
    <div className={`popup popup_image ${ isOpen ? "popup_opened" : ""}`} onClick={onClose}>
    <div className="popup__container-image" onClick={(event) => event.stopPropagation()}>
      <button className="btn popup__close-icon popup__close-icon_image" type="button" aria-label="закрыть" onClick={onClose}></button>
      <img className="popup__picture" src={card.link} alt={card.name} />
      <h2 className="popup__image-title">{card.name}</h2>
    </div>
  </div>
  )
}

export default ImagePopup;