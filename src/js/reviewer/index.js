const $st = (st) => document.querySelector(st);
const $sta = (sta) => document.querySelectorAll(sta);

import reviewer from "./reviewer.js";
import { starRate } from "./starRate.js";

const nextBtn = $st(".reviewer__arrow--right");
const prevBtn = $st(".reviewer__arrow--left");

if (reviewer.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}

//# Display img of container
const imgContainer = $st(".reviewer__imgContainer");
imgContainer.innerHTML = reviewer
  .map((reviewList, index) => {
    const { img } = reviewList;
    let active = `user${index + 1}`;
    index === 0 && (active = "user1 active");
    return `
    <li class="reviewer__imgList ${active}">
      <img
        class="reviewer__img"
        src="${img}"
        alt="reviewer${index + 1}"
      />
    </li>
`;
  })
  .join("");

//# Display Describe of reviewer
const describeContainer = $st(".reviewer__describeContainer");

describeContainer.innerHTML = reviewer
  .map((review, slideIndex) => {
    const { header, describe, name, starRating } = review;
    let position = "next";
    slideIndex === 0 && (position = "active");
    slideIndex === reviewer.length - 1 && (position = "last");
    reviewer.length <= 1 && (position = "active");
    return `
      <div class="reviewer__descriptions reviewer__descriptions--${position} ${
      name.split(" ")[0]
    }">
        <h3 class="reviewer__heading">${header}</h3>
        <p class="reviewer__paragraph">
          “${describe}”
        </p>
        <div class="reviewer__starRating">
          ${starRate(starRating)}
        </div>
        <p class="reviewer__customerName textSmallUpperCase">
          ${name}
        </p>
      </div>
    `;
  })
  .join("");

//# click Behavior reviewer
const imgList = $sta(".reviewer__imgList");

for (const img of imgList) {
  img.addEventListener("click", function (e) {
    const currentClick = e.currentTarget;
    const clicker = currentClick.classList[1];

    const firstNameReview = reviewer.map((review) => {
      const { name } = review;
      return name.split(" ").flat()[0];
    });

    const peter = $st(`.${firstNameReview[0]}`);
    const susan = $st(`.${firstNameReview[1]}`);
    const emma = $st(`.${firstNameReview[2]}`);

    const classActive = "reviewer__descriptions--active";
    const classLast = "reviewer__descriptions--last";
    const classNext = "reviewer__descriptions--next";

    const slideActive = $st(`.${classActive}`);
    const slideLast = $st(`.${classLast}`);
    const slideNext = $st(`.${classNext}`);

    slideActive.classList.remove(classActive);
    slideLast.classList.remove(classLast);
    slideNext.classList.remove(classNext);

    const slide = (active, next, last) => {
      active.classList.add(classActive);
      next.classList.add(classNext);
      last.classList.add(classLast);
    };

    switch (clicker) {
      case "user1":
        slide(peter, susan, emma);
        break;
      case "user2":
        slide(susan, emma, peter);
        break;
      case "user3":
        slide(emma, peter, susan);
        break;
      default:
        break;
    }

    if (currentClick.classList.contains("active")) return;
    currentClick.classList.add("active");
    for (const img of imgList) {
      currentClick !== img && img.classList.remove("active");
    }
  });
}

//# slide reviewer function
const slide = (isPrev) => {
  const slideActive = $st(".reviewer__descriptions--active");
  const slideLast = $st(".reviewer__descriptions--last");
  // Slide next nextElement
  let slideNext = slideActive.nextElementSibling;
  // Not have next move to firstElement
  if (!slideNext) slideNext = describeContainer.firstElementChild;

  const imgActive = $st(".active");
  let imgNext = imgActive.nextElementSibling;

  slideActive.classList.remove("reviewer__descriptions--active");
  slideLast.classList.remove("reviewer__descriptions--last");
  slideNext.classList.remove("reviewer__descriptions--next");

  if (!isPrev) {
    slideActive.classList.add("reviewer__descriptions--last");
    slideLast.classList.add("reviewer__descriptions--next");
    slideNext.classList.add("reviewer__descriptions--active");
    if (!imgNext) {
      imgNext = imgContainer.firstElementChild;
    }
    imgActive.classList.remove("active");
    imgNext.classList.add("active");
  }

  if (isPrev) {
    slideActive.classList.add("reviewer__descriptions--next");
    slideLast.classList.add("reviewer__descriptions--active");
    slideNext = slideLast.previousElementSibling;
    if (!slideNext) {
      slideNext = describeContainer.lastElementChild;
    }
    slideNext.classList.add("reviewer__descriptions--last");
    imgNext = imgActive.previousElementSibling;
    if (!imgNext) {
      imgNext = imgContainer.lastElementChild;
    }
    imgActive.classList.remove("active");
    imgNext.classList.add("active");
  }
};

nextBtn.addEventListener("click", () => {
  slide();
});

prevBtn.addEventListener("click", () => {
  slide("prev");
});

setInterval(() => {
  slide();
}, 5000);
