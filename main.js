document.addEventListener('DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.slide')
  let prevButton = document.querySelector('.prev')
  let nextButton = document.querySelector('.next')
  let currentSlide = 0

  prevButton.addEventListener('click', function () {
    goToSlide(currentSlide - 1)
  })

  nextButton.addEventListener('click', function () {
    goToSlide(currentSlide + 1)
  })

  function goToSlide(n) {
    slides[currentSlide].classList.remove('active')
    currentSlide = (n + slides.length) % slides.length
    slides[currentSlide].classList.add('active')
  }
})
