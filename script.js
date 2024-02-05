function moveButton(event) {
    // Check if the event is a touch event and prevent the mouseover event
    if (event.type === "touchstart") {
        event.preventDefault();
    }

    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').clientWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').clientHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

// Attach the event listeners
document.getElementById('noButton').addEventListener('mouseover', moveButton);
document.getElementById('noButton').addEventListener('touchstart', moveButton);
