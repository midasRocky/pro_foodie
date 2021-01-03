import axios from 'axios';
import { ICreatePost, IGetNewsFeed, IRegister } from '~/types/types';

const foodieUrl = process.env.FOODIE_URL || 'http://localhost:9000';
const foodieApiVersion = process.env.FOODIE_API_VERSION || 'v1';
axios.defaults.baseURL = `${foodieUrl}/api/${foodieApiVersion}`;
axios.defaults.withCredentials = true;

export const login = async (email: string, password: string) => {
    try {
        const req = await axios({
            method: 'POST',
            url: '/authenticate',
            data: { email, password }
        });

        return Promise.resolve(req.data.data);
    } catch (e) {
        return Promise.reject(e.response.data);
    }
};

export const checkAuthSession = async () => {
    try {
        const req = await axios({
            method: 'GET',
            url: '/check-session',
        });

        return Promise.resolve(req.data.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const register = async ({ email, password, username }: IRegister) => {
    try {
        const req = await axios({
            method: 'POST',
            url: '/register',
            data: {
                email,
                password,
                username
            }
        });

        return Promise.resolve(req.data.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const logout = async () => {
    try {
        await axios({
            method: 'DELETE',
            url: '/logout',
        });

        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e.response.data);
    }
}

export const getNewsFeed = async ({ offset = 0 }: IGetNewsFeed) => {
    try {
        const req = await axios({
            method: 'GET',
            url: '/feed',
            params: {
                offset
            }
        });

        return Promise.resolve(req.data.data)
    } catch (e) {
        return Promise.reject(e.response.data);
    }
}

export const createPost = async (post: ICreatePost) => {
    try {
        const req = await axios({
            method: 'POST',
            url: '/post',
            data: post
        });

        return Promise.resolve(req.data.data)
    } catch (e) {
        return Promise.reject(e.response.data);
    }
}

export const getUser = async (username: string) => {
    try {
        const req = await axios({
            method: 'GET',
            url: `/${username}`
        });

        return Promise.resolve(req.data.data)
    } catch (e) {
        return Promise.reject(e.response.data);
    }
}