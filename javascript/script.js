let educationsButton = document.getElementById('educations-button');
let experiencesButton = document.getElementById('experiences-button');
let experiencesList = document.getElementById('experiences-list');
let educationsList = document.getElementById('educations-list');

experiencesButtonHandler = (e) => {    
    if (educationsList.style.display !== 'none'){
        educationsList.style.display = 'none';
        experiencesList.style.display = 'flex';
        experiencesButton.className = 'experiences-button experiences-button-active';
        educationsButton.className = 'experiences-button';
    }
}

educationsButtonHandler = (e) => {    
    if (experiencesList.style.display !== 'none'){
        experiencesList.style.display = 'none';
        educationsList.style.display = 'flex';
        educationsButton.className = 'experiences-button experiences-button-active';
        experiencesButton.className = 'experiences-button';
    }
}


experiencesButton.addEventListener('click', experiencesButtonHandler);
educationsButton.addEventListener('click', educationsButtonHandler);
