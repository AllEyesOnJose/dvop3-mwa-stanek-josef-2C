const scrollTracker = document.querySelector(".scroll-tracker");

const documentHeight = Math.max(
  document.body.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.clientHeight,
  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight
);

function updateScrollTracker() {
  const scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  const progress = (scrollTop / (documentHeight - window.innerHeight)) * 100;

  scrollTracker.style.width = `${progress}%`;
}

updateScrollTracker();

window.addEventListener("scroll", updateScrollTracker);

//responzivita
//Chtěl jsem si to zkusit skrz js

function handleResize() {
  const images = document.querySelectorAll(".image");
  //#grid2 nejde přidat classa nevím proč :/
  const grid2 = document.querySelector("#grid2");
  const grid3 = document.querySelector("#grid3");
  const width = window.innerWidth;

  images.forEach((image) => {
    if (width < 1000) {
      image.classList.add("d-none");
    } else {
      image.classList.remove("d-none");
    }
  });

  if (width < 465) {
    grid2.classList.add("mt-5");
  } else {
    grid2.classList.remove("mt-5");
  }
  if (width < 699) {
    grid3.classList.add("mt-5");
  } else {
    grid3.classList.remove("mt-5");
  }
}

window.addEventListener("resize", handleResize);

handleResize();
