import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Dashboard = () => {
    const { displayName, email } = useAuthState(auth);
    return (
        <div>

            <div style={{ backgroundColor: 'blue' }}><h1 style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px' }}>Dashboard</h1>

            </div>

            <div className="clo-md-4">
                <h3>{displayName}</h3>
                <p>{email}</p>
            </div>
            <div className="clo-md-8">

            </div>
        </div>
    );
};

export default Dashboard;