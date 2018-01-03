import React from "react";
import Modal from "react-responsive-modal";
import OAuth from "./OAuth";


const Login = (props) => {
  const modalContent = (
    <div>
      <br />
      <h2>Google Authentication</h2>
      <OAuth />
    </div>
  );
  return (
    <div>
      <button className="btn btn-action" name="loginModalOpen" onClick={props.openModal}>Login</button>
      <Modal
        open={props.isOpen}
        onClose={props.closeModal}
        children={modalContent}
        little
      />
    </div>
  );
}

export default Login;