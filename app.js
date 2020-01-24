const weatherApp = document.getElementById('weatherApp');
const formApp = document.getElementById('formApp');
const gitHubApp = document.getElementById('gitHubFinder');
const myGh = document.getElementById('my-gitHub');
const lIn = document.getElementById('my-linkedIn');


weatherApp.addEventListener('click', function(){
    // window.location.href = 'https://xenodochial-mestorf-8258d2.netlify.com/';
    window.open('https://xenodochial-mestorf-8258d2.netlify.com/', '_blank');
});

formApp.addEventListener('click', function(){
    window.open('https://practical-chandrasekhar-0649df.netlify.com', '_blank');
});

gitHubApp.addEventListener('click', function(){
    window.open('https://heuristic-lewin-426550.netlify.com/', '_blank');
});

myGh.addEventListener('click', function(){
    window.open('https://github.com/LukaMiljus', '_blank');
});

lIn.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/luka-miljus-web/', '_blank');
});

//Effects:

const aboutMe = document.querySelector('.txt');
const skills = document.getElementById('skills');
const contactMe = document.querySelector('.contact-txt');
const btt = document.querySelector('.backToTop');

document.addEventListener('scroll', fadeInText);
document.addEventListener('scroll',  contactFade);
document.addEventListener('scroll', fadeInSkills);
document.addEventListener('scroll', fadeInBtt);
btt.addEventListener('click', function(){
    window.location.href = '#top';
})

function fadeInText(){
    let scroll = scrollY;
    if(scroll > 150){
        aboutMe.style.transition = 'opacity 1.5s';
        aboutMe.style.opacity = '1';
    }else {
        aboutMe.style.opacity = '0';
    }
}

function fadeInSkills(){
    let scroll = scrollY;
    if(scroll > 300){
        skills.style.transition = 'opacity 1.5s';
        skills.style.opacity = '1';
    }else {
        skills.style.opacity = '0';
    }
}


function contactFade(){
    let scroll = scrollY;
    if(scroll > 1600){
        contactMe.style.transition = 'opacity 1.5s';
        contactMe.style.opacity = '1';
    }else {
        contactMe.style.opacity = '0';
    }
}

function fadeInBtt(){
    let scroll = scrollY;
    if(scroll > 400){
        btt.style.transition = 'opacity 1s';
        btt.style.opacity = '1';
    }else {
        btt.style.opacity = '0';
    }
}

