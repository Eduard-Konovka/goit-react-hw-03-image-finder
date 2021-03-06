import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import IconButton from './components/IconButton/IconButton';
import { ReactComponent as CloseIcon } from './components/IconButton/cross.svg';
import './App.css';

class App extends Component {
  state = {
    imageRequest: '',
    largeImage: '',
    showModal: false,
  };

  handleFormSubmit = imageRequest => {
    this.setState({ imageRequest });
  };

  setTarget = largeImage => {
    this.setState({ largeImage, showModal: true });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { largeImage, showModal } = this.state;
    const toggleModal = this.toggleModal;
    const setTarget = this.setTarget;

    return (
      <>
        <Searchbar forSubmit={this.handleFormSubmit} />
        <ImageGallery
          imageRequest={this.state.imageRequest}
          toClick={setTarget}
        />
        <ToastContainer />
        {showModal && (
          <Modal forClose={toggleModal}>
            <img src={largeImage} alt={largeImage} />
            <IconButton
              type="button"
              aria-label="Добавить заметку"
              onClick={toggleModal}
            >
              <CloseIcon fill="#fff" />
            </IconButton>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
