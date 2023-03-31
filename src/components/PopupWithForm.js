function PopupWithForm({ name, title, formName, formId, btnText, isOpen, children, onClose, onSubmit, btnLoadText, loadText }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`} onClick={onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button className="btn popup__close-icon" type="button" aria-label="закрыть" onClick={onClose}></button>
        <h3 className="popup__heading">{title}</h3>
        <form className="popup__form" name={formName} id={formId} onSubmit={onSubmit}>
          {children}
          <button className="popup__btn" type="submit">{loadText ? btnLoadText : btnText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;