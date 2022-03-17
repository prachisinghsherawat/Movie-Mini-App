

 var images = [
    ["https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/26/Pictures/_c291b404-ba22-11e7-8fe3-8a4365deb777.jpg"],
    ["https://images004-a.erosnow.com/movie/5/1005075/img625352/6836933/1005075_6836933.jpg"],
    ["https://wallpapercave.com/wp/wp8807385.jpg"],
    ["https://im.rediff.com/money/2020/dec/07akshay-kumar1.jpg"],
    ["https://www.yashrajfilms.com/images/default-source/Movies/K3G/kabhi-khushi-kabhie-gham_767x430.jpg?sfvrsn=0"],
    ["https://www.filmyfenil.com/wp-content/uploads/2019/05/Student-Of-The-Year-2-wallpaper.jpg"],
    ["https://www.meinstyn.com/wp-content/uploads/2020/04/Baaghi-2-Movie-Dialogues-Quotes-HD-Poster-Tiger-Shroff-Disha-Patani-678x381.jpg"]
];

let id;
var imgdiv = document.createElement("div");
imgdiv.setAttribute("class", "slider")
document.querySelector(".container").append(imgdiv);


var img = document.createElement("img");

imgdiv.append(img);
let i = 0;
setInterval(function () {
    if (i == images.length) {
        i = 0;
    }

    img.src = images[i];
    i++;
}, 2000);
// console.log(images[0]);




var moviesArr = [

    {
        name: "Tamasha",
        date: "27/09/2015",
        poster: "https://i.pinimg.com/originals/3c/b2/b6/3cb2b66baf0ffd337d2701bb03b347fa.jpg",
        rating: "3.3"
    },
    {
        name: "Yeh Jawaani Hai Deewani",
        date: "31/05/2013",
        poster: "https://m.media-amazon.com/images/I/61zpep-7pTL.jpg",
        rating: "5.0"
    },
    {
        name: "Kabhie Khushi Kabhie Gham",
        date: "14/12/2001",
        poster: "https://www.yashrajfilms.com/images/default-source/Movies/K3G/kabhi-khushi-kabhie-gham_767x430.jpg?sfvrsn=0",
        rating: "4.8"
    },
    {
        name: "Jab We Met",
        date: "26/10/2007",
        poster: "https://i.ytimg.com/vi/IgmKSiSTszk/maxresdefault.jpg",
        rating: "5.0"
    },
    {
        name: "Student Of The Year 2",
        date: "27/01/2019",
        poster: "https://www.filmyfenil.com/wp-content/uploads/2019/05/Student-Of-The-Year-2-wallpaper.jpg",
        rating: "2.8"
    },
    {
        name: "Bajirao Mastani",
        date: "27/02/2015",
        poster: "https://webneel.com/daily/sites/default/files/images/daily/08-2018/2-india-movie-poster-design-hindi-bjirao-mastani.jpg",
        rating: "4.0"
    },
    {
        name: "2 States",
        date: "26/01/2016",
        poster: "https://wallpapercave.com/wp/wp8807385.jpg",
        rating: "3.9"
    },
    {
        name: "baaghi 2",
        date: "27/01/2022",
        poster: "https://www.meinstyn.com/wp-content/uploads/2020/04/Baaghi-2-Movie-Dialogues-Quotes-HD-Poster-Tiger-Shroff-Disha-Patani-678x381.jpg",
        rating: "2.1"
    },
    {
        name: "Sooryavanshi",
        date: "5/11/2021",
        poster: "https://im.rediff.com/money/2020/dec/07akshay-kumar1.jpg",
        rating: "4.2"
    },

];

localStorage.setItem("moviesDB", JSON.stringify(moviesArr));

var getMoviData = JSON.parse(localStorage.getItem("moviesDB")) || [];
displayMovies(getMoviData);

function displayMovies(getMoviData) {
    getMoviData.map(function (event) {

        var moviDiv = document.createElement("div");
        moviDiv.setAttribute("class", "moviDiv")
        var descDiv = document.createElement("div");
        descDiv.setAttribute("class", "descDiv");
        var img = document.createElement("img");
        var name = document.createElement("h3");
        var releaseDate = document.createElement("h4");
        var rating = document.createElement("h4");

        img.setAttribute("src", event.poster);
        name.textContent = "Name :  " + event.name;
        releaseDate.textContent = " Date : " + event.date;
        rating.textContent = "Rating : " + event.rating;

        descDiv.append(name, releaseDate, rating)

        moviDiv.append(img, descDiv);

        document.querySelector(".moviArea").append(moviDiv);


    });
}

// Filter and short Part Start here....


function lowToHigh() {
    document.querySelector(".moviArea").innerHTML = "";
    getMoviData.sort(function (a, b) {
        return Number(a.rating) - Number(b.rating);
    })
    displayMovies(getMoviData);
}
function highToLow() {
    document.querySelector(".moviArea").innerHTML = "";
    getMoviData.sort(function (a, b) {
        return Number(b.rating) - Number(a.rating);
    })
    displayMovies(getMoviData);
}

function filterByChar() {
    document.querySelector(".moviArea").innerHTML = "";
    getMoviData.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
    displayMovies(getMoviData);
}




// Filter and short Part End here....
