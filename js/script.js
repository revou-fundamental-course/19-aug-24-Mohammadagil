const userName = "Agil";

const welcomeMessageElement = document.getElementById('welcome-message');

welcomeMessageElement.textContent = `Hi ${userName}, Selamat Datang di Website`;

const form = document.getElementById('message-form');
const previewName = document.getElementById('preview-name');
const previewDob = document.getElementById('preview-dob');
const previewGender = document.getElementById('preview-gender');
const previewMessage = document.getElementById('preview-message');

form.addEventListener('input', () => {
    previewName.textContent = form.name.value;
    previewDob.textContent = form.dob.value;
    previewGender.textContent = form.gender.options[form.gender.selectedIndex].text;
    previewMessage.textContent = form.message.value;
});

const facilitationItems = document.querySelectorAll('.facilitation-item');

const initialBackgroundImage = document.querySelector('.jumbotron').style.backgroundImage;
const initialTitle = document.querySelector('.jumbotron-content h2').textContent;
const initialDescription = document.querySelector('.jumbotron-content p').textContent;
const profileLink = document.querySelector('.jumbotron-content a');

function resetJumbotron() {
    document.querySelector('.jumbotron').style.backgroundImage = initialBackgroundImage;
    document.querySelector('.jumbotron-content h2').textContent = initialTitle;
    document.querySelector('.jumbotron-content p').textContent = initialDescription;
    profileLink.style.display = 'inline-block'; 
}

facilitationItems.forEach(item => {
    item.addEventListener('click', function() {
        
        const imgSrc = this.querySelector('img').src;
        
        document.querySelector('.jumbotron').style.backgroundImage = `url(${imgSrc})`;
        document.querySelector('.jumbotron').style.backgroundSize = 'cover'; 
        document.querySelector('.jumbotron').style.backgroundPosition = 'center'; 

        const facilityTitle = this.querySelector('p').textContent; 
        document.querySelector('.jumbotron-content h2').textContent = facilityTitle; 
        
        let facilityDescription = '';
        if (facilityTitle === 'Professional Teacher') {
            facilityDescription = 'Our teachers are highly qualified professionals dedicated to providing the best education.';
        } else if (facilityTitle === 'Sport Field') {
            facilityDescription = 'Our sports facilities are top-notch, designed to help students excel in athletics.';
        } else if (facilityTitle === 'Classroom') {
            facilityDescription = 'Our classrooms are equipped with the latest technology to enhance learning experiences.';
        }

        document.querySelector('.jumbotron-content p').textContent = facilityDescription; 

        profileLink.style.display = 'none';
    });
});

document.querySelector('.logo-img').addEventListener('click', resetJumbotron);