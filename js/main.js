
let articals = [];
async function movies(category = "now_playing") {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`);
    let finalResult = await response.json();
    articals = finalResult.results;
    display();
}
async function trendingMovies() {
    let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let result = await res.json();
    articals = result.results;
    console.log(articals);
    display();
};

let trendUrl = document.querySelector(".item4");
trendUrl.addEventListener("click", function (e) {
    trendingMovies(e.target.innerHTML);
});
function display() {
    let cartoona = ``;
    for (let i = 0; i < articals.length; i++) {
        cartoona += ` <div class="col-md-6 col-lg-4 my-3 myM shadow">
        <div class="movies shadow rounded position-relative">
            <div class="post">
                <img src="https://image.tmdb.org/t/p/w500${articals[i].poster_path}"
                    class="img-fluid rounded">
                <div class="layer d-flex align-items-center justify-content-center">
                    <div class="text-center">
                        <h3 class = "fs-2">${articals[i].title}</h3>
                        <p>${articals[i].overview}</p>
                        <p>${articals[i].vote_average}</p>
                        <p>${articals[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById("moviesData").innerHTML = cartoona;
}
movies("now_playing");
let lis = document.querySelectorAll("ul li");
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function (e) {
        movies(e.target.innerHTML);
    });
};
$(".header-nav .menu-toggle").click(function () {

    let menuTab = $(".nav-tab-menu").outerWidth();
    if ($("#slide .nav-tab-menu").css("left") == "0px") {
        $("#slide .nav-tab-menu").animate({ left: `-${menuTab}` }, 500);
        $(".header-nav").animate({ marginLeft: `-250px` });
        $(".item1").animate({ opacity: "1", paddingTop: "40px" }, 1000);
        $(".item2").animate({ opacity: "1", paddingTop: "40px" }, 1200);
        $(".item3").animate({ opacity: "1", paddingTop: "40px" }, 1300);
        $(".item4").animate({ opacity: "1", paddingTop: "40px" }, 1400);
        $(".item5").animate({ opacity: "1", paddingTop: "40px" }, 1500);
        $(".item6").animate({ opacity: "1", paddingTop: "40px" }, 1600);
        $(".menu-toggle i").addClass("fa-align-justify").removeClass("fa-times")
    }
    else {
        $("#slide .nav-tab-menu").animate({ left: `0px` }, 500);
        $(".header-nav").animate({ marginLeft: `0px` }, 500);
        $(".item1").animate({ opacity: "1", paddingTop: "0px" }, 1000);
        $(".item2").animate({ opacity: "1", paddingTop: "0px" }, 1200);
        $(".item3").animate({ opacity: "1", paddingTop: "0px" }, 1300);
        $(".item4").animate({ opacity: "1", paddingTop: "0px" }, 1400);
        $(".item5").animate({ opacity: "1", paddingTop: "0px" }, 1500);
        $(".item6").animate({ opacity: "1", paddingTop: "0px" }, 1600);
        $(".menu-toggle i").addClass("fa-times").removeClass("fa-align-justify")
    }
});
$(document).ready(function () {
    let navTabMenu = $(".nav-tab-menu").outerWidth();
    $(".nav-tab-menu").animate({ left: `-${navTabMenu}` }, 0);
    $(".header-nav").animate({ marginLeft: `-250px` }, 0);
    $(".menu-toggle i").addClass("fa-align-justify").removeClass("fa-times");
    $('#loading-screen .spinner').fadeOut(2000, () => {
        $('#loading-screen .spinner').parent().fadeOut(2000, () => {
            $("#loading-screen").remove();
            $("body").css("overflow-y", "auto");
        })
    });
});

async function search(term) {
    let searchRes = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${term}`);
    let finalSearch = await searchRes.json();
    articals = finalSearch.results;
    let searchDisplay = ``;
    for (let i = 0; i < articals.length; i++) {
        if (articals[i].title.toLowerCase().includes(term.toLowerCase()) == true) {
            searchDisplay += ` <div class="col-md-6 col-lg-4 my-3 myM shadow">
                     <div class="movies shadow rounded position-relative">
                         <div class="post">
                            <img src="${articals[i].poster_path ? 'https://image.tmdb.org/t/p/w500' + articals[i].poster_path : '../images/noposter.standard_display.png'}"
                                class="img-fluid rounded w-100 h-100">
                            <div class="layer d-flex align-items-center justify-content-center">
                                <div class="text-center">
                                    <h3 class = "fs-2">${articals[i].title}</h3>
                               <p>${articals[i].overview}</p>
                                    <p>${articals[i].vote_average}</p>
                                   <p>${articals[i].release_date}</p>
                               </div>
                            </div>
                        </div>
                    </div>
                 </div>`
        }
    }
    document.getElementById('moviesData').innerHTML = searchDisplay;
}

let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let userAge = document.getElementById("age");
let userPassward = document.getElementById("passward");
let userRepassward = document.getElementById("repassward");

function userNameValidation() {
    let regx = /^[A-Z]\w/;
    if (regx.test(userName.value) == true) {
        $("#nameAlert").css("display", "none");
    }
    else {
        $("#nameAlert").css("display", "block");
    }
}
userName.addEventListener("keyup", userNameValidation);

function userEmailValidation() {
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regx.test(userEmail.value) == true) {
        $("#EmailAlert").css("display", "none");
    }
    else {
        $("#EmailAlert").css("display", "block");
    }
}
userEmail.addEventListener("keyup", userEmailValidation);

function userPhoneValidation() {
    let regx = /^(002)?01[0125][0-9]{8}$/;
    if (regx.test(userPhone.value) == true) {
        $("#phoneAlert").css("display", "none");
    }
    else {
        $("#phoneAlert").css("display", "block");
    }
}
userPhone.addEventListener("keyup", userPhoneValidation);

function userAgeValidation() {
    let regx = /^([1-8][0-9]|80)$/;
    if (regx.test(userAge.value) == true) {
        $("#ageAlert").css("display", "none");
    }
    else {
        $("#ageAlert").css("display", "block");
    }
}
userAge.addEventListener("keyup", userAgeValidation);

function userPasswardValidation() {
    let regx = /^[a-z]{8}[0-9]{1}$/;
    if (regx.test(userPassward.value) == true) {
        $("#passwordAlert").css("display", "none");
    }
    else {
        $("#passwordAlert").css("display", "block");
    }
}
userPassward.addEventListener("keyup", userPasswardValidation);

function userRepasswardValidation() {
    let regx = /^[a-z]{8}[0-9]{1}$/;
    if (regx.test(userRepassward.value) == true) {
        $("#rePasswardAlert").css("display", "none");
    }
    else {
        $("#rePasswardAlert").css("display", "block");
    }
}
userRepassward.addEventListener("keyup", userRepasswardValidation);


document.getElementById("contacts").addEventListener("keypress", function () {
    if (userName.value == "" && userEmail.value == "" && userPhone.value == "" && userAge.value == "" && userPassward.value == "" && userRepassward.value == "") {
        document.getElementById("submitBtn").disabled = true;
    }
    else {
        document.getElementById("submitBtn").disabled = false;
    }

});