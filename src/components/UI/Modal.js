import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const portalEl = document.getElementById('overlays');

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
    return (
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose}/>, portalEl)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
        </Fragment>
    )
}

export default Modal;
