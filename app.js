const data = [{
        artist: 'The Lumineers',
        released: 2016,
        album: 'Cleopatra',
        label: 'Decca (UMO)',
        genres: 'Indie y alternative',
        image: 'lumineers.jpg'
    },
    {
        artist: 'Of Monsters And Men',
        released: 2012,
        album: 'My Head Is An Animal',
        label: 'Universal Records',
        genres: 'Pop rock',
        image: 'monsters.jpg'
    },
    {
        artist: 'Florence + The Machine',
        released: 2012,
        album: 'Lungs',
        label: 'Universal Music Group',
        genres: 'Indie & alternative',
        image: 'florence.jpg'
    },
    {
        artist: 'Nirvana',
        released: 2013,
        album: 'Nevermind',
        label: 'Geffen / SubPop',
        genres: 'Rock',
        image: 'nirvana.jpg'
    },
    {
        artist: 'Mumford & Sons ',
        released: 2012,
        album: 'Babel',
        label: 'Glassnote',
        genres: 'Folk Rock',
        image: 'mumford.jpg'
    },
    {
        artist: 'The Beatles',
        released: 2012,
        album: 'The Beatles Stereo Vinyl Box Set',
        label: 'Capitol',
        genres: 'Rock',
        image: 'beatles.jpg'
    }
];

const profiles = profileIterator(data);
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
       <ul class="list-group">
       <li class="list-group-item">Artist: ${currentProfile.artist}</li>
       <li class="list-group-item">Original Release Date:  ${currentProfile.released}</li>
       <li class="list-group-item">Label:  ${currentProfile.label}</li>
       <li class="list-group-item">Album: ${currentProfile.album}</li>
       <li class="list-group-item">Genres: ${currentProfile.genres}</li>
       </ul>
    `;

        document.getElementById('imageDisplay').innerHTML = `<img src="img/${currentProfile.image}" width="100%" height="100%" alt="">`;
    } else {
        window.location.reload();
    }
}
//   Profile Iterator

function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            };
        }
    };
}