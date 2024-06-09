import logo from './logo.svg';
import './App.css';
import Navbar from './MainRoutes/Navbar';
import AllRoutes from './MainRoutes/AllRoutes';
import Chatbot from './Pages/Chatbot';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Chatbot/>
      <AllRoutes/>
    </div>
  );
}

export default App;
