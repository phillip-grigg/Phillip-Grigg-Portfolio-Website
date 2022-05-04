// ----- set cog X, Y positions -----
function positionMenuCogs() {
  anime({
    targets: "#twenty-four-cog-el",
    translateY: 15,
    translateX: 117,
    duration: 0,
    rotate: -0,
  });
  anime({
    targets: "#twenty-four-cog-inner-el",
    translateY: 48,
    translateX: 149.5,
    duration: 0,
    rotate: -0.6,
  });
  anime({
    targets: "#twenty-cog-el",
    translateY: 24,
    translateX: 278,
    duration: 0,
    rotate: -0,
  });
  anime({
    targets: "#six-cog-top-el",
    translateY: 10.2,
    translateX: 48,
    duration: 0,
    rotate: 0,
  });
  anime({
    targets: "#six-cog-top-inner-el",
    translateY: 38,
    translateX: 75.2,
    duration: 0,
    rotate: 0,
  });
  anime({
    targets: "#six-cog-bottom-el",
    translateY: 99,
    translateX: 48,
    duration: 0,
    rotate: 0,
  });
  anime({
    targets: "#six-cog-bottom-inner-el",
    translateY: 124,
    translateX: 73,
    duration: 0,
    rotate: 0,
  });
  anime({
    targets: "#twelve-cog-el",
    translateY: -55,
    translateX: 227,
    duration: 0,
    rotate: 0,
  });
  // anime({
  //   targets: "#menu-slider-el",
  //   translateY: -210,
  //   translateX: -280,
  //   duration: 0,
  //   rotate: 0,
  // });
}
positionMenuCogs();

// ----- hide cogs behind cog 1 at start -----
const slideAbout = document
  .getElementById("slide-about-el")
  .classList.remove("hide-slide");

const slideProjects = document
  .getElementById("slide-projects-el")
  .classList.add("hide-slide");

const slideSkills = document
  .getElementById("slide-skills-el")
  .classList.add("hide-slide");

const slideContact = document
  .getElementById("slide-contact-el")
  .classList.add("hide-slide");

// const topCog = document.getElementsByClassName("top-cog");

let count = 1;

let countPlusOne = "";
let countPlusTwo = "";
let countPlusThree = "";

const countTranslateTable = ["empty", "about", "projects", "skills", "contact"];

let countTranslate = `slide-${countTranslateTable[count]}-el`;

let countTranslateSlider = countTranslateTable[count];

let slideName = document.getElementById("slide-name-el");

console.log(countTranslateSlider);

// ----- left/right buttons -----

let TurnSliderLeft = false;

const btnLeft = document
  .getElementById("six-cog-top-inner-el")
  .addEventListener("click", () => {
    document
      .getElementById("screen-for-button-press-el")
      .classList.add("screen-for-button-press-display");
    pressBtnLeft();
    ChangeNameSlider();
    setTimeout(() => {
      slideName.textContent = "";
    }, 1100);
    setTimeout(() => {
      slideName.textContent = countTranslateTable[count];
    }, 2100);
    setTimeout(() => {
      document
        .getElementById("screen-for-button-press-el")
        .classList.remove("screen-for-button-press-display");
    }, 3500);
  });

const btnRight = document
  .getElementById("six-cog-bottom-inner-el")
  .addEventListener("click", () => {
    document
      .getElementById("screen-for-button-press-el")
      .classList.add("screen-for-button-press-display");
    pressBtnRight();
    ChangeNameSlider();
    setTimeout(() => {
      slideName.textContent = "";
    }, 1100);
    setTimeout(() => {
      slideName.textContent = countTranslateTable[count];
    }, 2100);
    setTimeout(() => {
      document
        .getElementById("screen-for-button-press-el")
        .classList.remove("screen-for-button-press-display");
    }, 3500);
  });

function ChangeNameSlider() {
  anime({
    targets: "#slide-name-el",
    width: "0%",
    direction: "normal",
    duration: 2000,
    easing: "easeInOutExpo",
  });
  setTimeout(() => {
    anime({
      targets: "#slide-name-el",
      width: "100%",
      direction: "normal",
      duration: 1500,
      easing: "easeInOutExpo",
    });
  }, 1400);
}

