<template>
  <div class="info-container">
    <div class="box personal-info">
      <button class="edit-button">Edit</button>
      <h3>Personal Information</h3>
      <ul>
        <li><strong>Person ID:</strong> 00 00 00 00</li>
        <li><strong>Username:</strong> Falcon</li>
        <li><strong>Gender:</strong> Female</li>
        <li><strong>Passport Series:</strong> AC</li>
        <li><strong>Passport Number:</strong> 633 24 41</li>
        <li><strong>Address:</strong> Ipak Yoli 24, 65</li>
        <li><strong>Date of Birth:</strong> 02.04.1985</li>
        <li><strong>E-sign status:</strong> Signed</li>
      </ul>
    </div>
    <div class="box motivations">
      <h3>Motivations</h3>
      <ul>
        <li>
          Driven by my belief in the transformative power of education, I am
          committed to providing students with the resources they need to
          succeed.
        </li>
        <li>
          Witnessing the challenges faced by schools in rural Uzbekistan, I am
          determined to make a difference by equipping classrooms with essential
          materials.
        </li>
      </ul>
    </div>
    <div class="box bio">
      <h3>Bio</h3>
      <p>
        Hi, I am a dedicated Elementary School Teacher. I have been teaching for
        15 years, inspiring young minds with passion for education. I have a
        proven track record of creating engaging and supportive learning
        environments.
      </p>
    </div>
    <div class="box links">
      <h3>Links and Contacts</h3>
      <ul>
        <li><a href="#">Quisque rutrum</a></li>
        <li><a href="#">Aenean imperdiet</a></li>
        <li><a href="#">Etiam ultricies nisi vel augue</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.info-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

h3 {
  font-size: 26px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 20px;
}

.box {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
}
.personal-info ul {
  list-style-type: none;
  padding: 0;
}
.personal-info ul li {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.personal-info,
.motivations,
.bio,
.links {
  background-color: #f0f0f0;
}

.edit-button {
  float: right;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
}

li {
  margin-bottom: 4px;
}
</style>
