<template>
  <div>
    <new-contact-form></new-contact-form>
    <contacts-table
      :contacts="contacts"
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
};
</script>

<style>

</style>
