import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      submitButtonText={"Сохранить"}
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        onChange={handleChangeName}
        placeholder="Имя"
        name="name"
        id="name-input"
        className="popup__form-input popup__form-input_input_name"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__form-input-error name-input-error"></span>
      <input
        value={description}
        onChange={handleChangeDescription}
        placeholder="Профессия"
        name="description"
        id="description-input"
        className="popup__form-input popup__form-input_input_description"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__form-input-error description-input-error"></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
