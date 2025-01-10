feather.replace();

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const contentSections = document.querySelectorAll("section:not(.header)");
  const homeLink = document.querySelector(".navbar a[href='#home']");
  const openInvitationButton = document.querySelector(".btn");
  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector("footer");
  const header = document.querySelector(".header");

  // Sembunyikan konten di bawah header saat halaman dimuat
  contentSections.forEach((section) => section.classList.add("hidden"));
  navbar.classList.add("hidden");
  footer.classList.add("hidden");

  // Tampilkan konten saat tombol "Buka Undangan" diklik
  openInvitationButton.addEventListener("click", function (event) {
    event.preventDefault();
    contentSections.forEach((section) => section.classList.remove("hidden"));
    navbar.classList.remove("hidden");
    footer.classList.remove("hidden");
    header.classList.add("hidden"); // Sembunyikan header
    document.querySelector(".navbar").scrollIntoView({ behavior: "smooth" });
  });

  // Sembunyikan konten dan kembali ke header saat link "Home" di navbar diklik
  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    contentSections.forEach((section) => section.classList.add("hidden"));
    navbar.classList.add("hidden");
    footer.classList.add("hidden");
    header.classList.remove("hidden"); // Tampilkan header
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
  });
});
