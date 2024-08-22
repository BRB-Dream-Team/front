<script>

</script>

<template>
<head>
    
   <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
</head>

<div class="main-container">
       <div class="content">
           <h1>BIRGA</h1>
           <p>Bringing ideas to life, together</p>
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

</style>