<template>
  <header class="header">
    <nav>
      <ul>
        <li>
          <router-link
            to="/"
          >
            <h2 class="header__link">All contacts</h2>
          </router-link>
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

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;

  background-color: #143454;

  &__link {
    color: white;
  }
}
</style>
