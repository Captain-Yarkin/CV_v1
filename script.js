fetch('education.json')
  .then(response => response.json())
  .then(data => displayEducation(data))
  .catch(error => console.error('Error loading the education data:', error));

function displayEducation(data) {
  const container = document.getElementById('education');
  data.education.forEach(edu => {
    const eduBlock = document.createElement('div');
    eduBlock.innerHTML = `<h2>${edu.period}</h2>
                          <h3>${edu.institution}</h3>
                          <ul>${edu.details.map(detail => `<li>${detail}</li>`).join('')}</ul>`;
    container.appendChild(eduBlock);
  });
}

// Function to fetch and display work experience
fetch('work.json')
  .then(response => response.json())
  .then(data => displayWork(data))
  .catch(error => console.error('Error loading the work data:', error));

function displayWork(data) {
  const container = document.getElementById('work');
  data.workExperience.forEach(work => {
    const workBlock = document.createElement('div');
    workBlock.innerHTML = `<h2>${work.period} - ${work.company}</h2>
                           <h3>${work.position}</h3>
                           <p>${work.address}</p>
                           <ul>${work.details.map(detail => `<li>${detail}</li>`).join('')}</ul>`;
    container.appendChild(workBlock);
  });
}


// New functions to change the photo on hover
function changePhoto(imageElement) {
    imageElement.src = 'IMG_0340_laugh.jpg'; // Path to the photo shown on hover
  }
  
  function revertPhoto(imageElement) {
    imageElement.src = 'IMG_0341_nlaugh.jpg'; // Original path to the photo
  }
