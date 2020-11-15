<template>
  <div class="new-contact">
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
</template>

<script>
export default {
  name: 'NewContactForm',
  data() {
    return {
      formErrors: [],
      formData: {
        name: '',
        email: '',
        website: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      if (!this.formData.name) {
        this.formErrors.push('name is required');
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

  &__form {
    display: flex;
    flex-direction: column;

    padding: 30px;
    background-color: white;
    box-shadow: 0 8px 25px rgba(0,0,0,0.4);
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
