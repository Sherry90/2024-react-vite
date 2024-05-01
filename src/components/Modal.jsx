import classes from "./Modal.module.css"

const Modal = () => {
  return <>
    <div className={classes.backdrop} />
    <dialog className={classes.modal}></dialog>
  </>
};

export default Modal;
