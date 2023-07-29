
function showContent(sectionId) {

  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('show');
  });


  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('show');
  }
}
