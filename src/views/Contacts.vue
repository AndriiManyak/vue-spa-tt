<template>
  <div  class="contacts">
    <button
      type="button"
      @click="showContactForm"
    >
      Add new contact
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
  },
};
</script>

<style scoped lang="scss">
.contacts {
  &__table {
    width: 100%;
  }
}
</style>
