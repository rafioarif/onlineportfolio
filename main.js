const aboutContent = document.getElementById('about-content');
const educationContent = document.getElementById('education-content');
const skillContent = document.getElementById('skills-content');
const goalContent = document.getElementById('goals-content');
const passionContent = document.getElementById('passion-content');

function toggleAboutContent() {
    if (aboutContent.style.display === 'block') {
        aboutContent.style.display = 'none';
    } else {
        aboutContent.style.display = 'block';
    }

    if(educationContent.style.display==='block'||skillContent.style.display==='block' || goalContent.style.display==='block' || passionContent.style.display==='block')
        {
            educationContent.style.display='none';
            goalContent.style.display='none';
            passionContent.style.display='none';
            skillContent.style.display='none';
        }
}

function toggleEducationContent() {
    if (educationContent.style.display === 'block') {
        educationContent.style.display = 'none';
    } else {
        educationContent.style.display = 'block';
    }

    if(aboutContent.style.display==='block'||skillContent.style.display==='block' || goalContent.style.display==='block' || passionContent.style.display==='block')
        {
            aboutContent.style.display='none';
            goalContent.style.display='none';
            passionContent.style.display='none';
            skillContent.style.display='none';
        }
}

function toggleSkillContent() {
    if(skillContent.style.display === 'block')
    {
        skillContent.style.display = 'none';
    }
    else{
        skillContent.style.display ='block';
    }

    if(aboutContent.style.display==='block'||educationContent.style.display==='block' || goalContent.style.display==='block' || passionContent.style.display==='block')
        {
            aboutContent.style.display='none';
            goalContent.style.display='none';
            passionContent.style.display='none';
            educationContent.style.display='none';
        }
}

function toggleGoalContent() {
    if(goalContent.style.display === 'block')
    {
        goalContent.style.display = 'none';
    }
    else{
        goalContent.style.display = 'block';
    }

    if(aboutContent.style.display==='block'||skillContent.style.display==='block' || educationContent.style.display==='block' || passionContent.style.display==='block')
        {
            aboutContent.style.display='none';
            educationContent.style.display='none';
            passionContent.style.display='none';
            skillContent.style.display='none';
        }
}

function togglePassionContent(){
    if(passionContent.style.display === 'block'){
        passionContent.style.display = 'none';
    }
    else{
        passionContent.style.display = 'block';
    }

    if(aboutContent.style.display==='block'||skillContent.style.display==='block' || goalContent.style.display==='block' || educationContent.style.display==='block')
        {
            aboutContent.style.display='none';
            goalContent.style.display='none';
            educationContent.style.display='none';
            skillContent.style.display='none';
        }
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Hide dropdown when a menu item is clicked
document.querySelectorAll('.dropdown ul a').forEach(link => {
    link.addEventListener('click', () => {
        const dropdown = document.querySelector('.dropdown');
        dropdown.style.display = 'none';
    });
});