import React, { useState } from 'react';
import './Faculty.css'; // Ensure to add styles here
import image from '../assets/floorPlan.png';
import Footer from '../components/Footer';

function Faculty() {
  const [activeBox, setActiveBox] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedRoomInfo, setSelectedRoomInfo] = useState(''); // Initially empty
  const [arrowVisible, setArrowVisible] = useState(false);

  const faculties = [
    { room: 'G-01', name: 'Dr. S. Kannan' },
    { room: 'G-02', name: 'Dr. Vinod Bhatt' },
    { room: 'G-03', name: 'Dr. G. Vishnuvarthanan' },
    { room: 'G-04', name: 'Dr. Manisha Jain' },
    { room: 'G-05', name: 'Dr. Jasmine Selvakimari' },
    { room: 'G-06', name: 'Dr. Manoj Acharya' },
    { room: 'G-07', name: 'Dr. Paras Jain' },
    { room: 'G-08', name: 'Dr. Lakshmi D.' },
    { room: 'G-09', name: 'Dr. PUSHPINDER SINGH PATHEJA' },
    { room: 'G-10', name: 'Dr. Dev brat Gupta' },
    { room: 'G-11', name: 'Dr. R. Senthil Kumar' },
    { room: 'G-12', name: 'Dr. Zaheer Kareem Ansari' },
    { room: 'G-13', name: 'Dr. Nikhil Pateria' },
    { room: 'G-14', name: 'Dr. G.R. Hemalakshmi' },
    { room: 'G-15', name: 'Dr. Venkat padhy' },
    { room: 'G-17', name: 'VIJAY KUMAR TRIVEDI' },
    { room: 'G-18', name: 'Dr. Abha Sharma' },
    { room: 'G-19', name: 'Dr. Dileep Kumar' },
    { room: 'G-20', name: 'D. Harish Babu' },
    { room: 'G-21', name: 'J.P. Shritharanyaa' },
    { room: 'G-22', name: 'Dr. Buvaneswari' },
    { room: 'G-24(AB015-002)', name: 'jagrati Gupta' },
    { room: 'G-25(AB015-003)', name: 'Dr. Rajit Nair' },
    { room: 'G-26 (AB015-004)', name: 'Dr. Trapti Sharma' },
    { room: 'G-27 (AB015-005)', name: 'Dr. Abhay Vidyarthi' },
    { room: 'G-28 (AB015-006)', name: 'Dr. M Suresh' },
    { room: 'G-29 (AB015-007)', name: 'Dr. M manimaran' },
    { room: 'G-30 (AB015-008)', name: 'Dr. Sirajudeen A' },
    { room: 'G-31 (AB015-009)', name: 'Dr. Krishna Chouhan' },
    { room: 'G-32 (AB015-010)', name: 'Dr. S Devaraju' },
    { room: 'G-33 (AB015-011)', name: 'Dr. Manisha Singh' },
    { room: 'A-101', name: 'Dr. Praveen Lalwani' },
    { room: 'A-102', name: 'Dr. Sheetal Sharma' },
    { room: 'A-103', name: 'Dr. BASEERA A' },
    { room: 'A-104', name: 'Dr. M K Jayanthi Kannan' },
    { room: 'A-107', name: 'Dr. Adnan Abbasi' },
    { room: 'A-108', name: 'Dr. Arun Kumar K.' },
    { room: 'A-109', name: 'Dr. Hemant Kumar Nashine' },
    { room: 'A-110', name: 'Dr. Pavan Kumar' },
    { room: 'A-111', name: 'Dr. Rupesh Kumari' },
    { room: 'A-112', name: 'Dr. Chandrabhan Seniya' },
    { room: 'A-113', name: 'Dr. Faisal Rasheed Lone' },
    { room: 'A-114', name: 'Dr. Sajjad Ahmed' },
    { room: 'A-115', name: 'Sripriyan' },
    { room: 'A-116', name: 'Mr. Abhishek Kumar' },
    { room: 'A-117', name: 'Azra Nazir' },
    { room: 'A-118', name: 'Ms Manorama Chouhan' },
    { room: 'A-119', name: 'Arindam Sadhukhan' },
    { room: 'A-120', name: 'Ajay Sharma' },
    { room: 'A-121', name: 'Bhupendra Panchal' },
    { room: 'A-122', name: 'Pranshu Pranjal' },
    { room: '1st floor Ext. Cabin', name: 'Dr. Jayanthi J' },
    { room: 'A-201', name: 'Mamta Agarwal' },
    { room: 'A-202', name: 'Dr. Pon Harshavardhanan' },
    { room: 'A-203', name: 'Navneet Kumar Verma' },
    { room: 'A-204', name: 'Shweta Mukherjee' },
    { room: 'A-205', name: 'Dr. Subash Chandra Bose' },
    { room: 'A-206', name: 'Dr. Sasmita Padhy' },
    { room: 'A-207', name: 'Dr. Sandip Mal' },
    { room: 'A-208', name: 'Dr. Preetam Suman' },
    { room: 'A-209', name: 'Dr. Jyothi Chouhan' },
    { room: 'A-210', name: 'Balaguru S' },
    { room: 'A-211', name: 'Dr Vinesh Kumar' },
    { room: 'A-212', name: 'Dr. M. Maragatharajan' },
    { room: 'A-214', name: 'Dr. Pijush Kanti Mondal' },
    { room: 'A-215', name: 'Dr. Poulami Ghosh' },
    { room: 'A-216', name: 'Harish Chandra' },
    { room: 'A-217', name: 'Dr. Dheresh Soni' },
    { room: 'A-218', name: 'Dr. Gopal S Tandel' },
    { room: 'A-219', name: 'Dr. Vivek Shama' },
    { room: 'A-220', name: 'Ujjwal Kumar Mishra' },
    { room: 'A-221', name: 'MR. JAY PRAKASH MAURYA' },
    { room: 'A-222', name: 'Ar. Vipendra Singh' },
    { room: 'A-223', name: 'Dr. Abdul Rehman' },
    { room: 'A-224', name: 'Dr. S. AANJANKUMAR' },
    { room: 'A-225', name: 'Karthik Rao M C' },
    { room: 'A-226', name: 'Dr. Vijay Kumar Patidar' },
    { room: 'A-227', name: 'Dr. Rajdeep Ghosh' },
    { room: 'A-228', name: 'Dr. Umakanta Meher' },
    { room: 'A-229', name: 'Abhishek Shrivastava' },
    { room: 'A-232', name: 'Vijay Kumar Patel' },
    { room: 'A-233', name: 'Suchismita Patra' },
    { room: 'A-234', name: 'Rahul Kumar Chaturvedi' },
    { room: 'A-235', name: 'Dr. Shahana Gajala Qureshi' },
    { room: 'A-236', name: 'Swati Chauhan' },
    { room: 'A-237', name: 'Anil Kumar' },
    { room: 'A-238', name: 'Dr. Juhi Yasmeen' },
    { room: 'A-239', name: 'Dr. Vivek Parashar' },
    { room: 'A-240', name: 'Dr. Kannaiya Raja N' },
    { room: 'A-241', name: 'Dr A Balaji' },
    { room: 'A-242', name: 'Dr. Siddharth S Chouhan' },
    { room: 'A-243', name: 'Dr Sivasankaran' },
    { room: 'A-244', name: 'Dr Ankur Beohar' },
    { room: 'A-245', name: 'Dr. Siddartha Maiti' },
    { room: 'A-246', name: 'Dr. Soumitra Keshari Nayak' },
    { room: 'A-247', name: 'Dr Swagat Samantray' },
    { room: 'A-248', name: 'Dr. Rajeev' },
    { room: 'A-249', name: 'Dr Sarvanan D' },
    { room: 'A-250', name: 'Dr GK' },
    { room: '2nd floor Ext. Cabin', name: 'Dr. Gunjan Ansari' },
    { room: 'A-301', name: 'Ajay Kumar Bhurjee' },
    { room: 'A-302', name: 'Akshara Makrariya' },
    { room: 'A-303', name: 'Kumar Pandey' },
    { room: 'A-304', name: 'Dr. Bhakti Parashar' },
    { room: 'A-305', name: 'T Venkateswarao' },
    { room: 'A-306', name: 'Rajneesh Kumar Patel' },
    { room: 'A-307', name: 'Shivmanjree Gopaliya' },
    { room: 'A-308', name: 'Dr. Ramu Pashupathi Suganeshwar' },
    { room: 'A-309', name: 'Dr. Virendra Singh Kushwah' },
    { room: 'A-310', name: 'Pallabi Sarkar' },
    { room: 'A-311', name: 'Suchetana Sadhukhan' },
    { room: 'A-312', name: 'Dr Ganeshan R' },
    { room: 'A-313', name: 'Avirup Das' },
    { room: 'A-314', name: 'Dr. Sonal Gupta' },
    { room: 'A-315', name: 'Anita Yadav' },
    { room: 'A-316', name: 'Dr OP Pahari' },
    { room: 'A-317', name: 'Dr Pradeep Kumar Mishra' },
    { room: 'A-318', name: 'Dr Bhumika Choksi' },
    { room: 'A-319', name: 'Dr. Anjali Mathur' },
    { room: 'A-320', name: 'Rohit Sharma' },
    { room: 'A-321', name: 'VVPRVB Suresh Dara' },
    { room: 'A-322', name: 'Dr Anvesh Nella' },
    { room: 'A-323', name: 'Dr Periyanagi' },
    { room: 'A-324', name: 'Dr. Vikas Panthi' },
    { room: 'A-325', name: 'Dr Pradeep Kashyap' },
    { room: 'A-326', name: 'Dr Ashok K Patel' },
    { room: '3rd floor Ext. Cabin', name: 'Ms. Ravina Toppo' },
    { room: 'B-301', name: 'Dr. Hariharan R' },
    { room: 'B-302', name: 'Nilam Venkatakoteswararao' },
    { room: 'B-303', name: 'Sheerin Kayenat' },
    { room: 'B-304', name: 'Sumit Mittal' },
    { room: 'B-305', name: 'Dr. Monika Sankat' },
    { room: 'B-306', name: 'Harshlata Vishwakarma' },
    { room: 'B-307', name: 'Narottam Das Patel' },
    { room: 'B-308', name: 'Dr. Nilamadhab Mishra' },
    { room: 'B-309', name: 'Dr. C. P. Koushik' },
    { room: 'B-310', name: 'Chandrama Swain' },
    { room: 'B-311', name: 'Dr. H. AZATH' },
    { room: 'B-312', name: 'Xavier' },
    { room: 'B-313', name: 'Dr A V R Mayuri' },
    { room: 'B-314', name: 'Dr A V R Mayuri' },
    { room: 'B-315', name: 'Dr. Ajeet Singh' },
    { room: 'A-401', name: 'Benevatho Jaison A' },
    { room: 'A-402', name: 'Dr Komarasamy G' },
    { room: 'A-403', name: 'Dr. K. Murugeswari' },
    { room: 'A-404', name: 'Dr. SUBHASH CHANDRA PATEL' },
    { room: 'A-405', name: 'Saravanan J' },
    { room: 'A-406', name: 'Abdul Rashid' },
    { room: 'A-407', name: 'Dr Jothiaruna' },
    { room: 'A-408', name: 'Dr. Abhinav Kumar' },
    { room: 'A-409', name: 'Shiv Shankar Prasad' },
    { room: 'A-410', name: 'Ajay Kumar Phulre' },
    { room: 'A-411', name: 'M. nirmala' },
    { room: 'A-412', name: 'Pushpdant Jain' },
    { room: 'A-413', name: 'Jitendra Pratap Singh Mathur' },
    { room: 'A-414', name: 'Mrs. Kumkum Dueby' },
    { room: 'A-415', name: 'Dr. Ganeshan G.' },
    { room: 'A-416', name: 'Dr. Enagandula Prasad' },
    { room: 'A-417', name: 'Dr. Pankaj Kumar' },
    { room: 'A-418', name: 'Dr Md. Zeeshan' },
    { room: 'A-419', name: 'Dr Mayank Sharma' },
    { room: 'A-420', name: 'Dr. Amrita Parashar' },
    { room: 'A-421', name: 'Nagarajan I' },
    { room: 'A-422', name: 'Ms. Kalyani Wankehde' },
    { room: 'A-423', name: 'DR. Saurabh Mishra' },
    { room: 'A-424', name: 'Dr. Ramraj Dangi' },
    { room: 'A-425', name: 'Dr. Sonjoy Pan' },
    { room: 'A-426', name: 'DR. Sumit Som' },
    { room: '4th floor Ext. Cabin', name: 'Dr. Santosh Sahu' },
    { room: 'B-401', name: 'Saurabh Bhargava' },
    { room: 'B-402', name: 'Dr. Ranjitha Kumar' },
    { room: 'B-403', name: 'Dr. Priscilla Dinkar Morya' },
    { room: 'B-404', name: 'Devraj Vishnu' },
    { room: 'B-405', name: 'Dr Ankur Jain' },
    { room: 'B-406', name: 'Mr. Ashfaq Ahmed' },
    { room: 'B-407', name: 'Dr. Anand Motwani' },
    { room: 'B-408', name: 'Dr. Thamim' },
    { room: 'B-409', name: 'Dr Jagriti Gupta' },
    { room: 'B-410', name: 'Badla Pawan Babu' },
    { room: 'B-411', name: 'Dr. Ankush Tharkar' },
    { room: 'B-412', name: 'E. NIRMALA' },
    { room: 'B-413', name: 'Md. Tauseef Qamar' },
    { room: 'B-414', name: 'Dr Arup Torai' },
    { room: 'B-415', name: 'Dr. Pavithra Rathinavel' },
    { room: 'C-401', name: 'Dr. Nilesh Kunhare' },
    { room: 'C-402', name: 'Ms. Deeksha Singh' },
    { room: 'C-403', name: 'Adarsh Patel' },
    { room: 'C-404', name: 'Dr. Gaurav Soni' },
    { room: 'A-501', name: 'Dr Saravanan S' },
    { room: 'A-502', name: 'Ankit Pal' },
    { room: 'A-503', name: 'Chour Singh Rajput' },
    { room: 'A-504', name: 'Dr. Raghavendra Mishra' },
    { room: 'A-505', name: 'Arindam Ghosh' },
    { room: 'A-506', name: 'B. Mahendran' },
    { room: 'A-507', name: 'Dipankar Sutradhar' },
    { room: 'A-509', name: 'Humaira Fatima' },
    { room: 'A-510', name: 'Dr. Anju' },
    { room: 'A-511', name: 'Dr. Manoj Kumar' },
    { room: 'A-512', name: 'Santosh Kumar Bhal' },
    { room: 'A-513', name: 'Jitendra Parmar' },
    { room: 'A-514', name: 'Dr. Ravi Verma' },
    { room: 'A-515', name: 'Dr. Juhi Kesarwany' },
    { room: 'A-516', name: 'Mr Santanu Mandal' },
    { room: 'A-517', name: 'Dr Sanjib Nayak' },
    { room: 'A-518', name: 'Dr. Shweta Singh' },
    { room: 'A-519', name: 'Dr. P Monica' },
    { room: 'A-520', name: 'Dr. Saurabh Kumar Maurya' },
    { room: 'A-521', name: 'P. Vayunandanakishore' },
    { room: 'A-522', name: 'Hemanta Kalita' },
    { room: 'A-523', name: 'Kiran Kumar Behera' },
    { room: 'A-524', name: 'Dr. Dipanjana Hazra' },
    { room: 'A-525', name: 'Dr. Arya Priyadarshini' },
    { room: 'A-526', name: 'Khatavkar Vaibhav Kashinath' },
    { room: '5th floor Ext. Cabin', name: 'Dr. Rahul Shrivastava' },
    { room: 'B-501', name: 'DR. RUDRA KALYAN NAYAK' },
    { room: 'B-502', name: 'Dr. Dip Mukherjee' },
    { room: 'B-503', name: 'N. Vignesh' },
    { room: 'B-504', name: 'Jyoti Badge' },
    { room: 'B-505', name: 'Dr. Feroz Babu' },
    { room: 'B-506', name: 'Ms. Pooja' },
    { room: 'B-507', name: 'Ms. Geeta Singh' },
    { room: 'B-508', name: 'Dr. S. K. Das' },
    { room: 'B-509', name: 'Usama Khan' },
    { room: 'B-510', name: 'Mr. Vipin Jain' },
    { room: 'B-511', name: 'Irfan Alam' },
    { room: 'B-512', name: 'Dr. Suneet Joshi' },
    { room: 'B-513', name: 'Dr. Shafiul Alom Ahmed' },
    { room: 'B-514', name: 'Abhishek Raj' },
    { room: 'B-515', name: 'Rajdeep Singh Payal' },
    { room: 'C-501', name: 'Dr. Ram Kumar' },
    { room: 'C-502', name: 'Amit Kumar Singh' },
    { room: 'C-503', name: 'A. Manickam' },
    { room: 'C-504', name: 'Dr. Sultan Alam' },
    { room: 'C-505', name: 'Vijendra Singh Bramhe' },
    { room: 'C-506', name: 'Saurav prasad' },
    { room: 'C-507', name: 'Sukumar' },
    { room: 'C-508', name: 'Ms. Nancy Kumari' },
    { room: 'C-509', name: 'Dr. Hemraj S.L.' },
    { room: 'C-510', name: 'Dr. Vinod Kumar Jatav' },
    { room: 'C-511', name: 'Dr Shweta Saxena' },
    { room: 'C-512', name: 'Soma Saha' },
    { room: 'C-513', name: 'Santosh Kumar Tripathy' },
    { room: 'C-514', name: 'Mr. Sanat Jain' },
    { room: 'C-515', name: 'Dr. Shahab Saquib Sohail' },
    { room: 'C-516', name: 'Dr. G. PRABU KANNA' },
    { room: 'C-517', name: 'D. SARAVANAN' },
    { room: 'C-518', name: 'Dr. Rizwan ur Rahman' },
    { room: 'C-519', name: 'Dr. Vikas Panthi' },
    { room: 'C-520', name: 'Mohd Rafi Lone' },
    { room: 'C-521', name: 'Dr. NITIN KUMAR MISHRA' },
    { room: 'C-523', name: 'Dr. Ashish Kesarwany' },
    { room: 'C-524', name: 'Deep Chandra Upadhyay' },
    { room: 'C-525', name: 'Priyanka Roy' },
    { room: 'C-527', name: 'Dr. Ashish Mohan Yadav' },
    { room: 'C-528', name: 'Mr. Vishal Singh Bhati' },
    { room: 'C-529', name: 'Dr. S. Periyanayagi' },
    { room: 'C-530', name: 'Dr. Abha Trivedi' },
    { room: 'C-531', name: 'Ashok Kumar Baral' },
    { room: 'C-532', name: 'Dr. KR. SIVABALAN' },
    { room: 'C-533', name: 'Dr. Sanay Naha' },
    { room: 'C-534', name: 'Garima Jain' },
    { room: 'C-535', name: 'Dr. Ashok Patel' },
    { room: 'C-536', name: 'Satyam ravi' },
    { room: 'C-537', name: 'Udai Kumar' },
    { room: 'C-538', name: 'Shilpa Suman' },
    { room: 'C-539', name: 'PRATOSH KUMAR PAL' },
    { room: 'C-540', name: 'Prasad Begde' },
    { room: 'A', name: 'Dr. Debashis Adhikari' },
    { room: 'B', name: 'Dr. Debashis Adhikari' },
    { room: 'C', name: 'Dr. Poonkuntran S' },
    { room: 'J', name: 'Mr. ANIL MEWADA' },
    { room: '1', name: 'Dr. YOGESH' },
    { room: '2', name: 'Dr. Neha Choubey' },
    { room: '3', name: 'Mayank Gupta' },
    { room: '1', name: 'Dr. Shriram R' },
    { room: '2', name: 'Dr J MANIKANDAN' },
    { room: '3', name: 'Dr. S. Ananthakumaran' },
    { room: '4', name: 'R. Sukumar' },
    { room: '5', name: 'Dr. Sharad Chandra Tripathi' },
    { room: '6', name: 'Dr. Anirban Bhowmick' },
    { room: '7', name: 'Dr. Hariharasitaraman. S' },
    { room: '9', name: 'Rajendra Mahanandia' },
    { room: 'AB-306', name: 'Dr. Abha Gupta' },
    { room: 'AB-306', name: 'Dr. Sonal Trivedi' },
    { room: 'AB-310', name: 'Mr. RAVI KUMAR SINGH' },
    { room: 'AB-406', name: 'Priyanka Mishra' },
    { room: 'AB-406', name: 'Dr S. VAIRACHILAI' },
    { room: 'AB-410', name: 'Dr Kamlesh Chandravanshi' },
    { room: 'AB-410', name: 'P. Narendra Babu' },
    { room: 'AB-506', name: 'Mr. Vikas Kumar Jain' },
    { room: 'AB-506', name: 'Mr. Narendra Kumar' },
    { room: 'AB-510', name: 'Dr. Anil Kumar Yadav' },
    { room: 'AB-510', name: 'M.R. Thiyagu Priyadharsan' },
    { room: 'AB-210', name: 'Dr. Vipin Mishra' },
    { room: 'AB-210', name: 'Dr. Subrata Nath' },
    { room: 'AB-210', name: 'Rakesh Shrivastava' },
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

  return (<>

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
        {selectedRoomInfo || 'Room info will appear here.'}
      </p>
      <img src={image} alt="layout" className="layout-image" />
      <div className={`box box-a ${activeBox === 'A' ? 'active' : ''}`}>
        A {activeBox === 'A' && arrowVisible && <span className="arrow">←</span>}
      </div>
      <div className={`box box-b ${activeBox === 'B' ? 'active' : ''}`}>
        B {activeBox === 'B' && arrowVisible && <span className="arrow">←</span>}
      </div>
      <div className={`box box-c ${activeBox === 'C' ? 'active active-c' : ''}`}>
        C {activeBox === 'C' && arrowVisible && <span className="arrow">→</span>}
      </div>
      <div className={`box box-d ${activeBox === 'D' ? 'active active-d' : ''}`}>
        D {activeBox === 'D' && arrowVisible && <span className="arrow">→</span>}
      </div>
    </div>
    <div className='footer' style={{marginTop:30}}>
      <Footer />
    </div>

  </>);
}

export default Faculty;
