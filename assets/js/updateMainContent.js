document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      initApplication();
    }
  }
  
function initApplication(){  
  document.getElementById('link_history').addEventListener('click', () => {
    document.getElementById('section_history').style.display = 'block';
    document.getElementById('section_fauna').style.display = 'none';
    document.getElementById('section_flora').style.display = 'none';
  });

  document.getElementById('link_flora').addEventListener('click', () => {
    document.getElementById('section_flora').style.display = 'block';
    document.getElementById('section_history').style.display = 'none';
    document.getElementById('section_fauna').style.display = 'none';
  });

  document.getElementById('link_fauna').addEventListener('click', () => {
    document.getElementById('section_fauna').style.display = 'block';
    document.getElementById('section_history').style.display = 'none';
    document.getElementById('section_flora').style.display = 'none';
  });
}



