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
          class="new-contact__input"
          type="text"
          name="name"
          placeholder="Name"
          v-model="formData.name"
        />
        <input
          class="new-contact__input"
          type="text"
          name="email"
          placeholder="Email"
          v-model="formData.email"
        />
        <input
          class="new-contact__input"
          type="text"
          name="website"
          placeholder="Website"
          v-model="formData.website"
        />
        <button
          class="new-contact__submit"
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
        nameError: '',
        emailError: '',
        websiteError: '',
      },
      formData: {
        name: '',
        email: '',
        website: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      // this.validateForm();

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

    // validateForm() {
    //   const { name, email, website } = this.formData;

    //   if (!name) {
    //     this.formErrors.push('name is required');
    //   }
    // },
  },
};
</script>

<style scoped lang="scss">
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
}
</style>
