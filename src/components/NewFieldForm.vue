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
          class="form__input"
          :class="{'form__input--error':formErrors.name}"
          type="text"
          name="name"
          placeholder="Name"
          v-model="formData.name"
          @change="handleChange($event)"
        />
        <span v-if="formErrors.name" class="form__error">Name is required</span>
        <input
          class="form__input"
          :class="{'form__input--error':formErrors.value}"
          type="text"
          name="value"
          placeholder="Value"
          v-model="formData.value"
          @change="handleChange($event)"
        />
        <span v-if="formErrors.value" class="form__error">Value is required</span>
        <button
          class="form__submit"
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
      formErrors: {
        name: false,
        value: false,
      },

      formData: {
        name: '',
        value: '',
      },
    };
  },

  methods: {
    handleChange(event) {
      this.formErrors[event.target.name] = false;
    },

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
        this.formErrors.name = true;
        validationResult = false;
      }

      if (!value) {
        this.formErrors.value = true;
        validationResult = false;
      }

      return validationResult;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/form.scss';

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

  @media (max-width: 420px) {
    &__wrapper {
      padding: 30px 10xp;
    }
  }
}
</style>
