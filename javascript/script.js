// Switcher between my Education section and my exprience section
let educationsButton = document.getElementById('educations-button');
let experiencesButton = document.getElementById('experiences-button');
let experiencesList = document.getElementById('experiences-list');
let educationsList = document.getElementById('educations-list');

experiencesButtonHandler = (e) => {
    if (educationsList.style.display !== 'none') {
        educationsList.style.display = 'none';
        experiencesList.style.display = 'flex';
        experiencesButton.className = 'experiences-button experiences-button-active';
        educationsButton.className = 'experiences-button';
    }
}

educationsButtonHandler = (e) => {
    if (experiencesList.style.display !== 'none') {
        experiencesList.style.display = 'none';
        educationsList.style.display = 'flex';
        educationsButton.className = 'experiences-button experiences-button-active';
        experiencesButton.className = 'experiences-button';
    }
}


experiencesButton.addEventListener('click', experiencesButtonHandler);
educationsButton.addEventListener('click', educationsButtonHandler);

// Menu Filter for My Projects Items
let ProjectButtonFilterAll = document.getElementById('project-filter-button-all');
let ProjectButtonFilterHtmlTemplate = document.getElementById('project-filter-button-html-template');
let ProjectButtonFilterJavaScript = document.getElementById('project-filter-button-javascript');
let ProjectButtonFilterDjango = document.getElementById('project-filter-button-django');
let ProjectButtonFilterReact = document.getElementById('project-filter-button-react');
let projectsItemContainers = [...document.getElementsByClassName('project-item')];

// Method to hide all the items
const hideAllProjectsItems = () => {
    projectsItemContainers.forEach(item => {
        item.classList.remove('project-item-active');
    })
}

// Method To Show Items by Giving ClassName to it
const showCategoryProjectsItems = (class_name) => {
    projectsItemContainers.forEach(item => {
        let itemClassList = [...item.classList];
        if (itemClassList.indexOf(class_name) !== -1) {
            itemClassList.push('project-item-active');
        }
        let newClassName = itemClassList.join(" ");
        item.className = newClassName;
    })
}


const onClickHandlerForFilterItemsButton = (class_name) => {
    hideAllProjectsItems();
    showCategoryProjectsItems(class_name);
    let previousActiveButton = document.querySelector('.project-filter-button-active');
    previousActiveButton.className = 'project-filter-button';
}

// Method to hide all the items
const ShowAllProjectsItems = () => {
    projectsItemContainers.forEach(item => {
        let itemClassList = [...item.classList];
        itemClassList.push('project-item-active');
        let newClassName = itemClassList.join(" ");
        item.className = newClassName;
    })
}

// Button Handlers 

// Filter All Project Items Handler
ProjectButtonFilterAll.addEventListener('click', () => {
    hideAllProjectsItems();
    ShowAllProjectsItems();
    let previousActiveButton = document.querySelector('.project-filter-button-active');
    previousActiveButton.className = 'project-filter-button';
    ProjectButtonFilterAll.className = 'project-filter-button project-filter-button-active';
})

// Method For Html Template Filter button
ProjectButtonFilterHtmlTemplate.addEventListener('click', () => {
    onClickHandlerForFilterItemsButton('project-item-html-template-category')
    ProjectButtonFilterHtmlTemplate.className = 'project-filter-button project-filter-button-active';
})

// Method For JavaSccript Filter button
ProjectButtonFilterJavaScript.addEventListener('click', () => {
    onClickHandlerForFilterItemsButton('project-item-javascript-category')
    ProjectButtonFilterJavaScript.className = 'project-filter-button project-filter-button-active';
})

// django filter items
ProjectButtonFilterDjango.addEventListener('click', ()=>{
    onClickHandlerForFilterItemsButton('project-item-django-category')
    ProjectButtonFilterDjango.className = 'project-filter-button project-filter-button-active';
})

// React Filter Items
ProjectButtonFilterReact.addEventListener('click', ()=>{
    onClickHandlerForFilterItemsButton('project-item-react-category')
    ProjectButtonFilterReact.className = 'project-filter-button project-filter-button-active';
})