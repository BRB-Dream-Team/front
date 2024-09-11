<template>
  <h2>Your vision brought to life</h2>
  <div class="projects-grid">
    <div v-for="project in projects" :key="project.id" class="project-box">
      <img :src="project.coverImage" alt="Project Cover" class="cover-image" />
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>
          📅 {{ project.daysLeft }} days left, {{ project.fundRaised }}% raised
        </p>

        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: project.fundRaised + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    coverImage: "https://via.placeholder.com/150", // Replace with actual image URLs
    title: "Help Us Stock the Shelves",
    daysLeft: 27,
    fundRaised: 45,
  },
  {
    id: 2,
    coverImage: "https://via.placeholder.com/150",
    title: "A Comfortable Classroom for Every Child",
    daysLeft: 23,
    fundRaised: 37,
  },
  {
    id: 3,
    coverImage: "https://via.placeholder.com/150",
    title: "Make a Difference: Furnish Our Schools Together",
    daysLeft: 15,
    fundRaised: 68,
  },
  // Add more projects as needed
];
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 0;
  margin-bottom: 16px;
  font-size: 1.5em;
  color: #333;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project-box {
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.project-box:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cover-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.project-info {
  padding: 12px;
}

h3 {
  margin: 0;
  font-size: 1.2em;
  color: #333;
}

p {
  margin: 8px 0 0;
  font-size: 0.9em;
  color: #555;
}

.progress-bar {
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 8px;
}

.progress-fill {
  height: 100%;
  background-color: #ffd700; /* Yellow color for the progress */
  transition: width 0.3s ease;
}
</style>
