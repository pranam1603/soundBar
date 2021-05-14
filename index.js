const sounds = ['amongUs', 'brownMunde', 'ipl', 'ohNo', 'flute', 'rcb']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.innerText = sound
    btn.classList.add('btn')
    btn.addEventListener('click', () => {
        stopPreviousTone()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)

})

function stopPreviousTone() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}