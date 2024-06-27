function changeNewTab(element) {
  const tabs = document.querySelectorAll(".new-tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  element.classList.add("active");
}
