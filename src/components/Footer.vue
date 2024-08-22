<script setup>

</script>


<template>

<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
   <div class="last-container">
       <div class="content">
           <p>Follow us: </p>
       </div>
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
</body>

</template>

<style scoped>
footer .last-container {
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