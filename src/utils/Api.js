class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;

  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };
  
  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  getUsersData() {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  setUsersData(data) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  deleteCards(_id) {
    return fetch(this._baseUrl + '/cards/' + _id, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  setAvatar = (data) => {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  changeLikeCardStatus(_id, isLiked) {
    return fetch(this._baseUrl + '/cards/' + _id + '/likes', {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  createCard(data) {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: this._headers
    })
      .then(this._checkResponse)
  }
}



export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '1aba0e2c-04b9-4c00-b9b5-bf0428240f1d',
    'Content-Type': 'application/json'
  }
})

