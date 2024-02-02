$('.calculator_content').tilt({
  glare: true,
  maxGlare: .5
})


let calculation = localStorage.getItem('calculation') || '';

function updatecalculation(number){
  calculation += number;
  document.querySelector('.input_display').innerText = calculation;
  return calculation
}

function goBack(){
  if (typeof calculation === 'string' && calculation.length > 0) {

    const lastChar = calculation.slice(-1);
    if (lastChar === ' ' || lastChar === '') {
      calculation = calculation.slice(0, -3); 
    } else {
      calculation = calculation.slice(0, -1); 
    }
    document.querySelector('.input_display').innerText = calculation;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve data from localStorage
  const savedCalculation = localStorage.getItem('calculation');

  // Update the display if there's saved data
  if (savedCalculation) {
    document.querySelector('.input_display').innerText = savedCalculation;
  }
});

var tl = gsap.timeline()
tl.from(".loader span",{
  y: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.1,

})
tl.from(".loader span",{
  y: 30,
  duration: 1,
  opacity: 1,
  stagger: 0.1,

})
tl.to(".loader",{
  opacity: 0,

})
tl.to(".loader",{
  display: "none",

})
tl.from(".main .moving_shape, .copy_right, .calculator_content",{
  y: 20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
})


var cursor = document.querySelector(".cursor")

document.addEventListener('mousemove', function(dets){
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
  })

})
document.addEventListener('mouseenter', function(dets){
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    opacity: 1,
    scale: 1,
  })

})
document.addEventListener('mouseleave', function(dets){
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    opacity: 0,
    scale: 0,
  })

})

