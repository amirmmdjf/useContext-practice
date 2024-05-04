import './App.css';
import { useState, createContext } from 'react';
import { useRoutes } from 'react-router';
import routes from './routes';
import Header from './components/header/header';

export const AppContext = createContext()


function App() {

  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(false)
  const router = useRoutes(routes)
  console.log(username);

  return (
    <AppContext.Provider value={{ isLogin, setIsLogin, username, setUsername }}>
      <div className={`text-center h-screen`}>
        <Header />
        {router}
      </div>
    </AppContext.Provider>
  )
}

export default App;
