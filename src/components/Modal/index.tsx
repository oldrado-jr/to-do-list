import { ReactNode } from 'react';
import { BiSolidXCircle } from 'react-icons/bi';

// CSS
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  const closeModal = () => {
    const modal = document.querySelector('#modal');
    modal?.classList.add('hide');
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <BiSolidXCircle onClick={closeModal} />
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
