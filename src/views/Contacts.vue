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
