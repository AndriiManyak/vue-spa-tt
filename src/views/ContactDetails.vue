<template>
  <div class="contact">
    <section class="contact__wrapper">
      <!-- <img
        src="@/images/user-icon.png"
        class="contact__user-icon"
      /> -->
      <div class="contact__main">
        <h2
          class="contact__name"
        >
          {{ visualInformation.name }}
          <button
            class="contact__button button button--edit"
            type="button">
            Edit
          </button>
        </h2>

        <div
          class="contact__field"
          v-for="field of Object.keys(visualInformation.information)"
          :key="field"
        >
          <h5
            class="contact__field-name"
          >
            {{ field }}:
          </h5>

          <span>
            {{ visualInformation.information[field] }}
          </span>

          <button
            class="contact__button button button--edit"
            type="button"
          >
            Edit
          </button>

          <button
            class="contact__button button button--edit"
            type="button"
            @click="showDeleteMenu(field)"
          >
            Delete
          </button>
        </div>
      </div>

      <div>
        <button
          type="button"
          class="contact__button button button--revert"
          @click="cancelLastChange"
          :disabled="!this.contactStates.length"
        >
        <!-- add style for disabled button -->
          &#8592; Revert
        </button>

        <button
          type="button"
          class="contact__button button button--new-field"
          @click="showNewFieldForm"
        >
          Add new information
        </button>
      </div>
    </section>

    <router-link to="/">Back</router-link>
    <new-field-form
      v-if="isAddingNewField"
      @add-new-field="addNewField"
      @hide-field-form ="hideNewFieldForm"
    >
    </new-field-form>
    <delete-menu
      v-if="isDeleting"
      @hide-menu="hideDeleteMenu"
      @delete-element="deleteField"
    >
    </delete-menu>
  </div>
</template>

<script>
import store from '@/store';
import NewFieldForm from '../components/NewFieldForm.vue';
import DeleteMenu from '../components/DeleteMenu.vue';

export default {
  data() {
    return {
      contact: {},
      contactStates: [],
      isAddingNewField: false,
      isDeleting: false,
      fieldToDelete: '',
      contactId: this.$route.params.id,
    };
  },

  components: {
    NewFieldForm,
    DeleteMenu,
  },

  mounted() {
    this.contact = store.contacts.find((contact) => (
      contact.id === this.contactId
    ));
  },
  computed: {
    visualInformation() {
      const { id, name, ...information } = this.contact;
      return {
        name,
        information,
      };
    },
  },
  methods: {
    showNewFieldForm() {
      this.isAddingNewField = true;
    },

    hideNewFieldForm() {
      this.isAddingNewField = false;
    },

    addNewField(newField) {
      this.contactStates.push({ ...this.contact });
      const { name, value } = newField;
      this.$set(this.contact, name, value);
    },
    cancelLastChange() {
      this.contact = this.contactStates.pop();
    },

    showDeleteMenu(field) {
      this.fieldToDelete = field;
      this.isDeleting = true;
    },

    hideDeleteMenu() {
      this.isDeleting = false;
    },

    deleteField() {
      this.contactStates.push({ ...this.contact });
      this.$delete(this.contact, this.fieldToDelete);
    },
  },
};
</script>

<style scoped lang="scss">
.contact {
  padding: 10px 30px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
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
    padding: 5px 0;
    border-bottom: 1px solid black;

    &:hover {
      button {
        visibility: visible;
      }
    }
  }

  &__field-name {
    margin: 5px 0;

    text-transform: uppercase;
  }
}

.button {
  border: none;
  outline: none;

  cursor: pointer;

  &--edit {
    visibility: hidden;
    padding: 0 5px;
    color: #59A8F4;
    background-color: white;

    &:hover {
    text-decoration: underline;
    }
  }

  &--new-field,
  &--revert {
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

    &:disabled {
      color: white;
      background-color: silver;
      cursor: default;
    }
  }
}
</style>
