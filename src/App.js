import './App.css';
import Home from './pages/Home';
import Home2 from './pages/home2'; 
import Home3 from './pages/home3';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function App() {
  return (
    <div className="App">
      <Home />
      <div className="page-container">  
       <Home2 /> 
       <Home3 />
      </div> 
    </div>
  );
}

export default App;
