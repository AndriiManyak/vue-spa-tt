<template>
<!-- fix classnames acording to BEM -->
  <div class="delete-menu">
    <div class="delete-menu__wrapper">
      <h3 class="delete-menu__header">Are you sure?</h3>
      <button
        @click="hideMenu()"
        class="table__button table__button--safe"
        type="button"
      >
        No
      </button>

      <button
        @click="deleteElement()"
        class="table__button table__button--danger"
        type="button"
      >
        Yes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideMenu() {
      this.$emit('hide-menu');
    },

    deleteElement() {
      this.$emit('delete-element');
      this.hideMenu();
    },
  },
};
</script>

<style scoped lang="scss">
.delete-menu {
  position: fixed;
  height: 100%;
  width: 100%;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(216, 220, 225, 0.4);

  &__wrapper {
    padding: 20px 80px;
    background-color: rgba(216, 220, 225, 1);
    box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  }

  &__header {
    margin: 20px 0;
  }

  @media (max-width: 420px) {
    &__wrapper {
      padding: 20px 40px;
    }
  }
}
</style>
