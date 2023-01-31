import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.auth.authenticated);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {
            authenticated &&
            <>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
              <li>
                <button onClick={() => {
                  dispatch(authActions.logout());
                }}>Logout</button>
              </li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
