// scroll animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "0.8s";
  observer.observe(sec);
});

// price logic
const type = document.getElementById("type");
const price = document.getElementById("price");

type.addEventListener("change", () => {
  const values = {
    "Website": "$15 - $30",
    "Android App": "$20 - $30",
    "Automation": "$10 - $25",
    "3D Model/Scene": "$15 - $30"
  };
  price.innerText = values[type.value];
});

// form send via mailto
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const typeVal = type.value;
  const style = document.getElementById("style").value;
  const desc = document.getElementById("desc").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const subject = `New Order: ${typeVal}`;
  const body =
`Name: ${name}
Email: ${email}
Type: ${typeVal}
Style: ${style}

Description:
${desc}`;

  window.location.href =
    `mailto:fu282012@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
