import axios from 'axios'

export default {
  github: axios.create({
    baseURL: 'https://api.github.com',
  }),
}
