<template>
  <div  class="contacts">
    <button
      class="contacts__new-contact"
      type="button"
      @click="showContactForm"
    >
      New contact +
    </button>
    <new-contact-form
      v-if="isAdding"
      @add-contact="addContact"
      @hide-contact-form="hideContactForm"
    >
    </new-contact-form>
    <contacts-table
      :contacts="contacts"
    ></contacts-table>
  </div>
</template>

<script>
import store from '@/store';
import ContactsTable from '@/components/ContactsTable.vue';
import NewContactForm from '@/components/NewContactForm.vue';

export default {
  name: 'Contacts',
  data() {
    return {
      contacts: store.contacts,
      isAdding: false,
    };
  },
  components: {
    ContactsTable,
    NewContactForm,
  },

  // computed: {
  //   parsedContacts() {
  //     const { name, website, email } = this.contacts;

  //     return {
  //       name,
  //       website,
  //       email,
  //       selected: false,
  //     };
  //   },
  // },

  methods: {
    addContact(newContact) {
      this.contacts.push({
        ...newContact,
        id: this.contacts.length + 1,
      });
    },

    showContactForm() {
      this.isAdding = true;
    },

    hideContactForm() {
      this.isAdding = false;
    },

    // selectContact() {
    //   this.parsedContacts.selected = !this.parsedContacts.selected;
    // },
  },
};
</script>

<style scoped lang="scss">
.contacts {
  max-width: 1240px;
  margin: auto;

  &__table {
    width: 100%;
  }

  &__new-contact {
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
