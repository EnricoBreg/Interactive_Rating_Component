let ratingBtns = [];
let currentClickedBtn;
let currentRating;
let submitBtn = document.querySelector("#submit-btn")
let containerEl = document.querySelector("div.container")

ratingBtns = document.querySelectorAll(".feedback .feedback-btns .rating-btn")

/* Add Event Listener To All Buttons */
for (let i = 0; i < ratingBtns.length; i++) {
    ratingBtns[i].addEventListener("click", function () {
        currentClickedBtn = i;
        currentRating = Number(currentClickedBtn + 1)
        ratingBtns[i].style.backgroundColor = "hsl(25, 97%, 53%)"
        turnOffOtherBtns()
    })
}

/* Turn Off other Buttons */
function turnOffOtherBtns() {
    for(let i = 0; i < ratingBtns.length; i++) {
        if (i != currentClickedBtn) {
            ratingBtns[i].style.backgroundColor = "hsl(213, 19%, 18%)"
        }
    }
}

/* Add event listener to Submit button */
submitBtn.addEventListener("click", function() {
    /* change the DOM */
    let newHTML = `
    <!-- Header -->
    <header>
        <div class="thank-you">
            <img src="images/illustration-thank-you.svg" alt="illustration-thank-you">
            <p>You selected ${currentRating} out of 5</p>
        </div>
    </header>
    <!-- End Header -->

    <!-- Apprecieting Section -->
    <section class="apprecieting">
        <h3>Thank you!</h3>
        <p>We appreciete you taking a time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </section>
    <!-- End Apprecieting Section -->`
    
    /* change innerHTML of the container */
    containerEl.innerHTML = newHTML 

    /* Sending data to server here... */
})

