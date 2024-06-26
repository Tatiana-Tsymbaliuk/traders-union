function changeTab(element) {
  const tabs = document.querySelectorAll(".tabs");
  tabs.forEach((tabt) => tabt.classList.remove("active"));
  element.classList.add("active");
}
