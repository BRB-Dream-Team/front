<script>
export default{
   
}
</script>


<template>
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
<body>

<!--    <h1>Sign in to BIRGA</h1>-->

   <div class="container">
       <!-- Левая часть с картинкой -->
       <div class="left-side"> </div>

       <!-- Правая часть с формой -->
       <div class="right-side">
           <div class="form-container">
               <h2>Sign in to BIRGA</h2>
               <div class="form-group">
                   <label for="username">Username or Email</label>
                   <input type="text" id="username" name="username" required>
               </div>
               <div class="form-group">
                   <label for="password">Password</label>
                   <input type="password" id="password" name="password" required>
               </div>
               <button class="sign-in-button">Sign In</button>
           </div>
       </div>
   </div>




</body>

</template>




<style scoped>
body{
   margin: 0;
   padding: 0;
   height: 100%;
   display: flex;
}

.container {
   display: flex;
   width: 100%;
   height: 100vh;
}

.left-side {
   width: 30%;
   background-image: url('../assets/sign.png');
   background-size: cover;
   background-position: center;
}

.right-side {
   width: 70%;
   display: flex;
   justify-content: center;
   margin-right: 10vh;
   align-items: center;
   background-color: white;
}

.form-container {
   width: 80%;
   max-width: 400px;
   padding: 20px;
}

.form-container h2 {
   margin-bottom: 150px;
   font-family: 'Montserrat', serif; 
   font-weight: bold;
   font-size: 36px;
}

.form-group {
   margin-bottom: 15px;
   font-family: 'Montserrat', serif; 
   font-weight: semi-bold;
   font-size: 24px;
}

.form-group label {
   display: block;
   margin-bottom: 15px;
   font-weight: bold;
}

.form-group input {
   width: 524px;
   height: 73px;
   padding: 5px;
   border: 1px solid #ccc;
   border-radius: 32px;
   font-size: 25px;
   margin-bottom: 15px;
}

.sign-in-button {
   width: 524px;
   height: 83px;
   padding: 10px;
   background-color: black;
   color: white;
   border: none;
   border-radius: 123px;
   font-size: 16px;
   cursor: pointer;
   transition: background-color 0.3s;
   font-family: 'Montserrat', serif; 
   font-style: bold;
   font-size: 32px;
}

.sign-in-button:hover {
   background-color: #f1c40f;
}



</style>