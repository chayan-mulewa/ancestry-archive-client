import { createContext, useContext, useEffect, useState } from 'react';
import { IsValidToken } from '../utils/index';
import { Server } from '../config/index';
import { Loading } from '../components/index';
import axios from 'axios';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (document.cookie.includes('token')) {
                    const isValidTokenResult = await IsValidToken();
                    if (isValidTokenResult) {
                        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
                        const response = await axios.get(Server.userURL + '/token', {
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
            finally {
                await setIsLoading(false);
            }
        };
        fetchData();

        // const auth = () => {
        //     setIsAuthenticated(true);
        // };
        // setTimeout(auth, 5000);

    }, []);

    return (
        <DataContext.Provider value={{ userDetails, setUserDetails, isAuthenticated, setIsAuthenticated, isLoading }}>
            {!isLoading ? (
                children
            ) : (
                <Loading />
            )}
        </DataContext.Provider>
    );
};
