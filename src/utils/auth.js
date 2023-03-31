export const BASE_URL = "https://auth.nomoreparties.co";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export function register(email, password) {
  return fetch(BASE_URL + '/signup', {
    method: 'POST',
    body: JSON.stringify(email, password),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse)
}

export function login(email, password) {
  return fetch(BASE_URL + '/signin', {
    method: 'POST',
    body: JSON.stringify(email, password),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse)
    .then((res) => {
      if (res.token) {
        localStorage.setItem("jwt", res.token);
      }
      return res;
    });
}

export function getToken(token) {
  return fetch(BASE_URL + '/users/me', {
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
    .then(checkResponse)
}
