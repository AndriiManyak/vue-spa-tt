<template>
  <div class="contact">
    <section class="contact__wrapper">
      <img
        src="@/images/user-icon.png"
        class="contact__user-icon"
      />
      <div class="contact__main">
        <h2
          class="contact__field"
        >
          {{ contact.name}}
          <button
            class="contact__button button button--edit"
            type="button">
            Edit
          </button>
        </h2>
        <p
          class="contact__field"
        >
          {{ contact.email}}
          <button
            class="contact__button button button--edit"
            type="button">
            Edit
          </button>
        </p>
        <p
          class="contact__field"
        >
          {{ contact.phone}}
          <button
            class="contact__button button button--edit"
            type="button">
            Edit
          </button>
        </p>
        <p
          class="contact__field"
        >
          {{ contact.website}}
          <button
            class="contact__button button button--edit"
            type="button">
            Edit
          </button>
        </p>
      </div>
    </section>

    <button
      type="button"
      class="contact__button button button--new-field"
    >
      Add new field
    </button>
    <new-field-form></new-field-form>
    <section class="contact__additional">

    </section>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import store from '@/store';
import NewFieldForm from '../components/NewFieldForm.vue';

export default {
  data() {
    return {
      contactId: this.$route.params.id,
    };
  },
  components: {
    NewFieldForm,
  },
  computed: {
    contact() {
      return store.contacts.find((contact) => (
        contact.id === this.contactId
      ));
    },
  },
};
</script>

<style scoped lang="scss">
.contact {
  padding: 10px 30px;

  &__wrapper {
    display: flex;
  }

  &__user-icon {
    height: 100px;
    width: 100px;
  }

  &__main {
    padding: 0 10px;
  }

  &__field {
    margin: 5px 10px;

    &:hover {
      > button {
        display: inline;
      }
    }
  }
}

.button {
  border: none;
  outline: none;

  cursor: pointer;

  &--edit {
    display: none;
    padding: 0 5px;
    color: #59A8F4;
    background-color: white;

    &:hover {
    text-decoration: underline;
    }
  }

  &--new-field {
    padding: 15px 20px;

    background-color: #237ED7;
    color: white;
    font-size: 16px;

    transition: color 0.5s, background-color 0.5s;

    &:focus {
      transform: scale(1.05);
    }

    &:hover {
      color: #237ED7;
      background-color: white;
    }
  }
}
</style>
