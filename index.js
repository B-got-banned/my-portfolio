AOS.init();
const toSlide = document.getElementById("toSlide");
const firstChild = toSlide.firstElementChild;
console.log(firstChild);
const p = document.createElement("p");

firstChild.addEventListener("mouseover", event =>{
  p.textContent = `This is Rin! B-got-banned's mascot.`;
  p.style.animation = "fadeIn 0.5s";
  toSlide.appendChild(p);
});

firstChild.addEventListener("mouseout", event =>{
  toSlide.removeChild(p);
});



const headings = document.getElementById("headings");
const heading2 = document.getElementById("heading2");
const heading3 = document.getElementById("heading3");
const imgs = headings.firstElementChild;
const imgs2 = heading2.firstElementChild;
const imgs3 = heading3.firstElementChild;
const title = headings.lastElementChild;
const title2 = heading2.lastElementChild;
const title3 = heading3.lastElementChild;

imgs.addEventListener("mouseover", event =>{
  title.classList.add("hover");
});
imgs2.addEventListener("mouseover", event =>{
  title2.classList.add("hover");
});
imgs3.addEventListener("mouseover", event =>{
  title3.classList.add("hover");
});

imgs.addEventListener("mouseout", event => {
  title.classList.remove("hover");
})
imgs2.addEventListener("mouseout", event => {
  title2.classList.remove("hover");
});
imgs3.addEventListener("mouseout", event => {
  title3.classList.remove("hover");
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("border");
    }
    else{
      entry.target.classList.remove("border");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});
