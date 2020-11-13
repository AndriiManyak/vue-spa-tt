<template>
  <header class="header">
    <nav>
      <ul>
        <li>
          <router-link
            to="/"
          >
            <h2>All contacts</h2>
          </router-link>
        </li>
        <li>

        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.header {
  height: 60px;
  padding: 0 20px;

  color: white;
  background-color: #143454;
}
</style>
