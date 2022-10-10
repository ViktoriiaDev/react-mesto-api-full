import React from "react";
import closeIcon from "../images/close-icon.svg";
import check from "../images/check.svg";
import cross from "../images/cross.svg";

const InfoTooltip = ({ isOpen, onClose, isSuccess }) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__window popup__content popup__window_infotooltip">
        <button onClick={onClose} className={`popup__close`} type="button">
          <img className="popup__close-icon" src={closeIcon} alt="Крест" />
        </button>
        <div className="infotooltip">
          {isSuccess ? (
            <>
              <img className="infotooltip__icon" src={check} alt="Галочка" />
              <div className="infotooltip__title">
                Вы успешно зарегистрировались!
              </div>
            </>
          ) : (
            <>
              <img className="infotooltip__icon" src={cross} alt="Крестик" />
              <div className="infotooltip__title">
                Что-то пошло не так! Попробуйте ещё раз.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;
