button = document.querySelectorAll("button");

button[0].addEventListener('mouseover', function(){
    button[1].style.opacity = 0.65;
});

button[0].addEventListener('mouseout', function(){
    button[1].style.opacity = "";
});

button[1].addEventListener('mouseover', function(){
    button[0].style.opacity = 0.65;
});

button[1].addEventListener('mouseout', function(){
    button[0].style.opacity = "";
});