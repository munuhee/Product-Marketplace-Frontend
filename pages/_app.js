import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState, useEffect } from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import Navbar from '@/components/navbar';

function MyApp({ Component, pageProps }) {

  const isLoggedIn = false;
  const username = "Stephen";
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem('darkMode');
      return storedValue !== null ? JSON.parse(storedValue) : false;
    }
    return false;
  });

  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Provider store={store}>
      <Navbar isLoggedIn={isLoggedIn} username={username} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Component {...pageProps} />
    </Provider>
  );
}


export default MyApp;
