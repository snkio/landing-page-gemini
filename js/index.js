const heroSpan = document.querySelector(".hero__span");

setInterval(() => {
  heroSpan.classList.toggle("hero__span-c");
}, 4000);

// OBSERVER

const section = document.querySelectorAll("[data-anim]");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

section.forEach((e) => {
  observer.observe(e);
});
