// img

let imgs = [...document.querySelectorAll('.slider__img')];
let imgsBox = document.getElementById('slider__img-box')
let dots = [...document.querySelectorAll('.slider__button-pt')];
let tabs = [...document.querySelectorAll('.slider__tab')];

// button function

function go(dir) {
    let indexImg = imgs.indexOf(document.querySelector('.slider__img_active'));
    goTo((indexImg + dir + imgs.length) % imgs.length);
};

function goTo(num) {
    let indexImg = imgs.indexOf(document.querySelector('.slider__img_active'));
    let indexDot = dots.indexOf(document.querySelector('.slider__button-pt_active'));
    let indexTab = tabs.indexOf(document.querySelector('.slider__tab_active'));
    imgs[indexImg].classList.remove('slider__img_active');
    dots[indexDot].classList.remove('slider__button-pt_active');
    tabs[indexTab].classList.remove('slider__tab_active');
    imgs[num].classList.add('slider__img_active');
    dots[num].classList.add('slider__button-pt_active');
    tabs[num].classList.add('slider__tab_active');

    let imgWidth = document.querySelector('.slider__img_active').offsetWidth;
    let translateX = num * imgWidth;
    imgsBox.style.translate = `${-translateX}px`;

    changeText(num)
}

// text

function changeText(num) {
    let text = [...document.querySelectorAll('.cell__text')];
    text[0].textContent = textBase[num].city;
    text[1].textContent = textBase[num].area;
    text[2].textContent = textBase[num].time;
    text[3].textContent = textBase[num].cost;
}

const text1 = {
    city: "Rostov-on-Don LCD admiral",
    area: "81m2",
    time: "3.5 month",
    cost: "Upon request"
}
const text2 = {
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
}
const text3 = {
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
}

const textBase = [text1, text2, text3];
