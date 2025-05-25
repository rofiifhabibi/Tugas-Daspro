var lagu = [
    ['Heat Waves', 'Glass Animals', 3000, 7000, 'heatwaves.jpg', '50px', '50px', '9.7rem', 1, 'Glass Animals - Heat Waves [rfTgO9rpqck].mp3'],
    ['BIRDS OF A FEATHER', 'Billie Eilish', 4000, 8000, 'birdoffeathers.jpg', '50px', '50px', '3.8rem', 2, 'Billie Eilish - BIRDS OF A FEATHER [qGPet7oiWds].mp3'],
    ['Lily', 'Alan Walker', 2500, 5000, 'lily.jpg', '50px', '50px', '12.8rem', 3, 'Alan Walker, K-391 & Emelie Hollow - Lily (Lyrics) [ox4tmEV6-QU].mp3'],
    ['End of Beginning', 'Djo', 3500, 6500, 'endofbeginning.jpg', '50px', '50px', '5.8rem', 4, 'Djo - End Of Beginning (Official Audio) [xy3AcmW0lrQ].mp3'],
    ['snowfall', 'Øneheart', 2000, 4500, 'snowfall.jpg', '50px', '50px', '12rem', 5, 'øneheart x reidenshi - snowfall [LlN8MPS7KQs].mp3'],
    ['Viva La Vida', 'Coldplay', 4500, 9000, 'vivalavida.jpg', '50px', '50px', '9rem', 6, 'Coldplay - Viva La Vida (Official Video) [dvgZkm1xWPE].mp3'],
    ['Dandelions', 'Ruth B.', 2800, 5800, 'dandelions.jpg', '50px', '50px', '9.9rem', 7, 'Ruth B. - Dandelions (Audio) [W8a4sUabCUo].mp3'],
    ['Kings & Queens', 'Ava Max', 3200, 6200, 'king&queen.jpg', '50px', '50px', '6.5rem', 8, '[Vietsub + Lyrics] Kings & Queens - Ava Max [3a9fT3gWJlE].mp3'],
    ['On My Way', 'Alan Walker', 2700, 5500, 'onmyway.jpg', '50px', '50px', '10rem', 9, 'Alan Walker, Sabrina Carpenter & Farruko - On My Way [dhYOPzcsbGM].mp3'],
    ['Skyfall', 'Adele', 3800, 7500, 'skyfall.jpg', '50px', '50px', '13rem', 10, 'Adele - Skyfall (Lyrics) [sZrTJesvJeo].mp3'],
];

var elementheader = `
    <div id="containerheader">
        <div class="photo">
            <div class="imgheader">
                <img src="photo-collage.png (1).png" width="100%" height="100%" />
            </div>
        </div>
        <div class="titleheader">
            <a id="miniheader">Private Playlist</a>
            <a id="header">Lagu Favorit</a>
        </div>
        <img src="Animation - 1748118570265.gif" width="100px" height="100px" id="gif"/>
        <img src="spotify-removebg-preview.png" width="130px" height="130px" class="logospotify"/>
    </div>
`

var element = ` 
    
`;



var header = document.getElementById('containerheader')
header.innerHTML = elementheader

var konten = document.getElementById('laguscroll');

/*Mohon maaf pak jika indexnya tidak urut*/
for (let i = 0; i < lagu.length; i++) {
    element += `
                <div class="lagu">
                        <a>${lagu[i][8]}</a>
                    <img src="${lagu[i][4]}" alt="" srcset="" style="width: ${lagu[i][5]}; height: ${lagu[i][6]}"/>
                    <div class="titlelagu">
                        <h2 class="judul">${lagu[i][0]}</h2>
                        <i>${lagu[i][1]}</i>
                    </div>
                    <div class="bawah" style="margin-left:${lagu[i][7]};"c>
                        <div class="liply">
                            <div class="kanan">${lagu[i][2]}</div>
                            <div class="kiri">${lagu[i][3]}</div>
                        </div>
                        <audio controls id="audio-player">
                            <source src="${lagu[i][9]}" type="audio/mp3">
                        </audio>
                    </div>
                </div>
            `;
}



konten.innerHTML = element

var elementbanner = ``

var banner = document.getElementById('bannerkanan');

for (let e = 0; e < lagu.length; e++) {
    elementbanner += `
        <div class="coverlagu">
            <img src="${lagu[e][4]}"

        </div>`
}

banner.innerHTML = elementbanner

/*



*/
