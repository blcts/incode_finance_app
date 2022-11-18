import axios from "axios";

export const getUserToken = async (token: string) => {
  const authRequest = await axios.get(`/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;',
    }
  });

  return authRequest;
};

