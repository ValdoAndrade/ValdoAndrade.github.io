

// ===============================
// NAVBAR ACTIVE LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll(
    ".about-card, .timeline-item, .project-card, .contact-box"
);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// FLOATING PROFILE IMAGE
// ===============================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

    let direction = 1;

    setInterval(()=>{

        heroImage.style.transform =
        `translateY(${direction*10}px)`;

        direction *= -1;

    },2500);

}

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".stat h2");

const animateCounter = counter=>{

    const target = parseInt(counter.innerText.replace(/\D/g,""));

    let value = 0;

    const speed = target/60;

    const update = ()=>{

        value += speed;

        if(value < target){

            counter.innerText =
            Math.floor(value)+"+";

            requestAnimationFrame(update);

        }else{

            counter.innerText =
            target+"+";

        }

    }

    update();

}

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter=>observer.observe(counter));

// ===============================
// HERO BUTTON HOVER EFFECT
// ===============================

const buttons=document.querySelectorAll(".primary-btn,.secondary-btn");

buttons.forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

        const rect=btn.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        btn.style.setProperty("--x",x+"px");
        btn.style.setProperty("--y",y+"px");

    });

});

// ===============================
// SCROLL TO TOP
// ===============================

const scrollBtn=document.createElement("div");

scrollBtn.innerHTML="↑";

scrollBtn.className="scroll-top";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
