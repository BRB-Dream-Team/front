<script>

</script>

<template>
  
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

   <div class="navbar">
        <div class="circle-buttons">
           <div class="circle-button">U</div> <!-- User Profile Button -->
       </div>

   

       <div class="nav-buttons">
           <button>Search</button>
           <div class="dropdown">
               <button class="dropdown-button">Donate <i class="fa-sharp fa-solid fa-caret-down"></i></button>
            <div class="dropdown-content">
            <a href="#">Trending projects</a>
            <a href="#">Categories</a>
            <a href="#">Project Types</a>
            <a href="#">BIRGA for contributors</a>
            <a href="#">BIRGA for enterpreneurs</a>
        </div>
    </div>
           <button><a a href="#/signup">Login/Sign up</a></button> 
           
       </div>

       <div class="logo"><a a href="#/home">
           <img src="../assets/logo.png" alt="Logo" width="104" height="23"></a>
       </div>

       <div class="nav-buttons" style="margin-left: auto;">
        
        <div class="dropdown">
        <button class="dropdown-button">Explore <i class="fa-sharp fa-solid fa-caret-down"></i></button>
        <div class="dropdown-content">
          <div class="blocks-container">
                <div class="block">
                    
                     <a href="#">Tips for starting a project</a>
                     <a href="#">Trending projects</a>
                     <a href="#">Categories</a>
                     <a href="#">Inspiration</a>
                </div>
                <div class="block">
                    
                    <a href="#">Blogs</a>
                    <a href="#">Careers</a>
                    <a href="#">Help & Support</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
            
        </div>
    </div>
    </div>

       <div class="create-project-button">
           Create Project
       </div>

       <div class="circle-buttons">
           <div class="circle-button" style="margin-right: 5vh;">EN</div> <!-- Language Button -->
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



.navbar {
   position: fixed;
   top: 0;
   width: 100%;
   background-color: #ffffff;
   border-bottom: 1px solid #ccc; 
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
   z-index: 1000;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
}


.navbar .logo {
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
}


.navbar .nav-buttons {
   display: flex;
   gap: 15px;
   margin-left: 15vh;
}

.navbar .nav-buttons button {
   background-color: transparent;
   border: none;
   color: #333;
   font-size: 1em;
   cursor: pointer;
   padding: 5px;
   transition: color 0.3s;
   font-family: 'Montserrat', serif; 
}


.navbar .nav-buttons button:hover {
   color: #000;
}


.navbar .create-project-button {
   background-color: #f1c40f; 
   border: none;
   color: #fff;
   padding: 10px 20px;
   margin: 15px;
   border-radius: 5px;
   cursor: pointer;
   font-weight: bold;
   transition: background-color 0.3s;
   margin-right: 15vh;
}

.navbar .create-project-button:hover {
   background-color: #d4ac0d;
}

/* Circular buttons for User Profile and Language */
.navbar .circle-buttons {
   display: flex;
   gap: 10px;
}

.navbar .circle-buttons .circle-button {
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: #333;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: background-color 0.3s;
}

.navbar .circle-buttons .circle-button:hover {
   background-color: #555;
}





.dropdown {
   position: relative;
   display: inline-block;
}


.dropdown-button {
   background-color: #3498db;
   color: white;
   padding: 10px 20px;
   border: none;
   cursor: pointer;
   font-size: 16px;
}


.dropdown-content {
   display: none;
   position: absolute;
   background-color: #f9f9f9;
   min-width: 160px;
   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
   z-index: 1;
}


.dropdown-content a {
   color: black;
   padding: 12px 16px;
   text-decoration: none;
   display: block;
   font-family: 'Montserrat', serif; 
}


.dropdown-content a:hover {
   background-color: #f1f1f1;
}


.dropdown:hover .dropdown-content {
   display: block;
}

 .dropdown-content .blocks-container {
   display: flex;
   gap: 20px; /* Промежуток между блоками */
}





</style>