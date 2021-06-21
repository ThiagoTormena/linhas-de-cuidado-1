import axios from "axios"
import urls from '../endpoints/urls';

export default {
  async getAllDiabetesDirectories() {
    let res = await axios.get(urls.HOME + "/diabetes");
    return res.data;
  },
  async getOneDiabetesDirectory(DirectoryId, token) {
    let res = await axios.get(urls.HOME + "/diabetes/" + DirectoryId, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
  },
  async getAllHipertensaoDirectories() {
    let res = await axios.get(urls.HOME +  "/hipertensao");
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