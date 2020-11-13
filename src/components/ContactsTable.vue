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
          <router-link
            class="table__details"
            :to="{name: 'contact', params: {id: contact.id}}"
          >
            Details
          </router-link>

          <button
            @click="deleteContact(contact.id)"
            class="table__delete-button"
            type="button">
            Delete
          </button>
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

      &:last-child {
        background-color: #F8F9FA;
        cursor: default;
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

  &__details {
    margin-right: 20px;
    padding: 15px 25px;

    color: white;
    background-color: #237ED7;
    font-size: 16px;

    transition: color 0.5s, background-color 0.5s;

    &:hover {
      color: #237ED7;
      background-color: white;
    }
  }

  &__delete-button {
    border:none;

    padding: 15px 25px;
    color: white;
    background-color: #F77066;
    font-size: 16px;
    outline: none;
    cursor: pointer;

    transition: color 0.5s, background-color 0.5s;

    &:hover {
      color: #F77066;
      background-color: white;
    }

    &:focus {
      transform: scale(1.05);
    }
  }
}
</style>
