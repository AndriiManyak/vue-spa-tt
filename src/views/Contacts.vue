<template>
  <contacts-table
    :contacts="contacts"
  ></contacts-table>
</template>

<script>
import store from '@/store';
import ContactsTable from '@/components/ContactsTable.vue';

export default {
  name: 'Contacts',
  data() {
    return {
      contacts: store.contacts,
    };
  },
  components: {
    ContactsTable,
  },
};
</script>

<style>

</style>
