const button = document.querySelector('.button')
const ratingCard = document.querySelector('.card-rating')
const thankYouCard = document.querySelector('.card-thank-you')

let rating = null

button.addEventListener('click', () => {
    submitRating(rating, ratingCard, thankYouCard)
})

const submitRating = (rating, ratingCard, thankYouCard) => {
    const selectedRating = document.querySelector('input[name="rating"]:checked')

    if(selectedRating) {
        rating = selectedRating.value
        ratingCard.style.display = 'none'
        thankYouCard.style.display = 'flex'
        thankYouCard.querySelector('.card_badge').innerHTML = `You selected ${rating} out of 5`
    }else {
        alert('Please select value ❤')
    }
}