const slider = document.querySelector('.slider');
    let slideIndex = 0;

    function showSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slider.children.length;
      showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000);


    var audio = document.getElementById("myAudio");
    var pauseButton = document.getElementById("pauseButton");
    
    pauseButton.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        pauseButton.innerHTML = "Pausa";
      } else {
        audio.pause();
        pauseButton.innerHTML = "Reproducir";
      }
    });
    