import React from 'react';

import BasicInfoContainer from './ServerList';
import Dashboard from '../Dashboard/Dashboard';

const Main = () => {
    return (
        <>
            <Dashboard />
            <BasicInfoContainer />
        </>
    )
}

export default Main;