import { SignupDataType } from '@/types/api';
import { authorizationClient } from './axios';
import { API } from '@/constant/api';

export const user_request = Object.freeze({
  postSignup: async (data: SignupDataType) => {
    const { data: addUserData } = await authorizationClient.post(`${API.USER}`, data);
    return addUserData;
  },
});
