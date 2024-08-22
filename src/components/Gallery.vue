<script>

</script>

<template>
<div>
   <div class="gallery-container">
       <div class="card">
           <img src="../assets/Gallery.png" alt="Idea 1">
           <div class="card-description">
               <h3>Idea 1</h3>
               <p>Description of Idea 1.</p>
           </div>
       </div>
       <div class="card">
           <img src="../assets/Gallery.png" alt="Idea 2">
           <div class="card-description">
               <h3>Idea 2</h3>
               <p>Description of Idea 2.</p>
           </div>
       </div>
       <div class="card">
           <img src="../assets/Gallery.png" alt="Idea 3">
           <div class="card-description">
               <h3>Idea 3</h3>
               <p>Description of Idea 3.</p>
           </div>
       </div>
       <div class="card">
           <img src="../assets/Gallery.png" alt="Idea 4">
           <div class="card-description">
               <h3>Elevate Your Typing: Meet the Wooden Keyboard</h3>
               <h1>Akmal Salikhov</h1>
               <p>Designed for those who appreciate timeless elegance and superior craftsmanship, this keyboard offers a unique typing experience</p>
               <button>Product Design</button>
               <button>Khorezm, UZB</button>
           </div>
       </div>
   </div>
</div>



</template>


<style scoped>
.gallery-container {
   display: grid;
   grid-template-columns: repeat(4, 1fr); /* 4 columns */
   gap: 20px; /* Space between cards */
   padding: 20px;
}

.card {
   background-color: #ffffff;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   overflow: hidden;
   transition: transform 0.2s;
}

.card:hover {
   transform: translateY(-10px); /* Slight lift on hover */
}

.card img {
   width: 100%;
   height: 200px; /* Fixed height for images */
   object-fit: cover; /* Ensures image covers the area */
}

.card-description {
   padding: 15px;
   text-align: center;
}

.card-description h3 {
   margin: 0;
   font-size: 1.2em;
   color: #333;
}

.card-description p {
   margin: 10px 0 0;
   font-size: 0.9em;
   color: #666;
}



</style>