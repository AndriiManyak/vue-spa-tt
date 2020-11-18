<template>
  <div class="edit">
    <div class="edit__wrapper">
      <div class="edit__heading">
        <h2>Edit</h2>
        <button
          type="button"
          class="edit__close"
          @click="hideForm"
        >
          &#10006;
        </button>
      </div>

      <form
        @submit.prevent="handleSubmit"
        class="edit__form form"
      >
        <input
          class="form__input"
          type="text"
          name="name"
          placeholder="new value"
          v-model="value"
          @change="handleChange"
          :class="{'form__input--error' :valueError}"
        />
        <span v-if="valueError" class="form__error">Value is required</span>
        <button
          class="form__submit"
          type="submit"
        >
          Edit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data() {
    return {
      valueError: false,
      value: '',
    };
  },
  methods: {
    handleChange() {
      this.valueError = false;
    },
    handleSubmit() {
      if (!this.validateForm()) {
        return;
      }

      this.$emit('edit-field', this.value);
      this.value = '';

      this.hideForm();
    },

    hideForm() {
      this.$emit('hide-edit-form');
    },

    validateForm() {
      if (!this.value) {
        this.valueError = true;

        return false;
      }

      return true;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/form.scss';

.edit {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(216, 220, 225, 0.4);

  &__wrapper {
    padding: 30px;
    background-color: white;
    box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  }

  &__heading {
    display: flex;
    justify-content: space-between;
  }

  &__close {
    border: none;
    padding: 0;

    font-size: 20px;
    background-color: white;
    color: #F77066;
    cursor: pointer;

    transition: transform 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
