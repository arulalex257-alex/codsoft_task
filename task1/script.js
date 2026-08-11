// ===== Typing Animation =====

const text = [
  "Information Technology Student",
  "Learning Web Development",
  "Programmer.",
  "JavaScript Learner",
  "Improving my skills."
];

let index = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    if (!deleting) {
        typing.textContent = text[index].substring(0, charIndex++);
    } else {
        typing.textContent = text[index].substring(0, charIndex--);
    }

    if (!deleting && charIndex === text[index].length + 1) {
        deleting = true;
        setTimeout(typeEffect, 1500);
        return;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}
typeEffect();

// ===== Scroll Reveal =====
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 250;
        const height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add("show");
        }
    });
});

// ===== Active Navbar =====

const navLinks = document.querySelectorAll("header nav a");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectionTop=section.offsetTop-200;
        const sectionHeight=section.clientHeight;
        
        if(scrollY>=sectionTop){
            current=section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link=>{
        link.classList.remove("active");
        
        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");}
    });
});

// ===== Back To Top Button =====

const topBtn=document.createElement("button");
topBtn.innerHTML="⬆";
topBtn.id="topBtn";
document.body.appendChild(topBtn);
topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="15px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#38bdf8";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="20px";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

});

topBtn.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
// ===== Button Hover Animation =====

const buttons=document.querySelectorAll(".btn");
buttons.forEach(btn=>{
    btn.addEventListener("mouseenter",()=>{
        btn.style.transform="scale(1.1)";
    });
    
    btn.addEventListener("mouseleave",()=>{
        btn.style.transform="scale(1)";
    });
});

// ===== Fade Animation =====

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";
        }
    });
});

document.querySelectorAll("section").forEach(sec=>{
    sec.style.opacity="0";
    sec.style.transform="translateY(60px)";
    sec.style.transition="1s";
    observer.observe(sec);
});
// ===== Resume Download =====

const resumeBtn = document.querySelector(".resume-btn");

if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {

        resumeBtn.innerHTML =
        '<i class="fa-solid fa-circle-check"></i> Downloading...';

        setTimeout(() => {
            resumeBtn.innerHTML =
            '<i class="fa-solid fa-download"></i> Download Resume';
        }, 2000);

    });
}
// ===== Project Cards =====

const projects = document.querySelectorAll(".project-card");

projects.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.04)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});
// ===== Skill Cards =====

const skills = document.querySelectorAll(".skill-box");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {
        skill.style.transform = "translateY(-10px) rotate(2deg)";
    });

    skill.addEventListener("mouseleave", () => {
        skill.style.transform = "translateY(0) rotate(0deg)";
    });

});
// ===== Social Icons =====

const socials = document.querySelectorAll(".social-icons a");

socials.forEach(icon => {

    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "translateY(-8px) scale(1.15)";
    });

    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "translateY(0) scale(1)";
    });

});
// ===== Page Load =====

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = ".8s";
        document.body.style.opacity = "1";

    }, 100);

});
