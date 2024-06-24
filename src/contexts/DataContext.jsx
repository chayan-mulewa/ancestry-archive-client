import { createContext, useContext, useEffect, useState } from 'react';
import { IsValidToken } from '../utils/index';
import { Server } from '../config/index';
import axios from 'axios';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {

    const [myDetails, setMyDetails] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (document.cookie.includes('token')) {
                    const isValidTokenResult = await IsValidToken();
                    if (isValidTokenResult) {
                        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
                        const response = await axios.get(Server.usersURL + '/details', {
                            headers: {
                                Authorization: `Bearer ${token}`
                            },
                            withCredentials: true
                        });
                        await setMyDetails(response.data.data);
                        await setIsAuthenticated(true);
                    }
                }
            } catch (error) {

            }
        };
        fetchData();

        // const auth = () => {
        //     setIsAuthenticated(true);
        // };
        // setTimeout(auth, 5000);

    }, []);

    return (
        <DataContext.Provider value={{ myDetails, setMyDetails, isAuthenticated }}>
            {children}
        </DataContext.Provider>
    );
};
