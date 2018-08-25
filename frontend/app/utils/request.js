import axios from 'axios';

async function request (isAuthenticatedRequest, method, url, data = {}) {
  const headers = {
    'content-type': 'application/json',
  };
  if (isAuthenticatedRequest) {
    const user = JSON.parse(localStorage.getItem('user'));
    headers.authorization = user.token;
  }
  const response = await axios({
    url,
    method,
    headers,
    data,
  });
  return response.data;
}


export async function authenticatedRequest (method, url, data) {
  return request(true, method, url, data);
}

export async function unauthenticatedRequest (method, url, data) {
  return request(false, method, url, data);
}
