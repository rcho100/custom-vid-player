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

function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa2x"></i>'
    }
}

//Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)

play.addEventListener('click', toggleVideoStatus)
