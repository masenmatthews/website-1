import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <div className={styles.background}>
    <div className={styles.container}>
      <h1 className={styles.header}>
        <Link to="/">
          Portland
          <br />
          <span className={styles.subheader}>Future Leaders in Tech</span>
        </Link>
        <button className={styles.join}>
          <Link to="/survey/">Join</Link>
        </button>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
