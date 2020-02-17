let targetsExample01 = anime({
    targets: 'targets .box',
    translateX: 250,
    autoplay: false
})

let targetsPlayBtn = document.querySelector('.targets button')

targetsPlayBtn.onclick = targetsExample01.play

let targetsPlayBtn2 = document.querySelector('#bb')


let targetsExample02 = anime({
    targets: '.triangle',
    translateX: 150,
    autoplay: false
})

targetsPlayBtn2.onclick = targetsExample02.play

let propsAnimation01 = anime({
    targets: '.props .box',
    translateX: 400,
    rotate: 180,
    backgroundColor: '#fff',
    borderRadius: ['0%',  '50%'],
    autoplay: false
})

let propsBtn01 = document.querySelector('propsBtn01')
propsBtn01.onclick = propsAnimation01.play
