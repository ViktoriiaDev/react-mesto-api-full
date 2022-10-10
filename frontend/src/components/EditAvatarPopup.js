import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      submitButtonText={"Сохранить"}
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Ссылка на аватар"
        name="avatar"
        id="avatar-link"
        type="url"
        className="popup__form-input popup__form-input_avatar_link"
        required
        ref={inputRef}
      />
      <span className="popup__form-input-error avatar-link-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
