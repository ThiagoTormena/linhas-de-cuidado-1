import axios from "axios"
import urls from '../endpoints/urls';
import api from './api';

export default {
  async authenticate() {
    const { email, password } = req.body;

    let res = await api.post(urls.HOME + '/login', { email, password });
    try {
      api.defaults.headers.common['Authorization'] = res.data.token;
      return res.sendStatus(200).send('Auth successfull');
    } catch (err) {
      if (err) res.sendStatus(400).send('Error while authenticating');
    }

  },
  async getAllHipertensaoDirectories() {
    let res = await axios.get(urls.HOME + "/hipertensao");
    return res.data;
  },
  async getOneHipertensaoDirectory(DirectoryId, token) {
    let res = await axios.get(urls.HOME + "/hipertensao/" + DirectoryId, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  }
}