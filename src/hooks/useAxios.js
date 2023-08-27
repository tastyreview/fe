import axios from 'axios';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

const useAxios = () => {
    const { refreshAccessToken } = useRefreshToken();
    const { auth } = useAuth();
    // axios Instance
    const authRequiredAxios = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.accessToken} `,
        },
        withCredentials: true,
    });
    //axios response Interceptors
    useEffect(() => {
        const responseIntercept = authRequiredAxios.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                // originRequest axios config
                const originRequest = error.config;
                if (!originRequest.sent) {
                    originRequest.sent = true;
                    //get new Access Token by refresh token
                    const newAccessToken = await refreshAccessToken();
                    originRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    //retry axios with refreh token
                    return authRequiredAxios(originRequest);
                }
                return Promise.reject(error);
            },
        );

        return () => {
            authRequiredAxios.interceptors.response.eject(responseIntercept);
        };
    }, [auth, refreshAccessToken]);

    return { authRequiredAxios };
};

export default useAxios;