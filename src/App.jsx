import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Faculty from './pages/Faculty';
import Error from './pages/Error';
import ClubDirectory from './pages/ClubDirectory';
import ReactGA from "react-ga4";

// Initialize Google Analytics
ReactGA.initialize("G-9W3X0KT47K");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/find-faculty" element={<Faculty />} />
                <Route path="/clubs" element={<ClubDirectory />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
