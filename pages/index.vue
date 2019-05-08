<template>
  <section class="container">
    <div>
      <logo />
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
import axios from 'axios'

export default {
  data() {
    return {
      data: []
    }
  },
  components: {
    Logo
  },
  async asyncData() {
    let data = await axios.get('/api/class').then(() => {
      return {'data': res.data.data}
    }).catch( () => {})
    console.log(data, 'data')
    return {
      data: data
    }
  },
  created() {
    setTimeout( () => {
      console.log(this.data)
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
