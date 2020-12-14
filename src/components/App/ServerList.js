import React, { useEffect, useState } from 'react';

import ServerItem from './ServerItem';
import { InfoContainer } from './styles';

import fakeServers from '../../fakeApi';
//const columns = [
//    { field: 'id', headerName: 'ID', width: 70 },
//    { field: 'firstName', headerName: 'First name', width: 130 },
//    { field: 'lastName', headerName: 'Last name', width: 130 },
//    {
//      field: 'age',
//      headerName: 'Age',
//      type: 'number',
//      width: 90,
//    },
//    {
//      field: 'fullName',
//      headerName: 'Full name',
//      description: 'This column has a value getter and is not sortable.',
//      sortable: false,
//      width: 160,
//      valueGetter: (params) =>
//        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//    },
//  ];
  
//  const rows = [
//    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//  ];

const ServersList = () => {
    const [servers, setServers]= useState([]);
    
    useEffect(() => {
        setServers(fakeServers);
    }, [])

    return (
        <InfoContainer>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                <thead>
                    <th>Instância</th>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Data de início</th>
                    <th>IP Privado</th>
                    <th>Estado</th>
                </thead>
                <tbody>
                    {servers.length &&
                        servers?.map(item => (
                            <ServerItem 
                                instance={item.Instance}
                                id={item.InstanceId}
                                type={item.InstanceType}
                                launchTime={item.LaunchTime}
                                privateIp={item.PrivateIpAddress}
                                state={item.InstanceState}                      
                            />
                    ))}
                    
                </tbody>
            </table>
        </InfoContainer>
    )
};

export default ServersList;