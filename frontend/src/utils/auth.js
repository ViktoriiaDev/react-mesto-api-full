const { NODE_ENV } = process.env;

const baseUrl =
  NODE_ENV === "production"
    ? "https://api.viktoriiadev.nomoredomains.icu"
    : "http://localhost:3001";

const checkResponse = async (res) => {
  if (res.ok) {
    const result = await res.json();
    return result.data
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getToken = () => `Bearer ${localStorage.getItem("jwt")}`;

export const BASE_URL = baseUrl;

export const singup = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};
export const singin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  })
    .then(checkResponse)
    .then((data) => data);
};
