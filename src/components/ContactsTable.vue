<template>
  <table class="contacts__table table">
    <thead class="table__head">
      <th @click="sortContactsBy('name')">Name</th>
      <th @click="sortContactsBy('username')">Username</th>
      <th @click="sortContactsBy('email')">Email</th>
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
          <div>
            <router-link
              class="table__button table__button--safe"
              :to="{name: 'contact', params: {id: contact.id}}"
              tag="button"
            >
              Details
            </router-link>

            <button
              @click="showMenu(contact.id)"
              class="table__button table__button--danger"
              type="button">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
    <delete-menu
      v-if="contactIdToDelete"
      :deleteId="contactIdToDelete"
      @hide-menu="hideMenu"
      @delete-contact="deleteContact"
    >
    </delete-menu>
  </table>
</template>

<script>
import store from '@/store';
import DeleteMenu from './DeleteMenu.vue';

export default {
  name: 'ContactsTable',
  data() {
    return {
      contacts: store.contacts,
      contactIdToDelete: null,
    };
  },
  components: {
    DeleteMenu,
  },
  // computed: {
  //   partialContacts() {

  //   },
  // }, // create computed propertie that has only name, username and email
  methods: {
    showMenu(contactId) {
      this.contactIdToDelete = contactId;
    },

    hideMenu() {
      this.contactIdToDelete = null;
    },

    sortContactsBy(factor) {
      this.contacts = this.contacts.sort((prevContact, curContact) => (
        prevContact[factor].localeCompare(curContact[factor])
      ));
    },

    deleteContact(contactId) {
      const indexToRemove = this.contacts
        .map((contact) => contact.id)
        .indexOf(contactId);

      this.contacts.splice(indexToRemove, 1);
    },
  },
};
</script>

<style lang="scss">
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

  &__button {
    margin: 0 10px;
    padding: 15px 20px;

    color: white;
    font-size: 16px;
    border:none;
    outline: none;

    transition: color 0.5s, background-color 0.5s;
    cursor: pointer;

    &:focus {
      transform: scale(1.05);
    }

    &--safe {
      background-color: #237ED7;

      &:hover {
        color: #237ED7;
        background-color: white;
      }
    }

    &--danger {
      background-color: #F77066;

      &:hover {
        color: #F77066;
        background-color: white;
      }
    }
  }
}
</style>
