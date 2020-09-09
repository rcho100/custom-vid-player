const video = document.getElementById('video')
const playIcon = document.getElementById('play')
const stopIcon = document.getElementById('stop')
const progressBar = document.getElementById('progress')
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

function stopVideo() {
    video.currentTime = 0
    video.pause()
}

function updateProgress() {
    //Progress Bar
    progressBar.value = (video.currentTime / video.duration) * 100

    // Timestamp
    let minutes = Math.floor(video.currentTime / 60).toString()
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let seconds = Math.floor(video.currentTime % 60).toString()
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    timestamp.innerText = `${minutes}:${seconds}`
}

function setProgress() {
    video.currentTime = (progressBar.value  * video.duration) / 100
}

//Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

playIcon.addEventListener('click', toggleVideoStatus)

stopIcon.addEventListener('click', stopVideo)

progressBar.addEventListener('change', setProgress)