 document.querySelector('.navtoggle').addEventListener('click', function () {
    document.querySelector('.navlinks').classList.toggle('show');
  });


  const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const content = button.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
