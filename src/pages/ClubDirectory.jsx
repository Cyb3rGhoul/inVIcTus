import React, { useState } from 'react';
import './ClubDirectory.css'; // We will handle styles here
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sample club data categorized into technical and non-technical
const technicalClubs = [
    { id: 1, name: 'Open-source Club', description: 'Explore coding and build cool projects.', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaimdSo9j-bFomvE5TkBuuAjck4zY9IzvZA&s' },
    { id: 2, name: 'Data Science Club', description: 'Build robots and participate in competitions.', logo: 'https://miro.medium.com/v2/resize:fit:2400/1*zxr7B_4p4-0CeS1Qh5ENFw.png' },
    { id: 3, name: 'GDSC VIT Bhopal', description: 'Dive into artificial intelligence and machine learning.', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6zXgBtI__QO0oWojt-sFTYbKXqdVY6L0VA&s' },
    { id: 4, name: 'Cyber Warriors Club', description: 'Learn ethical hacking and cybersecurity.', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-VSP0pjCE5uRWyzrW8WEcQSDbrNDygsfUg&s' },
    { id: 5, name: 'Advanced Intelligence In Electronics & Mechanics (AIEM)', description: 'Explore intelligence in electronics and mechanics.', logo: 'https://example.com/aiem.png' },
    { id: 6, name: 'AI Club', description: 'Discover artificial intelligence and its applications.', logo: 'https://example.com/aiclub.png' },
    { id: 7, name: 'Android Club', description: 'Build and innovate with Android development.', logo: 'https://example.com/androidclub.png' },
    { id: 8, name: 'Anime Club', description: 'Engage with anime culture and related activities.', logo: 'https://example.com/animeclub.png' },
    { id: 9, name: 'ANTERIX Club', description: 'A club focusing on advanced technologies and innovations.', logo: 'https://example.com/anterixclub.png' },
    { id: 10, name: 'Antique Arcade Club', description: 'Experience the world of antique arcade gaming.', logo: 'https://example.com/antiquearcadeclub.png' },
    { id: 11, name: 'Bio-Engineering Club', description: 'Explore the intersection of biology and engineering.', logo: 'https://example.com/bioengineeringclub.png' },
    { id: 12, name: 'Blockchain Club', description: 'Dive into blockchain technology and cryptocurrency.', logo: 'https://example.com/blockchainclub.png' },
    { id: 13, name: 'Bashcraft Club', description: 'Enhance your scripting and automation skills.', logo: 'https://example.com/bashcraftclub.png' },
    { id: 14, name: 'Cloud Zone', description: 'Explore cloud computing technologies.', logo: 'https://example.com/cloudzone.png' },
    { id: 15, name: 'Coding Blocks', description: 'Learn and practice coding with a community of developers.', logo: 'https://example.com/codingblocks.png' },
    { id: 16, name: 'D2C Igniters Club', description: 'Develop direct-to-consumer business strategies.', logo: 'https://example.com/d2cignitersclub.png' },
    { id: 17, name: 'E-Cell', description: 'Support and grow entrepreneurship and startups.', logo: 'https://example.com/ecell.png' },
    { id: 18, name: 'Edu4U', description: 'Provide education and support to underprivileged communities.', logo: 'https://example.com/edu4u.png' },
    { id: 19, name: 'E-Green Club', description: 'Promote eco-friendly practices through green technology.', logo: 'https://example.com/egreenclub.png' },
    { id: 20, name: 'E-Commerce Club', description: 'Learn about e-commerce strategies and platforms.', logo: 'https://example.com/ecommerceclub.png' },
    { id: 21, name: 'Electric Vehicle Club', description: 'Engage with the latest innovations in electric vehicles.', logo: 'https://example.com/evclub.png' },
    { id: 22, name: 'Fraternity of Young Innovators Club', description: 'Foster young innovation and entrepreneurship.', logo: 'https://example.com/fyiclub.png' },
    { id: 23, name: 'Freelancing Club', description: 'Explore the world of freelancing and independent work.', logo: 'https://example.com/freelancingclub.png' },
    { id: 24, name: 'Health Informatics Club', description: 'Bridge the gap between healthcare and information technology.', logo: 'https://example.com/healthinformaticsclub.png' },
    { id: 25, name: 'IoT Club', description: 'Discover the possibilities of the Internet of Things.', logo: 'https://example.com/iotclub.png' },
    { id: 26, name: 'IoS Club', description: 'Develop and explore the iOS ecosystem.', logo: 'https://example.com/iosclub.png' },
    { id: 27, name: 'LINPACK Club', description: 'Learn about supercomputing and high-performance computing.', logo: 'https://example.com/linpackclub.png' },
    { id: 28, name: 'Linux Club', description: 'Explore and learn about Linux operating systems.', logo: 'https://example.com/linuxclub.png' },
    { id: 29, name: 'Microsoft Technical Club', description: 'Learn about Microsoft technologies and products.', logo: 'https://example.com/microsofttechnicalclub.png' },
    { id: 30, name: 'OWASP Club', description: 'Focus on web application security.', logo: 'https://example.com/owaspclub.png' },
    { id: 31, name: 'PSI Society', description: 'Explore various aspects of science and technology.', logo: 'https://example.com/psisociety.png' },
    { id: 32, name: 'Ramanuja Mathematica Club', description: 'Delve into advanced mathematics and its applications.', logo: 'https://example.com/ramanujaclub.png' },
    { id: 33, name: 'Robotics Club', description: 'Design, build, and program robots.', logo: 'https://example.com/roboticsclub.png' },
    { id: 34, name: 'Software Development Club', description: 'Learn and practice software development methodologies.', logo: 'https://example.com/softwaredevelopmentclub.png' },
    { id: 35, name: 'Stats-O-Locked Club', description: 'Explore statistics and data analysis.', logo: 'https://example.com/statslockedclub.png' },
    { id: 36, name: 'Startup Club', description: 'Learn about starting and growing businesses.', logo: 'https://example.com/startupclub.png' },
    { id: 37, name: 'Techno Mech', description: 'Explore the intersection of technology and mechanics.', logo: 'https://example.com/technomech.png' },
    { id: 38, name: 'The Finance Club', description: 'Learn about finance, investing, and economics.', logo: 'https://example.com/financeclub.png' },
    { id: 39, name: 'Virtual Reality & Gaming Club', description: 'Explore VR technology and game development.', logo: 'https://example.com/vrgamingclub.png' },
    { id: 40, name: 'VITronix Club', description: 'Focus on electronics and related technologies.', logo: 'https://example.com/vitronixclub.png' },
    { id: 41, name: 'VIT Bhopal Cyber Warriors', description: 'Learn about cybersecurity and ethical hacking.', logo: 'https://example.com/vitbhopalcyberwarriors.png' },
];

const nonTechnicalClubs = [
    { id: 5, name: 'Biz Whiz Club', description: 'Enhance your business skills and network with professionals.', logo: 'bizwhiz.png' },
    { id: 6, name: 'Cognitive Fitness Club', description: 'Promote mental and physical fitness activities.', logo: 'cognitivefitness.png' },
    { id: 7, name: 'Cooking and Feasting Club', description: 'Indulge in cooking and explore the art of feasting.', logo: 'cooking.png' },
    { id: 8, name: 'Dance Club', description: 'Show your moves and perform in events.', logo: 'dance.png' },
    { id: 9, name: 'Defence Warriors Club', description: 'Learn self-defense and other warrior activities.', logo: 'defencewarriors.png' },
    { id: 10, name: 'Dramatics Club', description: 'Showcase your acting talents and perform in plays.', logo: 'dramatics.png' },
    { id: 11, name: 'English Literary Club', description: 'Engage in literary activities like poetry and debate.', logo: 'englishliterary.png' },
    { id: 12, name: 'Fine Arts Club', description: 'Explore your artistic side through various fine arts.', logo: 'finearts.png' },
    { id: 13, name: 'Fusion Club', description: 'Blend music, dance, and arts in a fusion of creativity.', logo: 'fusion.png' },
    { id: 14, name: 'Insights Club', description: 'Gain insights into diverse topics and discussions.', logo: 'insights.png' },
    { id: 15, name: 'MUN Club', description: 'Participate in Model United Nations and global discussions.', logo: 'mun.png' },
    { id: 16, name: 'Music & Band Club', description: 'Join our music club to practice and perform.', logo: 'musicband.png' },
    { id: 17, name: 'Nature & Trekking Club', description: 'Explore nature and participate in trekking adventures.', logo: 'naturetrekking.png' },
    { id: 18, name: 'Photography & Movie Making Club', description: 'Capture moments and create cinematic masterpieces.', logo: 'photography.png' },
];


const ClubDirectory = () => {
    const [isTechnicalVisible, setIsTechnicalVisible] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    // Combined list of clubs for searching
    const clubs = isTechnicalVisible ? technicalClubs : nonTechnicalClubs;

    // Filtered clubs based on the search term
    const filteredClubs = clubs.filter((club) =>
        club.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCategoryChange = (isTechnical) => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsTechnicalVisible(isTechnical);
            setIsAnimating(false);
        }, 300); // Set the timeout equal to the CSS animation duration
    };

    return (
        <>
            <body>
                <div className="club-directory">
                    <h2 className="directory-title">Explore Clubs</h2>

                    {/* Search Bar */}
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search clubs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        {searchTerm && (
                            <div className="suggestions-container">
                                {filteredClubs.map((club) => (
                                    <div key={club.id} className="suggestion-item">
                                        {club.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Toggle buttons */}
                    <div className="toggle-buttons">
                        <button
                            className={`toggle-btn ${isTechnicalVisible ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(true)}
                            disabled={isTechnicalVisible}
                        >
                            Technical Clubs
                        </button>
                        <button
                            className={`toggle-btn ${!isTechnicalVisible ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(false)}
                            disabled={!isTechnicalVisible}
                        >
                            Non-Technical Clubs
                        </button>
                    </div>

                    {/* Display club cards with animation */}
                    <div className={`club-cards-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                        {filteredClubs.map((club) => (
                            <div key={club.id} className="club-card">
                                <img src={club.logo} alt={`${club.name} logo`} className="club-logo" />
                                <h3>{club.name}</h3>
                                <p>{club.description}</p>
                                <button className="club-btn">Join Now</button>
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="footer" style={{ marginTop: 50 }}>
                    <Footer />
                </footer>
                <a
                    href="https://forms.gle/NEjNrLCoos6iqEgYA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="add-club-btn"
                >
                    <span className="add-club-text">Add Your Club</span> ➡️
                </a>
            </body>
        </>
    );
};

export default ClubDirectory;
