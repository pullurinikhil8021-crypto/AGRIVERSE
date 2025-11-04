const videoplayer = document.querySelector('.video_player')
const video = document.querySelector('.video')
const playbutton = videoplayer.querySelector('.play_button')
const volume = videoplayer.querySelector('.volume')
const currentTimeElement = videoplayer.querySelector('.current')
const durationTimeElement = videoplayer.querySelector('.duration')
const progress = videoplayer.querySelector('.video_progress')
const progressBar = videoplayer.querySelector('.video_progress_filled')

//play and pause button

playbutton.addEventListener('click',(e) =>{
    if(video.paused){
        video.play()
        e.target.texContent = '||'
    }else{
        video.pause()
        e.target.texContent = '▶'

    }
})

//volume button

volume.addEventListener('mousemove', (e) =>{
    video.volume = e.target.value
})

//duration 
const currentTime = () =>{
    let currentMinutes = Math.floor(video.currentTime / 60)
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video.duration / 60)
    let durationSeconds = Math.floor(video.duration)

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds: currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`

}

video.addEventListener('timeupdate', currentTime)

//progrssBar

video.addEventListener('timeupdate',() =>{
    const percentage = (video.currentTime / video.duration)*100
    progressBar.style.width = `${percentage}%`;
})

//change progress bar on click

progress.addEventListener('click', (e) =>{
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = progressTime
})