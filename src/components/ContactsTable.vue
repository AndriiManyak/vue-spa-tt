<template>
  <table class="contacts__table table">
    <thead class="table__head">
      <th @click="sortBy('name')">Name</th>
      <th @click="sortBy('username')">Username</th>
      <th @click="sortBy('email')">Email</th>
      <th></th>
    </thead>

    <tbody class="table__body">
      <tr v-if="contacts.length === 0">
        <td colspan="4">You don't have any contacts</td>
      </tr>
      <tr
        v-for="contact of contacts"
        :key="contact.id"
        class="table__contact"
      >
        <td>{{ contact.name }}</td>
        <td>{{ contact.username }}</td>
        <td><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></td>
        <td>
          <router-link :to="{ name: 'contact', params: {id: contact.id} }">Details</router-link>
          <button type="button" @click="deleteContact(contact.id)">X</button>
          </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'ContactsTable',
  props: {
    contacts: Array,
  },
  // computed: {
  //   partialContacts() {

  //   },
  // }, // create computed propertie that has only name, username and email
  methods: {
    sortBy(factor) {
      this.$emit('sort-contacts', factor);
    },
    deleteContact(contactId) {
      this.$emit('delete-contact', contactId);
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  border-collapse: collapse;
  text-align: start;
  &__head {
    background-color: #F8F9FA;
    border-bottom: 2px solid black;

    th {
      text-align: start;
      padding: 20px 10px;
      cursor: pointer;

      &:hover {
        background-color: #DFE0E1;
      }
    }
  }

  &__body {
    tr {
      &:hover {
        background-color: #F8F9FA;
      }
    }

    td {
      padding: 15px 10px;
    }
  }
}
</style>
