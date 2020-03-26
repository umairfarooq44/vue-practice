<template>
  <div>
    <button @click="greet('inline alert')" >click me</button>
    <br />
    <button @click="greet" >greet</button>
    <input type="text" @keyup.enter="alertInput" v-model="inputText" />
    <br />
    <h5>Enter text</h5>
    <input type="text" v-model="text" />
    Reverse text: {{ reverseText }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello world',
      inputText: '',
      text: '',
    };
  },
  computed: {
    reverseText() {
      return this.text.split('').reverse().join('');
    },
  },
  methods: {
    greet(message) {
      alert(message || this.message);
    },
    alertInput() {
      alert(`The text in input is: ${this.inputText}`);
    },
  },
};
</script>
