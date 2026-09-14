function showContent(title) {
  const box = document.getElementById("boxD");
  box.classList.remove("fade", "show");  
  box.style.overflowY = "auto";
  setTimeout(() => {
    box.innerHTML = `
    <h2>${title}</h2>
    <div>${ContentData[title] || "No content found."}</div> `;     
    box.classList.add("fade", "show");
  }, 150);
}
function setActive(element) {
  document.querySelectorAll('#sectionNav .box')
  .forEach(box => box.classList.remove('active'));
  element.classList.add('active');
}
showContent('Home');