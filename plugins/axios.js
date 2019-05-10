import axios from 'axios'

const baseURl = process.env.NODE_ENV == 'production' ? '/' : 'http://localhost:3000';

export default axios.create({
  baseURl: baseURl
})
