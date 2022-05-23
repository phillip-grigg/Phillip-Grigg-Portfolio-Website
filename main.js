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
    translateY: 72,
    translateX: 20,
    duration: 0,
    rotate: 0,
  });
  anime({
    targets: "#fourteen-cog-inner-el",
    translateY: 96,
    translateX: 44,
    duration: 0,
    rotate: "0.5turn",
  });
  anime({
    targets: "#twelve-cog-el",
    translateY: -55,
    translateX: 227,
    duration: 0,
    rotate: 0,
  });
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

// set buttons to work on arrow keys and n and p keys
let btnFreeToPress = true;
document.addEventListener("keydown", function (e) {
  if (btnFreeToPress == true && (e.key === "ArrowRight" || e.key === "n")) {
    event.preventDefault();
    btnRightPress();
    btnFreeToPress = false;
    setTimeout(() => {
      btnFreeToPress = true;
    }, 3000);
  } else if (
    btnFreeToPress == true &&
    (e.key === "ArrowLeft" || e.key === "p")
  ) {
    event.preventDefault();
    btnLeftPress();
    btnFreeToPress = false;
    setTimeout(() => {
      btnFreeToPress = true;
    }, 3000);
  }
});

let TurnSliderLeft = false;
// call button function on cog click
const btnLeft = document
  .getElementById("fourteen-cog-inner-el")
  .addEventListener("click", btnLeftPress);

function btnLeftPress() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document
    .getElementById("screen-for-button-press-el")
    .classList.add("screen-for-button-press-display");
  pressBtnLeft();
  ChangeNameSlider();
  setTimeout(() => {
    slideName.textContent = "";
  }, 1000);
  setTimeout(() => {
    slideName.textContent = countTranslateTable[count];
  }, 2100);
  setTimeout(() => {
    document
      .getElementById("screen-for-button-press-el")
      .classList.remove("screen-for-button-press-display");
  }, 3000);
}

const btnRight = document
  .getElementById("twenty-four-cog-inner-el")
  .addEventListener("click", btnRightPress);

function btnRightPress() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document
    .getElementById("screen-for-button-press-el")
    .classList.add("screen-for-button-press-display");
  pressBtnRight();
  ChangeNameSlider();
  setTimeout(() => {
    slideName.textContent = "";
  }, 1000);
  setTimeout(() => {
    slideName.textContent = countTranslateTable[count];
  }, 2100);
  setTimeout(() => {
    document
      .getElementById("screen-for-button-press-el")
      .classList.remove("screen-for-button-press-display");
  }, 3000);
}
// change name of slide on name slider
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
  window.scrollTo({ top: 0, behavior: "smooth" });
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
    document.getElementById(countPlusTwo).classList.add("hide-slide");
    setTimeout(() => {
      countPlusThree = `slide-${countTranslateTable[count + 3]}-el`;
      document.getElementById(countPlusThree).classList.add("hide-slide");
    }, 2500);
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

for (let i = 0; i < 200; i++) {
  topCogDiv.appendChild(topCogSingle.cloneNode(true));
}

const topCogSingleTwo = document.createElement("img");
topCogSingle.setAttribute("src", "./top-cog.svg");

const topCogDivTwo = document.getElementById("top-cog-1-el");

for (let i = 0; i < 200; i++) {
  topCogDivTwo.appendChild(topCogSingle.cloneNode(true));
}

const topCogSingleThree = document.createElement("img");
topCogSingle.setAttribute("src", "./top-cog.svg");

const topCogDivThree = document.getElementById("top-cog-3-el");

for (let i = 0; i < 200; i++) {
  topCogDivThree.appendChild(topCogSingle.cloneNode(true));
}

const topCogSingleFour = document.createElement("img");
topCogSingle.setAttribute("src", "./top-cog.svg");

const topCogDivFour = document.getElementById("top-cog-4-el");

for (let i = 0; i < 200; i++) {
  topCogDivFour.appendChild(topCogSingle.cloneNode(true));
}

// ----- skills slide ------

// - hard skills -
let hardSkillArray = [];

const hardSkills = document.getElementById("hard-skills-grid-el");

const hardSkill1 = document.createElement("img");
hardSkill1.setAttribute("src", "./hard-skills-logo/html-logo.svg");
hardSkillArray.push(hardSkill1);
const hardSkill2 = document.createElement("img");
hardSkill2.setAttribute("src", "./hard-skills-logo/css-logo.svg");
hardSkillArray.push(hardSkill2);
const hardSkill3 = document.createElement("img");
hardSkill3.setAttribute("src", "./hard-skills-logo/javascript-logo.svg");
hardSkillArray.push(hardSkill3);
const hardSkill4 = document.createElement("img");
hardSkill4.setAttribute("src", "./hard-skills-logo/css-flexbox-logo.svg");
hardSkillArray.push(hardSkill4);
const hardSkill5 = document.createElement("img");
hardSkill5.setAttribute("src", "./hard-skills-logo/css-grig-logo.svg");
hardSkillArray.push(hardSkill5);
const hardSkill6 = document.createElement("img");
hardSkill6.setAttribute("src", "./hard-skills-logo/git-logo.svg");
hardSkillArray.push(hardSkill6);
const hardSkill7 = document.createElement("img");
hardSkill7.setAttribute("src", "./hard-skills-logo/github-logo.svg");
hardSkillArray.push(hardSkill7);
const hardSkill8 = document.createElement("img");
hardSkill8.setAttribute("src", "./hard-skills-logo/photoshop-logo.svg");
hardSkillArray.push(hardSkill8);
const hardSkill9 = document.createElement("img");
hardSkill9.setAttribute("src", "./hard-skills-logo/Illustrator-logo.svg");
hardSkillArray.push(hardSkill9);
const hardSkill10 = document.createElement("img");
hardSkill10.setAttribute(
  "src",
  "./hard-skills-logo/affinity-designer-logo.svg"
);
hardSkillArray.push(hardSkill10);
const hardSkill11 = document.createElement("img");
hardSkill11.setAttribute("src", "./hard-skills-logo/affinity-photo-logo.svg");
hardSkillArray.push(hardSkill11);
const hardSkill12 = document.createElement("img");
hardSkill12.setAttribute("src", "./hard-skills-logo/anime.js-logo.svg");
hardSkillArray.push(hardSkill12);

