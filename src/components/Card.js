import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`element__like-btn ${isLiked && 'element__like-btn_active'}`);

  function handleCardClick() {
    onCardClick(card)
  }

  function handleDeleteClick() {
    onCardDelete(card._id)
  }

  function handleCardLike() {
    onCardLike(card)
  }
  

  return (
    <>
      {isOwn && <button className="btn element__delete-btn" type="button" aria-label="удалить" onClick={handleDeleteClick}></button>}
      <img className="element__image" alt={card.name} src={card.link} onClick={handleCardClick} />
      <div className="element__image-description">
        <h2 className="element__heading">{card.name}</h2>
        <div className="element__like">
          <button className={cardLikeButtonClassName} type="button" aria-label="нравится" onClick={handleCardLike}> </button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
    </>
  )
}

export default Card;