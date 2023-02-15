const button = document.querySelector('.button')
const bpmCount = document.querySelector('.bpmDiv h1')
const bpmRange = document.querySelector("input") 
const minusButton = document.getElementById('minusButton')
const plusButton = document.getElementById('plusButton')
const root = document.querySelector(':root')
let value = 100
bpmRange.value = value
let active = false
const audio = new Audio('sound\\metronome.mp3');
let metronome;

document.addEventListener('keydown',(e)=>{
  e.preventDefault()
  if (e.code === 'Space'){
    if (!active)active = true
  else active = false
  button.classList.toggle('active',active)
  
  if(active){
    Metronome(bpmRange.value)
  }
  else{
    clearInterval(metronome)
    button.style.setProperty('animation', `none`)
  }
  }
})

bpmRange.oninput = (e)=>{
  bpmCount.innerHTML = e.target.value
  value = Number(e.target.value)
  if(active){
    clearInterval(metronome)
    Metronome(value)
  }
  else{
    clearInterval(metronome)
  }
  
  return value
}

minusButton.onclick = ()=>{
  if (bpmCount.innerHTML > 40){
    value -= 1;
    bpmRange.value = value
    if(active){
      clearInterval(metronome)
      Metronome(value)
    }
    else{
      clearInterval(metronome)
    }
  }
  else{
    value = 40;
  }
  bpmCount.innerHTML =  value;
}

plusButton.onclick = ()=>{
  if (bpmCount.innerHTML < 218){
    value += 1;
    bpmRange.value = value
    if(active){
      clearInterval(metronome)
      Metronome(value)
    }
    else{
      clearInterval(metronome)
    }
  }
  else{
    value = 218;
  }
  bpmCount.innerHTML =  value;
}

bpmCount.innerHTML =  value;

function Metronome(bpm){
  metronome = setInterval(()=>{
    audio.play()
    button.style.setProperty('animation', `buttonAnimation ${60 / bpm}s linear 0s infinite alternate`)
  },60000 / bpm)
}

button.onclick = ()=>{
  if(!active){
    active = true
  }
  else{
    active = false
  }
  button.classList.toggle('active',active)
  if(active){
    Metronome(bpmRange.value)
  }
  else{
    clearInterval(metronome)
    button.style.setProperty('animation', `none`)
  }

};
