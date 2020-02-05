import config from '../config';
import TokenService from '../services/token-service';

const LearnJpnApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(event => Promise.reject(event)) : res.json()
    );
  },
  getWord() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(event => Promise.reject(event)) : res.json()
    );
  }
};

export default LearnJpnApiService;
