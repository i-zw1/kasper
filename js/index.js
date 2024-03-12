let lists = document.querySelectorAll(".shuffle li");
let listsArray = Array.from(lists);
let containers = document.querySelectorAll(".imgs-container");
let containersArray = Array.from(containers);
let nums = document.querySelectorAll(".number");
let statsSection = document.querySelector(".stats");
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .container .skills .prog-holder .prog span");
let started = false;

listsArray.forEach(li => {
    li.addEventListener("click", (e) => {
        listsArray.forEach(li => li.classList.remove("active"));
        e.currentTarget.classList.add("active");
        containersArray.forEach(con => con.style.display = 'none');
        document.querySelector(e.currentTarget.dataset.content).style.display = "flex";
    });  
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= statsSection.offsetTop - 1000) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        };
        started = true;
    }; 

    if (window.scrollY >= section.offsetTop - 1000) {
        spans.forEach(span => {
            span.style.width = span.dataset.prog;
        });
    }
});

function startCount(el) {
    let num = el.dataset.num;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === num) {
            clearInterval(count);
        };
    }, 2000 / num);
};

