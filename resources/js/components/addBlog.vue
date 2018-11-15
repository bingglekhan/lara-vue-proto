<template>
  <div id="add-blog">
    <h2>Add New Blog </h2>
    <form>
      <label>Blog Title:</label>
    <input type="text" v-model="blog.title" required>
    <label>Blog Content</label>
    <textarea v-model.lazy="blog.content"></textarea>
  

    <div id="checkboxes">
      <label> Binggle</label>
      <input type="checkbox" value="binggle" v-model="blog.categories" />
      <label> Wizard</label>
      <input type="checkbox" value="wizard" v-model="blog.categories" />
      <label> Mario</label>
      <input type="checkbox" value="mario" v-model="blog.categories" />
    </div>
    <hr>
    <label> Author:</label>
    <select v-model="noData" >
      <option :value="noData">Select a user...</option>
      <option value="{$index}" v-for="author in authors"> {{ author }}</option>
    </select>
<hr>

<h4>  dynamic select - option Example </h4>

<div id="appSelect">
  <select v-model="formData.selectedName">
   <option v-for="(option, index) in formData.names" :key="index" :value="option.name">{{ option.name }}</option>
  </select>
</div>

<hr>
<h4>  dselected sample  Example </h4>
<div id="aaaa">
    <select v-model="selected">
        <option value="val1">Text1</option>
        <option value="val2">Text2</option>
        <option value="val3">Text3</option>
        <option value="val4">Text4</option>
        <option value="val5">Text5</option>
    </select>
</div>

 

</form>
<hr>
<div id="preview">
  <h3>Preview Blog</h3> 
  <p>Bolg Title:{{  blog.title }}</p>
  <p>Blog content: {{ blog.content }} </p>
  <p>Blog Categories</p>
  <ul>
    <li v-for="(category, index ) in blog.categories">
     {{  index }} - {{ category }}
    </li>
  </ul>
  <p>Author: {{ blog.author }} </p>
  <p>noData : {{ noData }} </p>


</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      formData: {
        names: [],
        selectedName: ''
      },
    
      selected: 'val3',
      users: [
        { id: 1, name: 'John' },
        { id: 1, name: 'Doe' }
      ],
      noData: -1,
      blog: {
        title: '',
        content: '',  
        categories: [],
        author: 'test'
        
      },
      authors: ['Ninja', 'Avengers', 'Thor'],

      posstData: {
        someData: 1,
        newData: 2
      }
    };
  },

  methods: {
    post: function(event) {
      event.preventDefault();
      // axios.post('/foobar', this.postData);;
      if (event) {
        console.log("event inside");
        console.log(event.target.tagName);
      }
    }
  },


  mounted () {
    let names = [
      { name: 'Alex' },
      { name: 'John' },
      { name: 'Sarah' },
      { name: 'Hugo' },
    ] ;
    
    this.formData.names = Object.assign({}, this.formData.names, names);
    this.formData.selectedName = this.formData.names[0].name;
  }

};
</script>


<style>
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>



