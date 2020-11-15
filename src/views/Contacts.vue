<template>
  <div>
    <new-contact-form></new-contact-form>
    <contacts-table
    >
    </contacts-table>
  </div>
</template>

<script>
import ContactsTable from '@/components/ContactsTable.vue';
import NewContactForm from '@/components/NewContactForm.vue';

export default {
  name: 'Contacts',
  data() {
    return {
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
  },
};
</script>

<style scoped lang="scss">
.contacts {
  max-width: 1024px;
  margin: auto;

 margin: 20px 0;

 &__table {
    width: 100%;

  }
}
</style>
