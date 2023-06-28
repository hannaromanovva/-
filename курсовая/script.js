function imgSlider(anything){
    document.querySelector('.img').src = anything;

};

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
};


 
 let lastScrollTop = 0;
 bar = document.getElementById("bar");
 window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset ||
    document.documentElement.scrollTop;
    if(scrollTop>lastScrollTop){

        bar.classList.add('icon');

    }else{
        bar.classList.remove('icon');
    }
    lastScrollTop = scrollTop;

    
 });

//4
 let delay_popup = 3000;
 setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);
//асинхронный метод объекта window,установка таймера для выполнения действия


 //7
 save.addEventListener('click', () => {
      if (!(/[0-9]/.test(email.value))) {
        alert('email должен содержать хотя бы одну цифру!');
    } else if (!(/[a-z]/.test(email.value))) {
            alert('email должен содержать хотя бы одну букву английского алфавита в нижнем регистре!');
    } else if (!(/[@]/.test(email.value))) {
        alert('email должен содержать спецсимвол @ !');
    } else if ((/[^@a-z-0-9]/.test(email.value))) {
        alert('email содержит недопустимый символ! Разрешены английские буквы в нижнем регистpe, цифры и спецсимвол @');
    } else {
        localStorage.clear();
        localStorage.setItem(email.value);
        alert('Успешно!')
    }
    
});

 

