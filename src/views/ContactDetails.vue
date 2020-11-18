<template>
  <div class="contact">
    <section class="contact__wrapper">
      <div class="contact__main">
        <h2
          class="contact__name"
        >
          {{ visualInformation.name }}
          <button
            class="contact__button button button--edit"
            type="button"
          >
            &#9998;
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
            @click="editField(field)"
          >
            &#9998;
          </button>

          <button
            class="contact__button button button--delete"
            type="button"
            @click="showDeleteMenu(field)"
          >
            &#10006;
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
// import store from '@/store';
import NewFieldForm from '../components/NewFieldForm.vue';
import DeleteMenu from '../components/DeleteMenu.vue';

export default {
  data() {
    return {
      contact: {},
      contactStates: [],
      fieldToDelete: '',
      contactId: this.$route.params.id,
      isAddingNewField: false,
      isDeleting: false,
      isEditing: false,
    };
  },

  components: {
    NewFieldForm,
    DeleteMenu,
  },

  mounted() {
    const localContacts = JSON.parse(localStorage.getItem('localContacts'));
    this.contact = localContacts.find((contact) => (
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

    showEditForm() {
      this.isEditing = true;
    },

    editField(fieldToEdit) {
      console.log(fieldToEdit);
    },

    cancelLastChange() {
      const lastState = this.contactStates.pop();
      this.contact = lastState;
    },
  },
};
</script>

<style scoped lang="scss">
.contact {
  max-width: 1240px;
  margin: auto;
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
    padding: 10px 0;
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

  @media (max-width: 650px) {
    padding: 5px 10px;

    &__wrapper {
      flex-direction: column;
    }
  }
}

.button {
  border: none;
  outline: none;

  cursor: pointer;

  &--edit,
  &--delete {
    visibility: hidden;
    padding: 0 5px;
    color: #59A8F4;
    background-color: white;

    &:hover {
    text-decoration: underline;
    }
  }

  &--delete {
    color: #F77066;
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

  @media (max-width: 1023px) {
    &--edit,
    &--delete {
      visibility: visible;
    }
  }
}
</style>
