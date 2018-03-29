let drumKit = document.querySelectorAll("kbd");

// listen for events and exicute action
window.addEventListener('keydown', function(e){
    //bind the audio from html to a variable so that we can play it
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");

    // stop the function from running
    if(!audio) return;
    // this will rewing sound to the start so that we can hit the sound multiple times
    audio.currentTime = 0;
    audio.play();
});

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

