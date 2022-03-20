const submitBtn = document.getElementById('submit');
const ratings = document.querySelectorAll('.rating');
const card = document.getElementById('card')
const submitPage = document.getElementById('submit-page')
const successPage = document.getElementById('success-page');
const submittedRating = document.getElementById('submitted-rating');

let ratingValue;


submitBtn.addEventListener('click', e => {
  // set rating to whatever is currently selected
  const checked = document.querySelector('input[name="ratings"]:checked');

  // check to see if a rating is selected
  if(checked == null){
    console.log('null');
  } else {
    // set value to be passed to success page
    ratingValue = checked.value;

    // toggle current card page
    submitPage.classList.add('hidden');

    // toggle success page
    successPage.classList.remove('hidden');
    
    // set submitted rating
    submittedRating.innerText = ratingValue;
  };

  return ratingValue;
})

