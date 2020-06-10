import cookie from 'js-cookie';

export default function getToken() {
  const token = cookie.get('token');
  return token;
}
