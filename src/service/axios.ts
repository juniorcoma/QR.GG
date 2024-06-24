import axios from 'axios';

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
  baseURL: process.env.CLIENT,
});
