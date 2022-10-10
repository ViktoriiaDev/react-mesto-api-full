import closeIcon from '../images/close-icon.svg';

const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window popup__content">
        <button onClick={props.onClose} className={`popup__close popup__close_${props.name}`} type="button">
          <img className="popup__close-icon" src={closeIcon} alt="Крест" />
        </button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form"  onSubmit={props.onSubmit} name={props.name} >
          {props.children}
          <button className="popup__form-submit" type="submit">
            {props.submitButtonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm