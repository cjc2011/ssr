import axios from 'axios'

const url = process.env.NODE_ENV == 'production' ? 'http://www.chenjiacheng.cn' : 'http://localhost:3001';

console.log(url, 'baseURl')

export default axios.create({
  baseURL: url
})
