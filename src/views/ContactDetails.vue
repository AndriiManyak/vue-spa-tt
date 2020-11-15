<template>
  <div class="contactcard">
    <h1>{{ contact.name}}</h1>
    <p>{{ contact.username}}</p>
    <p>{{ contact.email}}</p>
    <p>{{ contact.phone}}</p>
    <p>{{ contact.website}}</p>

    <div class="company">
      <h2>Company</h2>
      <p>{{ contact.company.name}}</p>
      <p>{{ contact.company.catchPhrase}}</p>
      <p>{{ contact.company.bs}}</p>
    </div>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      contactId: this.$route.params.id,
    };
  },
  computed: {
    contact() {
      return store.contacts.find((contact) => (
        contact.id === this.contactId
      ));
    },
  },
};
</script>

<style scoped>

</style>
