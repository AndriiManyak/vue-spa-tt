<template>
  <div class="new-field">
    <div class="new-field__wrapper">
      <div class="new-field__heading">
        <h2>New field</h2>
        <button
          type="button"
          class="new-field__close"
          @click="hideForm"
        >
          &#10006;
        </button>
      </div>
      <form
        @submit.prevent="handleSubmit"
        class="new-field__form form"
      >
        <input
          class="new-field__input"
          type="text"
          name="name"
          placeholder="Name"
          v-model="formData.name"
        />
        <input
          class="new-field__input"
          type="text"
          name="value"
          placeholder="Value"
          v-model="formData.value"
        />
        <button
          class="new-field__submit"
          type="submit"
        >
          Add new field
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewFieldForm',

  data() {
    return {
      nameError: false,
      valueError: false,
      formData: {
        name: '',
        value: '',
      },
    };
  },

  methods: {
    handleSubmit() {
      if (!this.validateForm()) {
        return;
      }

      this.$emit('add-new-field', this.formData);
      this.hideForm();
    },

    hideForm() {
      this.$emit('hide-field-form');
    },

    validateForm() {
      const { name, value } = this.formData;
      let validationResult = true;

      if (!name) {
        this.nameError = true;
        validationResult = false;
      }

      if (!value) {
        this.valueError = true;
        validationResult = false;
      }

      return validationResult;
    },
  },
};
</script>

<style lang="scss">
.new-field {
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

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__input {
    margin: 10px 0;
    padding: 10px 15px;

    font-size: 20px;
    border: none;
    outline: none;
    border-bottom: 1px solid #DFE0E1;

    &:focus {
      padding-bottom: 9px;
      border-bottom: 2px solid #237ED7;
    }
  }

  &__submit {
    border: none;
    padding: 15px;
    outline: none;
    font-size: 20px;
    color: white;
    background-color: #237ED7;

    transition: color 0.5s, background-color 0.5s;
    cursor: pointer;

    &:hover {
      color: #237ED7;
      background-color: white;
    }
  }

  @media (max-width: 420px) {
    &__wrapper {
      padding: 30px 10xp;
    }
  }
}
</style>
