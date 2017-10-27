import Vue from 'vue'

Vue.component('app', {
  template: `
    <div id="app">
      <nav class="nav">
        <div class="container">
          <a href="/">
            <img src="http://bit.ly/vue-img"
              alt="Vue SPA"/>
          </a>
        </div>
      </nav>
      <section class="main-section section"></section>
      <footer class=:"footer">
        <div class"container">
          <div class="container has-text-centered">
            Follow us on 
            <a href="https://twitter.com/bstavroulakis"
              target="_blank">Twitter</a>
          </div>
        </div>
      </footer>
    <div>`
})
const app = new Vue({
  data: {
    hello: 'hi1234'
  },
  template: '<div id="app">{{hello}}</div>'
})

export { app }
