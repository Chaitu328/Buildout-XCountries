import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './components/Card/Card';
import { fetchCountryFlags } from './components/api/api';

function App() {
    const [countryFlags, setCountryFlags] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFlags = async () => {
            try {
                const flags = await fetchCountryFlags();
                setCountryFlags(flags);
            } catch (err) {
                console.error("Error fetching data: ", err.message);
                setError(err.message);
                setCountryFlags([]); // Set to an empty array on error to avoid map on undefined
            }
        };
        getFlags();
    }, []);

    return (
        <Router>
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {error ? (
                        <p>Error loading flags: {error}</p>
                    ) : countryFlags.length > 0 ? (
                        countryFlags.map((flag, index) => (
                            <Card key={index} name={flag.name} img={flag.flag} />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </Router>
    );
}

export default App;
