<template>
  <div class="new-contact">
    <div class="new-contact__wrapper">
      <div class="new-contact__heading">
        <h2>New contact</h2>
        <button
          type="button"
          class="new-contact__close"
          @click="hideForm"
        >
          &#10006;
        </button>
      </div>

      <form
        @submit.prevent="handleSubmit"
        class="new-contact__form form"
      >
        <input
          class="form__input"
          type="text"
          name="name"
          placeholder="Name"
          v-model="formData.name"
          @change="handleChange($event)"
          :class="{'form__input--error' :formErrors.name}"
        />

        <span v-if="formErrors.name" class="form__error">
          Name is required
        </span>

        <input
          class="form__input"
          type="text"
          name="email"
          placeholder="Email"
          v-model="formData.email"
          @change="handleChange($event)"
          :class="{'form__input--error' :formErrors.email}"
        />

        <span v-if="formErrors.email" class="form__error">
          Email is required
        </span>

        <input
          class="form__input"
          type="text"
          name="website"
          placeholder="Website"
          v-model="formData.website"
        />

        <button
          class="form__submit"
          type="submit"
        >
          Add new contact
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewContactForm',
  data() {
    return {
      formErrors: {
        name: false,
        email: false,
      },
      formData: {
        name: '',
        email: '',
        website: '',
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

      this.$emit('add-contact', this.formData);
      this.formData = {
        name: '',
        email: '',
        website: '',
      };

      this.hideForm();
    },

    hideForm() {
      this.$emit('hide-contact-form');
    },

    validateForm() {
      const { name, email } = this.formData;
      let validationResult = true;

      if (!name) {
        this.formErrors.name = true;

        validationResult = false;
      }

      if (!email) {
        this.formErrors.email = true;

        validationResult = false;
      }

      return validationResult;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/form.scss';

.new-contact {
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