hardSkillArray.forEach(function (skill) {
  hardSkills.appendChild(skill);
  hardSkills.classList.add("skill-border");
});

// - soft skills -
let softSkillArray = [];

const softSkills = document.getElementById("soft-skills-grid-el");

const softSkill1 = document.createElement("img");
softSkill1.setAttribute("src", "./soft-skills-logo/communication.svg");
softSkillArray.push(softSkill1);
const softSkill2 = document.createElement("img");
softSkill2.setAttribute("src", "./soft-skills-logo/multitasking.svg");
softSkillArray.push(softSkill2);
const softSkill3 = document.createElement("img");
softSkill3.setAttribute("src", "./soft-skills-logo/learning.svg");
softSkillArray.push(softSkill3);
const softSkill4 = document.createElement("img");
softSkill4.setAttribute("src", "./soft-skills-logo/self-learning.svg");
softSkillArray.push(softSkill4);
const softSkill5 = document.createElement("img");
softSkill5.setAttribute("src", "./soft-skills-logo/coding-smell.svg");
softSkillArray.push(softSkill5);
const softSkill6 = document.createElement("img");
softSkill6.setAttribute("src", "./soft-skills-logo/problem-solving.svg");
softSkillArray.push(softSkill6);
const softSkill7 = document.createElement("img");
softSkill7.setAttribute("src", "./soft-skills-logo/teamwork.svg");
softSkillArray.push(softSkill7);
const softSkill8 = document.createElement("img");
softSkill8.setAttribute("src", "./soft-skills-logo/troubleshooting.svg");
softSkillArray.push(softSkill8);

softSkillArray.forEach(function (skill) {
  softSkills.appendChild(skill);
  softSkills.classList.add("skill-border");
});
// ----- social-media-icons ------

document
  .getElementById("social-media-github-1-el")
  .addEventListener("click", () => {
    window.open("https://github.com/phillip-grigg/pgrigg-website01", "_blank");
  });
document
  .getElementById("social-media-github-2-el")
  .addEventListener("click", () => {
    window.open("https://github.com/phillip-grigg/pgrigg-website01", "_blank");
  });
document
  .getElementById("social-media-github-3-el")
  .addEventListener("click", () => {
    window.open("https://github.com/phillip-grigg/pgrigg-website01", "_blank");
  });
document
  .getElementById("social-media-github-4-el")
  .addEventListener("click", () => {
    window.open("https://github.com/phillip-grigg/pgrigg-website01", "_blank");
  });

document
  .getElementById("social-media-linkedin-1-el")
  .addEventListener("click", () => {
    window.open("www.linkedin.com/in/phillipgrigg", "_blank");
  });
document
  .getElementById("social-media-linkedin-2-el")
  .addEventListener("click", () => {
    window.open("www.linkedin.com/in/phillipgrigg", "_blank");
  });
document
  .getElementById("social-media-linkedin-3-el")
  .addEventListener("click", () => {
    window.open("www.linkedin.com/in/phillipgrigg", "_blank");
  });
document
  .getElementById("social-media-linkedin-4-el")
  .addEventListener("click", () => {
    window.open("www.linkedin.com/in/phillipgrigg", "_blank");
  });

document.querySelector(".social-media-email").addEventListener("click", () => {
  navigator.clipboard.writeText("pgrigg1991@gmail.com");
  console.log("test");
  document
    .getElementById("email-copied-1-el")
    .classList.remove("email-copied-hidden");
  setTimeout(() => {
    document
      .getElementById("email-copied-1-el")
      .classList.add("email-copied-hidden");
  }, 800);
});

document
  .querySelector(".social-media-email-2")
  .addEventListener("click", () => {
    navigator.clipboard.writeText("pgrigg1991@gmail.com");
    console.log("test");
    document
      .getElementById("email-copied-2-el")
      .classList.remove("email-copied-hidden");
    setTimeout(() => {
      document
        .getElementById("email-copied-2-el")
        .classList.add("email-copied-hidden");
    }, 800);
  });

document
  .querySelector(".social-media-email-3")
  .addEventListener("click", () => {
    navigator.clipboard.writeText("pgrigg1991@gmail.com");
    console.log("test");
    document
      .getElementById("email-copied-3-el")
      .classList.remove("email-copied-hidden");
    setTimeout(() => {
      document
        .getElementById("email-copied-3-el")
        .classList.add("email-copied-hidden");
    }, 800);
  });

document
  .querySelector(".social-media-email-4")
  .addEventListener("click", () => {
    navigator.clipboard.writeText("pgrigg1991@gmail.com");
    console.log("test");
    document
      .getElementById("email-copied-4-el")
      .classList.remove("email-copied-hidden");
    setTimeout(() => {
      document
        .getElementById("email-copied-4-el")
        .classList.add("email-copied-hidden");
    }, 800);
  });

const aboutNameContainer = document.getElementById("slide-about-name-el");

const aboutName = document.createElement("img");
aboutName.setAttribute("src", "./name-img/name.svg");

aboutNameContainer.appendChild(aboutName);
