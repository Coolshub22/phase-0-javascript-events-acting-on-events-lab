const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) { // Assuming the container width is 400px and dodger width is 40px
        dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });
