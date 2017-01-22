var data = { counter: 0 }
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
data: function () {
    return {
      counter: 0
    }
  }
})

new Vue({
  // the Vue Instance
  el: '#posts',

  // the data object,
  // posts is where we collect posts from user
  // newPost data binds to the form input
  data: {
    posts: [{
      body: 'Scroll Down to see more posts, or post your own',
      completed: false
    }],

    newPost: '',
    counter: 0,
  },

  methods: {
    // function declarations
    addPost: function(e) {

      // prevent the HTML form from submitting to the server
      e.preventDefault();

      this.posts.push({
        body: this.newPost,
        completed: false
      });

      // simply set the form input field to an empty string
      // after we add a todo item
      this.newPost = '';
    }
  }
});
