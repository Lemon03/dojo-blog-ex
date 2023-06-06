import NavBar from './component/NavBar';
import Home from './component/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Create from './component/Create';
import BlogDetails from './component/BlogDetails';
import Notfound from './component/Notfound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
