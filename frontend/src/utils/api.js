const { NODE_ENV } = process.env;

export const baseUrl = NODE_ENV === 'production' ? 'https://api.viktoriiadev.nomoredomains.icu' : "http://localhost:3001";

class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    _getResponseData(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        
        headers: this._headers
      })
        .then(this._getResponseData)
  
    }
  
    getProfileInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        credentials: "include",
        headers: this._headers
      })
        .then(this._getResponseData)
    }
  
    sendUserInfo(name, about) {
      return fetch(`${this._baseUrl}/users/me`, {
        credentials: "include",
        
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
        .then(this._getResponseData)
  
    }
  
    addCard(name, link) {
      return fetch(`${this._baseUrl}/cards`, {
        credentials: "include",
        
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
        .then(this._getResponseData)
    }
  
  
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        credentials: "include",
        
        method: 'DELETE',
        headers: this._headers,
      })
        .then(this._getResponseData)
    }
  
    like(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        credentials: "include",

        method: 'PUT',
        headers: this._headers,
      })
        .then(this._getResponseData)
    }
  
    deleteLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        credentials: "include",
        
        method: 'DELETE',
        headers: this._headers,
      })
        .then(this._getResponseData)
  
    }

    changeLikeCardStatus(cardId, isLiked) {
      return isLiked ? this.deleteLike(cardId) : this.like(cardId)
    };
  
    changeAvatar(avatar) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        credentials: "include",
        
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar,
        })
      })
        .then(this._getResponseData)
  
    }
  }

  export const api = new Api({
    baseUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
