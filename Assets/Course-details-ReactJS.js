document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      mainNav.classList.toggle('nav--open');
    });
  }

  // Course Content Toggle (Accordion)
  var toggles = document.querySelectorAll('.toggle-btn');
  toggles.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.toggle-item');
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      item.classList.toggle('active', !expanded);
      var content = item.querySelector('.toggle-content');
      if (content) {
        content.style.display = !expanded ? 'block' : 'none';
      }

      // Find the icon within the button
      var icon = btn.querySelector('i');
      if (icon) {
        if (item.classList.contains('active')) {
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-up');
        } else {
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
        }
      }
    });
  });

  // FAQ Toggle (Accordion)
  var faqs = document.querySelectorAll('.faq-question');
  faqs.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-item').forEach(function(i) {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-answer').style.display = 'none';
      });
      if (!expanded) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        item.querySelector('.faq-answer').style.display = 'block';
      }
    });
  });
}); 