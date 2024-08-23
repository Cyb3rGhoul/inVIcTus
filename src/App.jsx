import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Faculty from './pages/Faculty';
import Error from './pages/Error';
// import FFCS from './pages/FFCS';
// Import other pages

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Error/>} />
                <Route path="/find-faculty" element={<Faculty/>} />
                {/* <Route path="/ffcs" element={<FFCS />} /> */}
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
