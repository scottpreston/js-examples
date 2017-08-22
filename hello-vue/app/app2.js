var app = new Vue({
  el: '#app',
  data: {
    message: 'hello world',
    list : null
  },
  created: function () {
   this.fetchData()
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', './data.json')
      xhr.onload = function () {
        var data = JSON.parse(xhr.responseText).list;
        self.list = data;
        console.log(data);
      }
      xhr.send()
    }
  }
})
