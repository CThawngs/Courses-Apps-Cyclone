document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      mainNav.classList.toggle('nav--open');
    });
  }

  // Courses Pagination
  const courses = document.querySelectorAll('.course-card');
  const pageBtns = document.querySelectorAll('.page-btn');
  const coursesPerPage = 9;

  // Show a page
  function showPage(page) {
    courses.forEach((c, i) => {
      c.style.display = 'none';
    });

    const start = (page - 1) * coursesPerPage;
    const end = start + coursesPerPage;

    for (let i = start; i < end && i < courses.length; i++) {
      courses[i].style.display = '';
    }

    pageBtns.forEach((btn, idx) => {
      if (idx === page - 1) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  }

  // Page buttons
  pageBtns.forEach((btn, idx) => {
    btn.addEventListener('click', function() {
      showPage(idx + 1);
    });
  });

  showPage(1);
});
