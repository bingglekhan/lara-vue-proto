<template>
  <div>
    <h4>used <code> keep-alive Tag </code></h4> 
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show Form 1 </button>
    <button v-on:click="component = 'form-two'">Show Form 2 </button>
  </div>

</template>

<script>
import formOne from '../components/formOne.vue';
import formTwo from '../components/formTwo.vue';

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo,
  },
  data() {
    return {
      component: 'form-one'

    }
  },
  method: {

  }
}
</script>

<style >
</style>