<script>

export default{
   
}
// async (params) => {
    
//     document.getElementById('continue-button').onclick = function() {
//         document.getElementById('modal').style.display = 'block';
//     };
    
//     document.querySelector('.close').onclick = function() {
//         document.getElementById('modal').style.display = 'none';
//     };
    
//     window.onclick = function(event) {
//         if (event.target == document.getElementById('modal')) {
//             document.getElementById('modal').style.display = 'none';
//         }
//     };
    
// }


// createApp({
//     components: {
//         ModalWindow
//     }
// }).mount('#app');

</script>



<template>

<body>
    <div class="container">
        <!-- лево -->
        <div class="details">
            <h2>Backing summary</h2>
            
            <p>You’ll receive a confirmation email at 123 @mail.ru when your offer is successfully processed. Please note that you are supporting a creative project, regardless of the outcome. </p>
            <div class="project">
                <img src="../assets/Gallery.png" alt="Idea 1">
                <div class="project-description">
                    <h3> Elevate Your Typing: Meet the Wooden Keyboard</h3>
                    <a>by <u>Akmal Salikhov</u></a>
                    <p>70% funded</p>
                </div>                             
            </div>            
            

            <h3>Your take</h3>
            <p>Rewards: </p>
            <ul>
                <li>20% off for keyboard</li>
                <li>personal engraving </li>
            </ul>
               
            <hr>

            <h3>Total amount</h3>
            <ul>
                <li>500,000 Som</li>
            </ul>
            
            
            


            
        </div>

        <!-- право -->
        <div class="payment-section">
            <div class="payment-container">
                <h1>Payment method</h1>
                <div class="methods">
                    <div class="option">
                        <input type="radio" name="method" value="payme">
                        <div class="option-desc">
                            <label for="payme"><h3>Payme</h3></label>
                            <p>We will redirect you to Payme application, where you can complete the checkout </p>
                        </div>
                        </div>
                    <div class="option">
                        <input type="radio" name="method" value="uzum">
                        <div class="option-desc">
                            <label for="uzum"><h3>Uzum bank</h3></label>
                        <p>We will redirect you to Uzum bank application, where you can complete the checkout </p>
                    
                        </div>
                        </div>
                    <div class="option">
                        <input type="radio" name="method" value="click">
                        <div class="option-desc">
                            <label for="click"><h3>Click</h3></label>
                            <p>We will redirect you to click application, where you can complete the checkout </p>
                    
                        </div>
                     </div>

                    <div class="option">
                        <input type="radio" name="method" value="card">
                        <div class="option-desc">
                            <label for="card"><h3>Online card</h3></label>
                            <div class="cards"> 
                                <img src="../assets/Artboard 1.jpg" alt="card"> 
                                <img src="../assets/Artboard 2.jpg" alt="card"> 
                                <img src="../assets/Artboard 3.jpg" alt="card"> 
                                <img src="../assets/Artboard 4.jpg" alt="card"> 
                            </div>
                            
                            <div class="payment-form">
                                <form id="payment-form">
                                    <label for="card-number">Card number</label>
                                    <input type="text" id="card-number" name="card-number" required>
                                    
                                    <label for="expiry-date">Expiration date</label>
                                    <input type="text" id="expiry-date" name="expiry-date" required>
                                    
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" required>

                                </form>
                            </div>

                            
                        </div>
                    </div>


                               

                <div class="terms">
                    <label for="terms">
                        <input type="checkbox" id="terms" name="terms" required>
                         Remember this payment method
                    </label>
                    <p>You can double-check your order before submitting it</p>
                </div>
                

                <button type="button" id="continue-button">Continue</button>

                
            </div>
                
            </div>
        </div>
    </div>

    <div id="app" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Thank you!</h2>
            <p>Summary: 500.000</p>
            <button id="buy-button">Buy</button>
        </div>
    </div>
    
    <div id="app">
        <modal-window></modal-window>
    </div>
</body>

</template>



<style>
body {
    margin: 0;
    margin-top: 80px;
}

/* лево */
.container {
    margin: 20px;
    display: flex;
    height: 100vh;
}

.details {
    padding: 20px;
    background-color: #fff;
    width: 722px;
    height: 90px;
}


.project {
    display: flex;
    gap: 25px
}


/* право */
.payment-section {
    width: 60%;
    height: 120%;
    background-image: url('../assets/Gallery.png');
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.payment-container {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    border-style: solid;
    border-color: grey;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
    backdrop-filter: blur(5px);

    display: block;
    justify-content: center;
    align-items: center;

    width: 80%;
}

.payment-container h1 {
    margin-top: 0;
    text-align: center;
    color: #fff;
}

.methods {
    margin-left: 200px;
    width: 550px;
}

.option {
    background-color: #ffffff;
    border-style:  solid ;
    border-width: 2px;
    border-color: black;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
    display: flex;

    margin-bottom: 15px;
}

.option input {
    position: absolute;
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-top: 20px;
    margin-left: 10px;
}

.option-desc{
    margin-left: 40px;
    font-size: 15px;
}

.cards {
    display: flex;
}

.cards img {
    height: 30px;
    width: 60px;
    margin-bottom: 20px;
}


.payment-container label {
    display: block;
    margin: 5px 0 5px;
}


.payment-form label{
    font-size: 12px;
}

.payment-form input {
    position: relative;
    border-radius: 10px;
    border: 1px solid grey;
    cursor: pointer;
    height: 50px;
    width: 280px;
    margin-top: 5px;
    margin-left: 0;
    margin-bottom: 10px;
}

.payment-container button {
    color: white;
    font-size: 16px;

    border-style: solid;
    border-color: #fff;
    border-radius: 11px;
    border-width: 3px;
    background-image: linear-gradient(to right, #FFCD25 , #FF6508);

    padding: 10px 5px;
    
    cursor: pointer;
    font-weight: bold;
    margin-left: 110px;
    margin-top: 10px;



    width: 360px;
    height: 75px;

}

.payment-container button:hover {
    background-image: linear-gradient(to right, #FFCD25 , #FFCD25);
}

.terms {
    color:#fff;
    font-size: 15px;
}










.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    text-align: center;
    border-radius: 8px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

#buy-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
}

#buy-button:hover {
    background-color: #45a049;
}

</style>