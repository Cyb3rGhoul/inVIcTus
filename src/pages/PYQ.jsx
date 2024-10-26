import React, { useState } from 'react';
import './pyq.css';

const pyqData = {
    CSE: {
        SY: [
            { subject: 'Data Structures', file: '#' },
            { subject: 'Database Systems', file: '#' },
        ],
        TY: [
            { subject: 'Operating Systems', file: '#' },
            { subject: 'Database Systems', file: '#' },
        ],
        BY: [
            { subject: 'Operating Systems', file: '#' },
            { subject: 'Database Systems', file: '#' },
        ],
    },
    ECT: {
        SY: [
            { subject: 'Python', file: '#' },
            { subject: 'Digital Electronics', file: '/#' },
        ],
        TY: [
            { subject: 'Digital Signal Processing', file: '#' },
            { subject: 'Control Systems', file: '#' },
        ],
        BY: [
            { subject: 'Microwave Engineering', file: '#' },
            { subject: 'satellite Communication', file: '#' },
        ],

    },
    IT: {
        SY: [
            { subject: 'CAO', file: '#' },
            { subject: 'DSA', file: '#' },

        ],
        TY: [
            { subject: 'Microprocessors', file: '#' },
            { subject: 'Control Systems', file: '#' },
        ],
        BY: [
            { subject: 'Microprocessors', file: '#' },
            { subject: 'Control Systems', file: '#' },
        ],
        
    },
    Civil: {
        SY: [
            { subject: 'Circuit Theory', file: '#' },
            { subject: 'Digital Electronics', file: '#' },
        ],
        TY: [
            { subject: 'Microprocessors', file: '#' },
            { subject: 'Control Systems', file: '#' },
        ],
        BY: [
            { subject: 'Microprocessors', file: '#' },
            { subject: 'Control Systems', file: '#' },
        ],
        
    },
    Mechanical: {
        SY: [
            { subject: 'Microprocessors', file: '#' },
            { subject: 'Control Systems', file: '#' },
        ],
        TY: [
            { subject: 'Circuit Theory', file: '#' },
            { subject: 'Digital Electronics', file: '#' },
        ],
        BY: [
            { subject: 'Microprocessors', file: '#' },
            { subject: 'Control Systems', file: '#' },
        ],
    },
};

const pyq = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('ECT');
    const [selectedYear, setSelectedYear] = useState('BY'); // Default selected year

    const departments = Object.keys(pyqData);
    const years = Object.keys(pyqData[selectedDepartment]);

    const filteredPapers = (yearPapers) => {
        return yearPapers.filter((paper) =>
            paper.subject.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="pyq-container">
            <h1>Previous Year Question Papers</h1>
            <input
                type="text"
                placeholder="Search by subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pyq-search"
            />

            <div className="department-selector">
                <label htmlFor="department">Select Department: </label>
                <select
                    id="department"
                    value={selectedDepartment}
                    onChange={(e) => {
                        setSelectedDepartment(e.target.value);
                        setSelectedYear(Object.keys(pyqData[e.target.value])[0]); // Reset to the first year
                    }}
                >
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>
                            {dept.replace(/([A-Z])/g, ' $1').trim()}
                        </option>
                    ))}
                </select>
            </div>

            <div className="year-selector">
                <label htmlFor="year">Select Year: </label>
                <select
                    id="year"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="pyq-list">
                <h2>{selectedYear}</h2>
                {filteredPapers(pyqData[selectedDepartment][selectedYear]).length > 0 ? (
                    filteredPapers(pyqData[selectedDepartment][selectedYear]).map(
                        (paper, index) => (
                            <div key={index} className="pyq-card">
                                <h3>{paper.subject}</h3>
                                <a
                                    href={paper.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download
                                </a>
                            </div>
                        )
                    )
                ) : (
                    <p className="no-results">No papers found for your search.</p>
                )}
            </div>
        </div>
    );
};

export default pyq;
