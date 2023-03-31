import successfulImage from "../images/successfulImage.svg";
import errorImage from "../images/errorImage.svg";

function InfoTooltip({ regSuccess, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} onClick={onClose}>
      <div className="popup__container popup_info-tooltip" onClick={(e) => e.stopPropagation()}>
        <button className="btn popup__close-icon" type="button" aria-label="закрыть" onClick={onClose}></button>
        {regSuccess ? (
            <img className="info-tooltip__image" src={successfulImage} alt="Успешно" />
          ) : (
            <img className="info-tooltip__image" src={errorImage} alt="Ошибка" />
          )}
        <h3 className="popup__heading">{regSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h3>
      </div>
    </div>
  )
}

export default InfoTooltip