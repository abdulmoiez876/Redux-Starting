import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const authenticated = useSelector(state => state.auth.authenticated);

  return (
    <>
      <Header />
      {!authenticated ?
        <Auth />
        :
        <UserProfile/>
      }
      <Counter />
    </>
  );
}

export default App;
