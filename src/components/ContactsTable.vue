<template>
  <table class="contacts__table table">
    <thead class="table__head">
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
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
            class="table__delete-button"
            type="button"
          >
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
    padding: 10px 20px;

    color: white;
    background-color: #1F7CD8;
    font-size: 15px;
  }

  &__delete-button {
    padding: 10px 20px;

    border: none;
    color: white;
    background-color: #F44336;
    font-size: 15px;
    outline:none;
    cursor: pointer;

    &:focus {
      transform: scale(1.05);
    }
  }
}
</style>
