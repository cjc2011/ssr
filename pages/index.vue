<template>
  <section class="container">
    <div>
      <logo />
      <nuxt-link to="/user">用户页面</nuxt-link>
      <div class="content-hd">
        <h2 class="title">test</h2>
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
import Logo from '~/components/Logo.vue'
import axios from '~/plugins/axios.js'

export default {
  data() {
    return {
      data: []
    }
  },
  components: {
    Logo
  },
  asyncData(context) {
    return axios.get('/api/class').then( (data) => {
      return {'data': data.data.data}
    }).catch( (err) => {

    })
  },
  created() {
    setTimeout( () => {
      // console.log(this.data, 'asyncData')
    }, 1000)
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
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
  line-height: 40px;
  border-bottom: 1px solid #333333;
}
</style>
