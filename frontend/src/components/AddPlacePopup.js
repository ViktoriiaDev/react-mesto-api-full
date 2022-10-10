import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
      submitButtonText={"Создать"}
    >
      <input
        value={name}
        onChange={handleChangeName}
        placeholder="Название"
        name="place-name"
        id="place-input"
        className="popup__form-input popup__form-input_place_name"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__form-input-error place-input-error"></span>
      <input
        value={link}
        onChange={handleChangeLink}
        placeholder="Ссылка на картинку"
        name="place-link"
        id="place-link"
        type="url"
        className="popup__form-input popup__form-input_place_link"
        required
      />
      <span className="popup__form-input-error place-link-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
