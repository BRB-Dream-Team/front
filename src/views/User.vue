<template>
  <div class="container">
    <div class="left-container">
      <img :src="user.profileImage" alt="Profile" class="profile-image" />
      <h2>{{ user.name }}</h2>
      <p v-if="user.verified">Identity verified</p>
      <div class="button-group">
        <button
          v-for="(btn, index) in buttons"
          :key="index"
          @click="activeButton = index"
          :class="{ active: activeButton === index }"
        >
          {{ btn.label }}
        </button>
      </div>
    </div>
    <div class="right-container">
      <component :is="buttons[activeButton].component" :user="user"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import UserInformation from "../components/user/UserInformation.vue";
import CreatedProjects from "../components/user/CreatedProjects.vue";
import SupportedProjects from "../components/user/SupportedProjects.vue";
import MySaves from "../components/user/MySaves.vue";

// Dummy data
const predefinedUsers = {
  1: {
    id: 1,
    name: "John Doe",
    profileImage: "https://via.placeholder.com/150",
    verified: true,
    // Add other data needed for each view
  },
  // Add more users as needed
};

const route = useRoute();
const userId = route.params.id;
const user = reactive(predefinedUsers[userId]);

const buttons = [
  { label: "User Information", component: UserInformation },
  { label: "Created Projects", component: CreatedProjects },
  { label: "Supported Projects", component: SupportedProjects },
  { label: "My Saves", component: MySaves },
];

const activeButton = ref(0);
</script>

<style scoped>
.container {
  display: flex;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
}

.left-container {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: #f8f8f8;
  box-shadow: 0px 0px 5px 0px #00000036;
  padding: 16px;
  border-radius: 16px;
}

.left-container h2 {
  text-align: center;
  font-weight: 500;
  width: 100%;
  margin: 0 auto;
}
.left-container p {
  text-align: center;
  color: #83c100;
  margin: 0 auto;
  margin-bottom: 16px;
}

.right-container {
  flex: 1;
  background: #f8f8f8;
  box-shadow: 0px 0px 5px 0px #00000036;
  padding: 32px;
  border-radius: 16px;
}

.profile-image {
  border-radius: 50%;
  width: 184px;
  height: 184px;
  margin: 0 auto 12px;
}
.button-group {
  width: 100%;
}

.button-group button {
  width: 80%;
  margin: 8px auto;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #ffc700;
  padding: 8px 16px;
  font-size: 16px;
  display: block;
}

.button-group .active {
  border: 1px solid #1b1b1b;
}
</style>
