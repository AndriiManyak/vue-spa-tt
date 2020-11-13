<template>
  <div>
    <new-contact-form></new-contact-form>
    <contacts-table
      :contacts="contacts"
      @sort-contacts="sortContactsBy"
      @delete-contact="deleteContact"
    >
    </contacts-table>
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
    };
  },
  components: {
    ContactsTable,
    NewContactForm,
  },
  methods: {
    sortContactsBy(factor) {
      this.contacts = this.contacts.sort((prevContact, curContact) => (
        prevContact[factor].localeCompare(curContact[factor])
      ));
    },

    addContact(newContact) {
      this.contacts.push({
        ...newContact,
        id: this.contacts.length + 1,
      });
    },

    deleteContact(contactId) {
      const indexToRemove = this.contacts
        .map((contact) => contact.id)
        .indexOf(contactId);

      this.contacts.splice(indexToRemove, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.contacts {
  max-width: 1024px;
  margin: auto;

  &__table {
    width: 100%;
    margin: 20px 0;
  }
}
</style>
