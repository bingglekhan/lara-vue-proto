<template>
  <add-blog></add-blog>
</template>

<script>
import addBlog from '../components/addBlog.vue';

export default {
  components: {
    'add-blog': addBlog
  },
  data() {
    return {
      title: 'title',
      posstData: {
        someData: 1,
        newData:2
      }
    }
  },
 
  methods: {
    post: function(event){
      event.preventDefault();
      // axios.post('/foobar', this.postData);;
      if(event) {
        console.log('event inside');
        console.log(event.target.tagName);
      }
      
    }

  }
}

</script>