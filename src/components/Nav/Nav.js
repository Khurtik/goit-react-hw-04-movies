import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.NavContainer}>
      <ul className={styles.Nav}>
        <li className={styles.itemNavLink}>
          <NavLink
            exact
            activeStyle={{
              color: 'red',
              textDecoration: 'none',
            }}
            to={routes.HOME_PAGE.path}
          >
            Home
          </NavLink>
        </li>

        <li className={styles.itemNavLink}>
          <NavLink
            activeStyle={{ color: 'red', textDecoration: 'none' }}
            to={routes.MOVIES_PAGE.path}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
