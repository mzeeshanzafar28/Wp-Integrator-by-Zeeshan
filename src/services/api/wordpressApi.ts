import axios, { AxiosResponse } from 'axios';
import { getApiBaseUrl } from '@utils/constants';

let api;
let currentBaseUrl = '';

const createApiInstance = (baseUrl: string) => {
  api = axios.create({
    baseURL: baseUrl,
  });
  console.log(`API instance created with baseURL: ${baseUrl}`);
};

const initializeApiInstance = () => {
  const initialBaseUrl = getApiBaseUrl();
  currentBaseUrl = initialBaseUrl;
  createApiInstance(initialBaseUrl);
};

initializeApiInstance(); // Initial creation of API instance

// Check for base URL changes at regular intervals
const intervalId = setInterval(() => {
  const newBaseUrl = getApiBaseUrl();
  if (newBaseUrl !== currentBaseUrl) {
    currentBaseUrl = newBaseUrl;
    createApiInstance(newBaseUrl);
    clearInterval(intervalId);
    refreshApp(); // Call a function to refresh the app
  }
}, 5000); // Adjust the interval time as needed

const handleRequest = async <T>(request: Promise<AxiosResponse<T>>) => {
  try {
    const response = await request;
    console.log("RESPONSE DATA BY ZEESHAN: " + JSON.stringify(response.data));
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    throw error;
  }
};

export const get = <T>(url: string) => handleRequest<T>(api.get(url));
export const post = <T>(url: string, data: any) => handleRequest<T>(api.post(url, data));
export const put = <T>(url: string, data: any) => handleRequest<T>(api.put(url, data));
export const del = <T>(url: string) => handleRequest<T>(api.delete(url));

// Function to refresh the app
const refreshApp = () => {
  console.log('App is refreshing...');

};
