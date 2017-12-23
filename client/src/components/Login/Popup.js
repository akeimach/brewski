import React from 'react';
import Modal from 'react-responsive-modal';
import { google } from "./google";

export default class Popup extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="example">
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Login
        </button>{' '}
        <Modal open={open} onClose={this.onCloseModal} little>
          <br />
          <h2>Google or Facebook Login</h2>
          <p>
            Social Media Login Coming Soon
          </p>
          <google />
        </Modal>
      </div>
    );
  }
}