function pressBtnLeft() {
  if (count > 1) {
    twentyFourCogAnimationLeft.play();
    sixCogTopAnimationLeft.play();
    sixCogBottomAnimationLeft.play();
    twelveCogAnimationLeft.play();
    twentyCogAnimationLeft.play();
  } else if (count === 1) {
    twentyFourCogAnimationRight.play();
    sixCogTopAnimationRight.play();
    sixCogBottomAnimationRight.play();
    twelveCogAnimationRight.play();
    twentyCogAnimationRight.play();
  }
  if (count === 1) {
    countPlusFour = `slide-${countTranslateTable[count + 3]}-el`;
    document.getElementById(countPlusFour).classList.remove("hide-slide");
    countPlusThree = `slide-${countTranslateTable[count + 2]}-el`;
    document.getElementById(countPlusThree).classList.remove("hide-slide");
    countPlusTwo = `slide-${countTranslateTable[count + 1]}-el`;
    document.getElementById(countPlusTwo).classList.remove("hide-slide");
    countPlusOne = `slide-${countTranslateTable[count]}-el`;
    document.getElementById(countPlusOne).classList.remove("hide-slide");
    anime({
      targets: "#slide-about-el",
      width: "0%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    anime({
      targets: "#slide-projects-el",
      width: "0%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    anime({
      targets: "#slide-skills-el",
      width: "0%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    count = 4;
  } else if (count == 2) {
    anime({
      targets: "#slide-about-el",
      width: "100%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    count = count - 1;
  } else if (count === 3) {
    anime({
      targets: "#slide-projects-el",
      width: "100%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    count = count - 1;
  } else if (count === 4) {
    anime({
      targets: "#slide-skills-el",
      width: "100%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    count = count - 1;
  }

  setTimeout(() => {
    countPlusOne = `slide-${countTranslateTable[count + 1]}-el`;
    document.getElementById(countPlusOne).classList.add("hide-slide");
  }, 3000);

  console.log(count);
}

function pressBtnRight() {
  if (count < 4) {
    twentyFourCogAnimationRight.play();
    sixCogTopAnimationRight.play();
    sixCogBottomAnimationRight.play();
    twelveCogAnimationRight.play();
    twentyCogAnimationRight.play();
  } else if (count === 4) {
    twentyFourCogAnimationLeft.play();
    sixCogTopAnimationLeft.play();
    sixCogBottomAnimationLeft.play();
    twelveCogAnimationLeft.play();
    twentyCogAnimationLeft.play();
  }
  if (count < 4) {
    countPlusOne = `slide-${countTranslateTable[count + 1]}-el`;
    document.getElementById(countPlusOne).classList.remove("hide-slide");
  }
  if (count === 1) {
    anime({
      targets: "#slide-about-el",
      width: "0%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    count = count + 1;
  } else if (count === 2) {
    anime({
      targets: "#slide-projects-el",
      width: "0%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    count = count + 1;
  } else if (count === 3) {
    anime({
      targets: "#slide-skills-el",
      width: "0%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    count = count + 1;
  } else if (count === 4) {
    anime({
      targets: "#slide-about-el",
      width: "100%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    anime({
      targets: "#slide-projects-el",
      width: "100%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    anime({
      targets: "#slide-skills-el",
      width: "100%",
      direction: "normal",
      duration: 3000,
      easing: "easeInOutExpo",
    });
    count = 1;
    countPlusOne = `slide-${countTranslateTable[count + 1]}-el`;
    document.getElementById(countPlusOne).classList.add("hide-slide");
    countPlusTwo = `slide-${countTranslateTable[count + 2]}-el`;
    document.getElementById(countPlusOne).classList.add("hide-slide");
    countPlusThree = `slide-${countTranslateTable[count + 3]}-el`;
    document.getElementById(countPlusOne).classList.add("hide-slide");
  }
  console.log(count);
}

// ----- cog animations -----

const twentyFourCogAnimationLeft = anime({
  targets: "#twenty-four-cog-el",
  rotate: [
    {
      value: "1turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});
const sixCogTopAnimationLeft = anime({
  targets: "#six-cog-top-el",
  rotate: [
    {
      value: "-2turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});
const sixCogBottomAnimationLeft = anime({
  targets: "#six-cog-bottom-el",
  rotate: [
    {
      value: "-2turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});
const twelveCogAnimationLeft = anime({
  targets: "#twelve-cog-el",
  rotate: [
    {
      value: "-1turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});
const twentyCogAnimationLeft = anime({
  targets: "#twenty-cog-el",
  rotate: [
    {
      value: "-1turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});

const aboutSlideMoveLeft = anime({
  targets: "#slide-about-el",
  width: "100%",
  direction: "normal",
  duration: 3000,
  easing: "easeInOutExpo",
  autoplay: false,
});
const projectsSlideMoveLeft = anime({
  targets: "#slide-projects-el",
  width: "100%",
  direction: "normal",
  duration: 3000,
  easing: "easeInOutExpo",
  autoplay: false,
});
const skillsSlideMoveLeft = anime({
  targets: "#slide-skills-el",
  width: "100%",
  direction: "normal",
  duration: 3000,
  easing: "easeInOutExpo",
  autoplay: false,
});
const contactSlideMoveLeft = anime({
  targets: "#slide-contact-el",
  width: "100%",
  direction: "normal",
  duration: 3000,
  easing: "easeInOutExpo",
  autoplay: false,
});

const twentyFourCogAnimationRight = anime({
  targets: "#twenty-four-cog-el",
  rotate: [
    {
      value: "-1turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});
const sixCogTopAnimationRight = anime({
  targets: "#six-cog-top-el",
  rotate: [
    {
      value: "2turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});
const sixCogBottomAnimationRight = anime({
  targets: "#six-cog-bottom-el",
  rotate: [
    {
      value: "2turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});
const twelveCogAnimationRight = anime({
  targets: "#twelve-cog-el",
  rotate: [
    {
      value: "1turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});
const twentyCogAnimationRight = anime({
  targets: "#twenty-cog-el",
  rotate: [
    {
      value: "1turn",
      duration: 2970,
      easing: "easeInOutExpo",
    },
  ],
  autoplay: false,
});

// ----- appending cog notches to top of slides -----

const topCogSingle = document.createElement("img");
topCogSingle.setAttribute("src", "./top-cog.svg");

const topCogDiv = document.getElementById("top-cog-2-el");

for (let i = 0; i < 100; i++) {
  topCogDiv.appendChild(topCogSingle.cloneNode(true));
}

const topCogSingleTwo = document.createElement("img");
topCogSingle.setAttribute("src", "./top-cog-2.svg");

const topCogDivTwo = document.getElementById("top-cog-1-el");

for (let i = 0; i < 100; i++) {
  topCogDivTwo.appendChild(topCogSingle.cloneNode(true));
}

const topCogSingleThree = document.createElement("img");
topCogSingle.setAttribute("src", "./top-cog-3.svg");

const topCogDivThree = document.getElementById("top-cog-3-el");

for (let i = 0; i < 100; i++) {
  topCogDivThree.appendChild(topCogSingle.cloneNode(true));
}

const topCogSingleFour = document.createElement("img");
topCogSingle.setAttribute("src", "./top-cog-4.svg");

const topCogDivFour = document.getElementById("top-cog-4-el");

for (let i = 0; i < 100; i++) {
  topCogDivFour.appendChild(topCogSingle.cloneNode(true));
}

// const aboutSlideMoveRight = anime({
//   targets: "#slide-about-el",
//   width: "0%",
//   direction: "normal",
//   duration: 3000,
//   easing: "easeInOutExpo",
//   autoplay: false,
// });
// const projectsSlideMoveRight = anime({
//   targets: "#slide-projects-el",
//   width: "0%",
//   direction: "normal",
//   duration: 3000,
//   easing: "easeInOutExpo",
//   autoplay: false,
// });
// const skillsSlideMoveRight = anime({
//   targets: "#slide-skills-el",
//   width: "0%",
//   direction: "normal",
//   duration: 3000,
//   easing: "easeInOutExpo",
//   autoplay: false,
// });
// const contactSlideMoveRight = anime({
//   targets: "#slide-contact-el",
//   width: "0%",
//   direction: "normal",
//   duration: 3000,
//   easing: "easeInOutExpo",
//   autoplay: false,
// });

// aboutSlideMoveRight.play();
// setTimeout(() => {
//   aboutSlideMoveLeft.play();
// }, 4000);

// old code

// slideSkills.classList.add("hide-slide");

// function hideHiddenSlide() {
//   divThree.classList.add("hide-slide");
// }

// function showHiddenSlide() {
//   slideSkills.classList.remove("hide-slide");
// }

// document
//   .getElementById("six-cog-top-inner-el")
//   .addEventListener("click", pressBtnLeft);

// document
//   .getElementById("six-cog-bottom-inner-el")
//   .addEventListener("click", pressBtnRight);

// ----- menu buttons -----
// document.getElementById("top-btn1").addEventListener("click", function () {
//   console.log("ok1");
//   console.log(count);
//   document.getElementById(`div${countTranslate}-el`).classList.add("hide");
//   document.getElementById("div1-el").classList.remove("hide");
//   count = 1;
// });

// document.getElementById("top-btn2").addEventListener("click", function () {
//   console.log("ok2");
//   document.getElementById(`div${count}-el`).classList.add("hide");
//   document.getElementById("div2-el").classList.remove("hide");
//   count = 2;
// });

// document.getElementById("top-btn3").addEventListener("click", function () {
//   console.log("ok3");
//   document.getElementById(`div${count}-el`).classList.add("hide");
//   document.getElementById("div3-el").classList.remove("hide");
//   count = 3;
// });

// document.getElementById("top-btn4").addEventListener("click", function () {
//   console.log("ok4");
//   document.getElementById(`div${count}-el`).classList.add("hide");
//   document.getElementById("div4-el").classList.remove("hide");
//   count = 4;
// });
