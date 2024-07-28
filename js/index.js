//overlay
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.body.style.overflowY = "hidden"; // スクロールを禁止する
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.body.style.overflowY = "auto"; // スクロールを許可する
}

//合額実績アニメーション
window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.achievement-list div');
    var windowHeight = window.innerHeight;

    elements.forEach(function (element) {
        var position = element.getBoundingClientRect().top;
        // 表示領域に入ったら.activeクラスを追加
        if (position < windowHeight) {
            element.classList.add('active');
        }
    });
});

//合額実績アニメーション
window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.achievement-container div');
    var windowHeight = window.innerHeight;

    elements.forEach(function (element) {
        var position = element.getBoundingClientRect().top;
        // 表示領域に入ったら.activeクラスを追加
        if (position < windowHeight) {
            element.classList.add('active');
        }
    });
});

//パンセの特徴の出現アニメーション
window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.five-features li');
    var windowHeight = window.innerHeight;

    elements.forEach(function (element) {
        var position = element.getBoundingClientRect().top;
        // 表示領域に入ったら.activeクラスを追加
        if (position < windowHeight) {
            element.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var animateElements = document.querySelectorAll('.animate-on-scroll');

    function checkScroll() {
        animateElements.forEach(function (element) {
            var position = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;

            if (position < windowHeight * 0.75) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // 初回のチェック
});