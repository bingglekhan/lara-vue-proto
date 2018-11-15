<template>
  <div>
    <h1> bnggle </h1>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of Form OUT SLOT DEMO </h3>
        <p> info about form</p>
      </div>

      <div slot="form-fields">
        <input  class="input-control" type="text" placeholder="name" required/>
        <input type="password" placeholder="pasword">
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit($event)">Submit</button>
      </div>
      <!-- <h2 slot="title"> {{  title }}</h2>
      <p slot="text"> I am paragrapg text </p> -->
    </form-helper>
  </div>
</template>

<script>
import FormHelper from '../components/FormHelper.vue';

export default {
  components: {
    'form-helper': FormHelper
  },
  data() {
    return {
      title: 'I am te slot title',
      posstData: {
        someData: 1,
        newData:2
      }
    }
  },
 
  methods: {
    handleSubmit: function(event){
      // axios.post('/foobar', this.postData);;

      if(event) {
        console.log('event inside');
        console.log(event.target.tagName);
      }
      event.preventDefault();
    }

  }
}

</script>