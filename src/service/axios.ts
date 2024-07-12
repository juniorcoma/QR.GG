import axios from 'axios';
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
export const riotRegionalHost = axios.create({
  headers: {
    'X-Riot-Token': process.env.RIOT_DEVELOPMENT_KEY,
  },
  baseURL: process.env.RIOT_REGIONAL_HOST,
});

export const riotPlatformHost = axios.create({
  headers: {
    'X-Riot-Token': process.env.RIOT_DEVELOPMENT_KEY,
  },
  baseURL: process.env.RIOT_PLATFORM_HOST,
});

export const client = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

export const authorizationClient = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
  baseURL: 'http://localhost:3000/api/v1',
});

export const dataDragon = axios.create({
  baseURL: 'https://ddragon.leagueoflegends.com',
});
