import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="page">
      <section className="profile">
        <a href="#" className="avatar-hover-effect" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="аватар" />
        </a>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
          <button className="btn profile__edit-btn" type="button" aria-label="редактировать" onClick={props.onEditProfile}></button>
        </div>
        <button className="btn profile__add-btn" type="button" aria-label="добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="photo-grid">
        {props.cards.map((card) => {
          return (
            <article className="element" key={card._id}>
              <Card card={card} onCardClick={props.onCardClick} onCardDelete={props.onCardDelete} onCardLike={props.onCardLike}/>
            </article>
          );
        })}
      </section>
    </main>
  )
}

export default Main;