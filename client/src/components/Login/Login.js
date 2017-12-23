import React from 'react';
import Modal from 'react-responsive-modal';
import OAuth from "./OAuth";


const Login = (props) => {
  return (
    <div className="example">
      <button className="btn btn-action" onClick={props.onOpenModal}>Login</button>
      <Modal open={props.modalIsOpen} onClose={props.onCloseModal} little>
        <br />
        <h2>Google or Facebook Login</h2>
        <p>Social Media Login Coming Soon</p>
        <OAuth />
      </Modal>
    </div>
  );
}

export default Login;