// script.js

document.addEventListener('DOMContentLoaded', function() {
  const swipeContainer = document.getElementById('swipe-container');
  const swipeHeader = document.getElementById('swipe-header');
  const swipeContent = document.getElementById('swipe-content');

  function updateSwipeText(text) {
    swipeHeader.textContent = text;
  }

  function handleSwipe(event) {
    if (event.deltaX < -50) {
      // Swipe left
      updateSwipeText('Left Swipe');
      console.log('Swiped left');
    } else if (event.deltaX > 50) {
      // Swipe right
      updateSwipeText('Right Swipe');
      console.log('Swiped right');
    }
  }

  swipeContainer.addEventListener('touchmove', handleSwipe);
});