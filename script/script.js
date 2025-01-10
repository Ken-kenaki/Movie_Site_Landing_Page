const watchTrailer = document.querySelector('.play');
const trailer = document.querySelector('.trailer');
const close = document.querySelector('.close');
const video = document.querySelector('video');


watchTrailer.addEventListener('click', () => {
    trailer.classList.add('active');
    });

close.addEventListener('click', ()=>{
    trailer.classList.remove('active');
    video.pause();

})


const banner = document.querySelector('.banner');
const contents = document.querySelectorAll('.content');
console.log(contents);


function changeBg(bg, title) {
    banner.style.background = `url("./Assets/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    contents.forEach(content=>{
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
})
};



