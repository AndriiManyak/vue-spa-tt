<template>
  <div class="new_contact">
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          name="name"
          placeholder="Name"
          v-model="newUserData.name"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          v-model="newUserData.email"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          v-model="newUserData.username"
        />
        <button
          type="submit"
        >
          Add new contact
        </button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'NewContactForm',
  data() {
    return {
      newUserData: {
        name: '',
        email: '',
        username: '',
      },
    };
  },
};
</script>

<style>

</style>
