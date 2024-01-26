//Initialize the variables
let songIndex=0;
let audioElement=new Audio("1.mp3");
let masterplay=document.getElementById('masterplay');
let myprogessbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');

let songs=[
    {songName:"Amsterdam",filePath:"C:/Users/ishgu/Downloads/spotify/1.mp3" , coverPath:"C:\Users\ishgu\Downloads\spotify\cover1.jpg"},
    {songName:"All eyes",filePath:"C:/Users/ishgu/Downloads/spotify/2.mp3" , coverPath:"C:\Users\ishgu\Downloads\spotify\cover2.jpg"},
    {songName:"Ready Aim fire",filePath:"C:/Users/ishgu/Downloads/spotify/3.mp3",coverPath:"C:\Users\ishgu\Downloads\spotify\cover3.jpg"},
    {songName:"Emma",filePath:"C:/Users/ishgu/Downloads/spotify/4.mp3",coverPath:"C:\Users\ishgu\Downloads\spotify\cover4.jpg"},
    {songName:"Radioactive",filePath:"C:/Users/ishgu/Downloads/spotify/5.mp3",coverPath:"C:\Users\ishgu\Downloads\spotify\cover5.jpg"},
    {songName:"Gold",filePath:"C:/Users/ishgu/Downloads/spotify/6.mp3",coverPath:"C:\Users\ishgu\Downloads\spotify\cover6.jpg"},
    {songName:"Who we are",filePath:"C:/Users/ishgu/Downloads/spotify/7.mp3",coverPath:"C:\Users\ishgu\Downloads\spotify\cover7.jpg"}
]


// audioElement.play();
//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogessbar.value=progress;
})

myprogessbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogessbar.value* audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element)=> {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })    

}
 
Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element)=> {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        mastersongname.innerText=songs[songIndex].songName;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${songIndex+1}.mp3`;   
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    })
    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})

