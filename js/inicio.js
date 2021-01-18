window.addEventListener("load", function () {
  var faqs = document.getElementsByClassName("faq");

  function faq() {
    status = this.getAttribute("data-status");
    let desc = this.querySelector(".faq__desc");
    if (status == "close") {
      desc.classList.remove("hidden");
      this.setAttribute("data-status", "open");
    } else {
      desc.classList.add("hidden");
      this.setAttribute("data-status", "close");
    }
  }

  for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", faq);
  }
});
