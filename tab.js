function moveSlider(element) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  element.classList.add("active");

  const slider = document.querySelector(".slider");
  const tabIndex = Array.from(tabs).indexOf(element);
  slider.style.left = `${tabIndex * 10}%`;
}
