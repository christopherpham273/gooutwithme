function moveButtonMobile(event) {
    // Prevent the mouseover event from firing on touch devices
    event.preventDefault();
  
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
  }
  
  // Separate event listener for mobile touch devices
  document.getElementById('noButton').addEventListener('touchstart', moveButtonMobile);
  