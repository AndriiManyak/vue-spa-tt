<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: #607D8B;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}
</style>
