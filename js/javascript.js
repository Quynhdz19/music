var datalistSong = [
    {
        id: 1,
        nam_song: '505 - Arctic Monkeys',
        path: '../music/505 - Arctic Monkeys.mp3',
        path_img: '../img/505.jpg'
    },
    {
        id: 2,
        nam_song: 'Apocalypse - Cigarettes After Sex',
        path: '../music/Apocalypse - Cigarettes After Sex',
        path_img: '../img/Apocalypse.jpg'
    },
    {
        id: 3,
        nam_song: 'Freaks - Surf Curse',
        path: '../music/Freaks - Surf Curse.mp3',
        path_img: '../img/Freaks.jpg'
    },
    {
        id: 4,
        nam_song: 'Mr Loverman - Ricky Montgomery',
        path: '../music/Mr Loverman - Ricky Montgomery.mp3',
        path_img: '../img/mr_loverman.jpg'
    },
    {
        id: 5,
        nam_song: 'My Love Mine All Mine - Mitski',
        path: '../music/My Love Mine All Mine - Mitski.mp3',
        path_img: '../img/my_love_my_all_mine.jpg'
    },
    {
        id: 6,
        nam_song: 'See You Again - Tyler The Creator',
        path: '../music/See You Again - Tyler The Creator.mp3',
        path_img: '../img/see_you_again.jpg'
    },

];


var listSong = document.querySelector('#list_song');

datalistSong.forEach(item => {
    listSong.innerHTML +=
        `<div id="conponent">
        <div id="avatar_song">
            <img src=${item.path_img}/>
        </div>
        <div>
            <h3>${item.nam_song}</h3>
        </div>
        <i class="fas fa-ellipsis-v"></i>
    </div>`
});

var togglePlayButton = document.querySelector('.play-button');
var currentAvatar = document.querySelector('#avatar_current_music img');


var toggle;

togglePlayButton.addEventListener('click', function () {

    // cho nhac chay
    if (!toggle) {
        togglePlayButton.classList.remove('fa-play-circle');
        togglePlayButton.classList.add('fa-pause-circle');
        toggle = true;
        currentAvatar.classList.add('rounder');
    }
    // cho nhac dung
    else {
        currentAvatar.classList.remove('rounder');
        togglePlayButton.classList.add('fa-play-circle');
        togglePlayButton.classList.remove('fa-pause-circle');
        toggle = false
    }
})


// <i className="fas fa-pause"></i>