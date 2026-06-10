// smooth reveal (optimized)
const items = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

items.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(25px)";
  el.style.transition = "0.7s ease";
  observer.observe(el);
});

// pricing logic
const type = document.getElementById("type");
const price = document.getElementById("price");

type.addEventListener("change", () => {
  const map = {
    "Website": "$15 - $30",
    "Android App": "$20 - $30",
    "Automation": "$10 - $25",
    "3D Model/Scene": "$15 - $30"
  };
  price.textContent = map[type.value];
});

// mail send
document.getElementById("orderForm").addEventListener("submit", e => {
  e.preventDefault();

  const subject = `New Order: ${type.value}`;

  const body =
`Name: ${name.value}
Email: ${email.value}
Type: ${type.value}
Style: ${style.value}

Description:
${desc.value}`;

  window.location.href =
    `mailto:fu282012@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
