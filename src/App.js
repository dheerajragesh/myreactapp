import Counter from './components/Counter';
import Greeting from './components/Greeting'; 
import Todolist from './components/Todolist';
import './App.css';
import Home from './pages/Home';
import Home2 from './pages/home2'; 
import Home3 from './Home3';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function App() {
  return (
    <div className="App">
      <Home />
      <Home3 />
      <div className="page-container">  
       <Home2 /> 
      </div> 
    </div>
  );
}

export default App;