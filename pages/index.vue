<template>
  <section class="container">
    <div>
      <div class="content-hd">
        <h3 class="title">SSR demo</h3>
      </div>
      <ul>
        <li v-for="(item) in data" :key="item.id">
          <h4>{{item.title}}</h4>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios.js'

export default {
  data() {
    return {
      data: []
    }
  },
  asyncData(context) {
    return axios.get('/api/class').then( (data) => {
      return {'data': data.data.data}
    }).catch( (err) => {

    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 30px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
ul > li {
  text-align: left;
  line-height: 40px;
  border-bottom: 1px solid #333333;
}
</style>
