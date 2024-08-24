import React, { useState } from 'react';
import './Faculty.css'; // Ensure to add styles here
import image from '../assets/floorPlan.png';

function Faculty() {
  const [activeBox, setActiveBox] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedRoomInfo, setSelectedRoomInfo] = useState(''); // Initially empty
  const [arrowVisible, setArrowVisible] = useState(false);

  const faculties = [
    { room: 'G-110', name: 'Dr. Pavan Kumar' },
    { room: 'A-111', name: 'Dr. Rupesh Kumari' },
    { room: 'A-112', name: 'Dr. Chandrabhan Seniya' },
    { room: 'A-113', name: 'Dr. Faisal Rasheed Lone' },
    { room: 'A-114', name: 'Dr. Sajjad Ahmed' },
    { room: 'A-115', name: 'Sripriyan' },
    { room: 'A-116', name: 'Mr. Abhishek Kumar' },
    { room: 'A-117', name: 'Azra Nazir' },
    { room: 'B-301', name: 'Dr.Hariharan R' },
    { room: 'B-302', name: 'Nilam Venkatakoteswararao' },
    { room: 'B-303', name: 'Sheerin Kayenat' },
    { room: 'B-304', name: 'Sumit Mittal' },
    { room: 'B-305', name: 'Dr. Monika Sankat' },
    { room: 'B-306', name: 'Harshlata Vishwakarma' },
    { room: 'B-307', name: 'Narottam Das Patel' },
    { room: 'B-308', name: 'Dr. Nilamadhab Mishra' },
  ];

  const handleBoxClick = (box) => {
    setActiveBox(box);
    setArrowVisible(false); // Hide arrow when manually clicking
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredSuggestions = faculties.filter((faculty) =>
        faculty.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
      setSelectedRoomInfo(''); // Clear room info when search is cleared
      setActiveBox(null);
      setArrowVisible(false);
    }
  };

  const getRoomAndFloorInfo = (room) => {
    let floorInfo = '';
    const [building, roomNumber] = room.split('-');

    if (building === 'G') {
      floorInfo = `Ground Floor, Room: ${room}`;
    } else {
      const floorNumber = Math.floor(parseInt(roomNumber) / 100);
      floorInfo = `Floor ${floorNumber}, Room: ${room}`;
    }

    return floorInfo;
  };

  const handleSuggestionClick = (faculty) => {
    setSearchQuery(faculty.name);
    setSelectedRoomInfo(getRoomAndFloorInfo(faculty.room)); // Update room info on suggestion click
    setSuggestions([]);

    const roomLetter = faculty.room.charAt(0);
    setActiveBox(roomLetter);
    setArrowVisible(true); // Show arrow on search match
  };

  return (
    <div className={`container ${suggestions.length > 0 ? 'suggestions-visible' : ''}`}>
      <input
        type="text"
        placeholder="Search for a faculty..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((faculty, index) => (
            <li key={index} onClick={() => handleSuggestionClick(faculty)}>
              {faculty.name}
            </li>
          ))}
        </ul>
      )}
      <p className="room-display">
        {selectedRoomInfo || 'Room info will appear here after selecting a faculty'}
      </p>
      <img src={image} alt="layout" className="layout-image" />
      <div className={`box box-a ${activeBox === 'A' ? 'active-a' : ''}`}>
        A {activeBox === 'A' && arrowVisible && <span className="arrow">→</span>}
      </div>
      <div className={`box box-b ${activeBox === 'B' ? 'active' : ''}`}>B</div>
      <div className={`box box-c ${activeBox === 'C' ? 'active-c' : ''}`}>
        C {activeBox === 'C' && arrowVisible && <span className="arrow">→</span>}
      </div>
      <div className={`box box-d ${activeBox === 'D' ? 'active' : ''}`}>D</div>
    </div>
  );
}

export default Faculty;
