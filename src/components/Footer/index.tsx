import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo</span> @ {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
