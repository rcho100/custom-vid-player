const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// Play & pause (toggle) video
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}


//Event listeners
video.addEventListener('click', toggleVideoStatus)

