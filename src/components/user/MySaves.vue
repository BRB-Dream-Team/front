<template>
  <h2>Projects and blogs you have saved</h2>
  <div class="projects-grid">
    <div
      v-for="project in supportedProjects"
      :key="project.id"
      class="project-box"
    >
      <img :src="project.coverImage" alt="Project Cover" class="cover-image" />
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <div
          class="author-info"
          v-if="project.authorImage && project.authorName"
        >
          <img :src="project.authorImage" alt="Author" class="author-image" />
          <span>{{ project.authorName }}</span>
        </div>
        <p v-if="project.daysLeft && project.fundRaised">
          📅 {{ project.daysLeft }} days left, {{ project.fundRaised }}% raised
        </p>
        <p v-if="project.description">
          {{ project.description }}
        </p>

        <div v-if="project.fundRaised" class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: project.fundRaised + '%' }"
          ></div>
        </div>

        <span v-if="project.description" class="read-more">Read more</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const supportedProjects = [
  {
    id: 1,
    coverImage: "https://via.placeholder.com/150", // Replace with actual image URLs
    title: "Ergonomics maxed out - an innovative  computer mouse",
    description: "",
    daysLeft: 46,
    fundRaised: 52,
    authorImage: "https://via.placeholder.com/40", // Replace with actual author image URLs
    authorName: "Akmal Salikhov",
  },
  {
    id: 2,
    coverImage: "https://via.placeholder.com/150",
    title: "Elevate Your Typing: Meet the Wooden Keyboard",
    description: "",
    daysLeft: 42,
    fundRaised: 33,
    authorImage: "https://via.placeholder.com/40",
    authorName: "Akmal Salikhov",
  },
  {
    id: 3,
    coverImage: "https://via.placeholder.com/150",
    title: "Tips for taking great project images",
    description:
      "Create visually appealing images that tell the story of your project and capture the attention of potential backers.",
    daysLeft: 0,
    fundRaised: 0,
    authorImage: "",
    authorName: "",
  },
  // Add more supported projects as needed
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

.author-info {
  display: flex;
  align-items: center;
  margin: 8px 0;
}

.author-image {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
}

p {
  margin: 0;
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

span.read-more {
  display: block;
  text-align: right;
  color: #555;
  cursor: pointer;
  font-size: 14px;
  margin-top: 8px;
}
</style>
