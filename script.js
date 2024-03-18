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

// Function to fetch and display other information
fetch('otherInfo.json')
  .then(response => response.json())
  .then(data => displayOtherInfo(data))
  .catch(error => console.error('Error loading the other information data:', error));

function displayOtherInfo(data) {
  const container = document.getElementById('otherInfo'); // Assuming you have a div with this id
  data.otherInfo.forEach(info => {
    const infoBlock = document.createElement('div');
    
    let detailsList = '';
    if (Array.isArray(info.info)) { // Check if info is an array to handle it properly
      detailsList = `<ul>${info.info.map(detail => `<li>${detail}</li>`).join('')}</ul>`;
    } else { // If it's not an array, just use it as a string
      detailsList = `<p>${info.info}</p>`;
    }
    
    infoBlock.innerHTML = `<h2>${info.period}</h2>
                           <h3>${info.name}</h3>
                           ${detailsList}`;
    container.appendChild(infoBlock);
  });
}




// New functions to change the photo on hover
function changePhoto(imageElement) {
    imageElement.src = 'IMG_0340_laugh.jpg'; // Path to the photo shown on hover
  }
  
  function revertPhoto(imageElement) {
    imageElement.src = 'IMG_0341_nlaugh.jpg'; // Original path to the photo
  }
