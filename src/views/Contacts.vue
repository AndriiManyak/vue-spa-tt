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
          <router-link :to="{name: 'contact', params: {id: contact.id}}">Details</router-link>
          <button type="button">X</button>
          </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import store from '@/store';

export default {
  name: 'Contacts',
  data() {
    return {
      contacts: store.contacts,
    };
  },
  components: {

  },
};
</script>

<style>

</style>
