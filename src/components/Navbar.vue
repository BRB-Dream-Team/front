<template>
   <div class="navbar">
        <div class="circle-buttons">
           <div class="circle-button">U</div> <!-- User Profile Button -->
       </div>

       <div class="nav-buttons">
           <button>Search</button>
           <button>Donate</button>
           <button>Login/Sign up</button> 
           
       </div>

       <div class="logo">
           <img src="../assets/logo.png" alt="Logo" width="104" height="23">
       </div>

       <div class="nav-buttons" style="margin-left: auto;">
        <button style="padding-left: 10px; margin-right: 5vh;">Explore</button>
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

</style>