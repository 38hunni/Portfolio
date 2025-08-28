/* ==========
   Mobile Nav
========== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
});

/* ==========
   Typing Animation (purple/blue theme vibes)
========== */
const typing = document.querySelector(".typing");
const phrases = ["Frontend Developer", "Virtual Assistant", "Tech Enthusiast"];
let pi = 0,
	pj = 0,
	deleting = false;

function type() {
	const current = phrases[pi];
	typing.textContent = current.slice(0, pj);

	if (!deleting && pj < current.length) {
		pj++;
		setTimeout(type, 140);
	} else if (deleting && pj > 0) {
		pj--;
		setTimeout(type, 90);
	} else {
		deleting = !deleting;
		if (!deleting) pi = (pi + 1) % phrases.length;
		setTimeout(type, 900);
	}
}
type();

/* ==========
   Read More
========== */
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("more");

readMoreBtn.addEventListener("click", () => {
	const hidden = moreText.classList.toggle("hidden");
	readMoreBtn.textContent = hidden ? "Read More" : "Read Less";
});

/* ==========
   Scroll To Top
========== */
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
	scrollTopBtn.style.display = window.scrollY > 240 ? "grid" : "none";
});
scrollTopBtn.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});
