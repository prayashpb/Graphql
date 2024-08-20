
import './App.css';
// import CreateQuote from './components/CreateQuote';
import NavBar from './components/NavBar';
// import Home from './components/Home';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
// import Login from './components/login';
// import Signup from './components/signup';
// import Profile from './components/Profile';

function App() {
  const element= useRoutes(routes)
  return (
    <div>
    <NavBar/>
    {element}
    {/* <Profile/> */} 
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <CreateQuote/> */}
    {/* <Home/> */}
    </div>
  );
}

export default App;
