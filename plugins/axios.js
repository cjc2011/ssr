import axios from 'axios'

const url = process.env.NODE_ENV == 'production' ? 'http://resume.chenjiacheng.cn' : 'http://localhost:3001';

export default axios.create({
  baseURL: url
})
