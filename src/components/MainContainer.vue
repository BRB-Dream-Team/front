<script>
export default{
   
}
</script>

<template>
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

   <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
</head>

<div class="main-container">
       <div class="content">
           <h1>BIRGA</h1>
           <p>Bringing ideas to life, together</p>
       </div>
   </div>


 <!-- gallery -->



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





 <!-- footer -->
<div class="last-container">
       <div class="icons">
       <p>Follow us: </p>
           <div class="social-icons">
               <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
               <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
               <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
               <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
           </div>

   </div>
</div>
</template>






<style scoped>
@font-face {
	font-family: 'Benzin-Bold';
	src: url('./fonts/benzin-bold.eot'); /* IE 9 Compatibility Mode */
	src: url('./fonts/benzin-bold.eot?#iefix') format('embedded-opentype'), /* IE < 9 */
		url('./fonts/benzin-bold.woff2') format('woff2'), /* Super Modern Browsers */
		url('./fonts/benzin-bold.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */
		url('./fonts/benzin-bold.ttf') format('truetype'), /* Safari, Android, iOS */
		url('./fonts/benzin-bold.svg#benzin-bold') format('svg'); /* Chrome < 4, Legacy iOS */
}


.main-container {
    width: 100%;
    height: 100vh; 
    background-image: url('../assets/background.png');
    background-size: cover;
    background-position: center; 
    
}

p {
    font-family: 'Montserrat', serif; 
    font-style: italic;
    font-size: 48px;
}

.main-container .content h1 {
    font-family: 'Benzin-Bold', serif; 
    font-weight: bold;
    font-size: 96px;
}

.content {
   color: white;
   text-align: center;
   padding-top: 10vh; 
   font-size: 2em;
}



/* gallery */


.gallery-container {
   display: grid;
   grid-template-columns: repeat(4, 1fr); 
   gap: 20px; 
   padding: 20px;
}

.card {
   background-color: #ffffff;
   border-style: solid;
    border-color: black;
   border-radius: 25px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   overflow: hidden;
   transition: transform 0.2s;
}

.card:hover {
   transform: translateY(-10px); 
}

.card img {
   width: 100%;
   height: 200px; 
   object-fit: cover; 
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





/* footer */

.last-container {
    width: 100%;
    height: 100vh; 
    background-image: url('../assets/Bottom.png');
    background-size: cover; 
    background-position: center; 

}


.icons {
   color: white;
   text-align: center;
   padding-top: 80vh;
   font-size: 32px;
}


.icons p{
    font-family: 'Montserrat', serif; 
    font-style: regular;
    font-size: 32px;
 }

/* Social Media Icons */
.social-icons {
   display: flex;
   gap: 15px;
   padding-left: 90vh;
   items-align: center;
 
}

.social-icons a {
    color: white;
   font-size: 1.5em;
   text-decoration: none;
   transition: color 0.3s;
   
}

.social-icons a:hover {
   color: #000;
}


</style>