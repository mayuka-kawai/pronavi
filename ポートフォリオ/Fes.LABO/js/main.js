$(function () {
    // SP用のメニューバーをクリックした時
    $('.sp-menu').on('click', function() {
        $('header').toggleClass('open');
    });

    $('#mask').on('click', function() {
        $('header').removeClass('open');
    });

    $('nav a').on('click', function() {
        $('header').removeClass('open');
    });

    // スクロール
    $('a[href^="#"]').on('click', function() {
        let href = $(this).attr('href');
        let target = $(href == '#' || href == '' ? 'html' : href);
        let position = target.offset().top;

        $('html, body').animate({scrollTop: position}, 1000, 'swing');
    });

    // スクロールした時にヘッダーの色が変わる
    $(window).on('load scroll', function() {
        if ($(window).scrollTop() > $('#mainvisual').height()) {
            if ($('header').hasClass('open')) {
                $('.header-top').removeClass('black');
                $('.sns').removeClass('bg-b');
            } else {
                $('.header-top').addClass('black');
                $('.sns').addClass('bg-b');
            }
        } else {
            $('.header-top').removeClass('black');
            $('.sns').removeClass('bg-b');
        }
    });
    
    // スクロールした時のイベント一覧
    $(window).scroll(function() {
        $('.region').each(function() {
            var scroll = $(window).scrollTop();
            var target = $(this).offset().top;
            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                $(this).addClass('slide-left');
            }
        });
    });
    
    $(window).scroll(function() {
        $('.monthly').each(function() {
            var scroll = $(window).scrollTop();
            var target = $(this).offset().top;
            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                $(this).addClass('slide-right');
            }
        });
    });

    // SLICK
    $(".slide-items").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '50px',
        dots: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Q&Aのアコーディオン
    $('.question').on('click', function() {
        $('.answer').slideUp(500);
        var findItem = $(this).next('.answer');
        if($(this).hasClass('close')) {
            $(this).removeClass('close');
        } else {
            $('.close').removeClass('close');
            $(this).addClass('close');
            $(findItem).slideDown(500);
        }
    });

    // 一覧ページのフィルター
    function multi_filter (h, t, s, r = "") {
        let hidden = h;
        let targets = document.querySelectorAll(t);
        let selects = document.querySelectorAll(s);
        let result = document.querySelectorAll(r);
        let result_msg = "";

        if (selects) {
            for (let i of selects) {
                i.addEventListener("change", () => {
                    let hidden_num = 0;
                    
                    for (let ii of targets) {
                        ii.classList.remove(hidden);

                        for (let iii of selects) {
                            let value = iii.value;
                            let name = iii.getAttribute('name');
                            let item_data = ii.getAttribute('data-' + name);

                            if (value && value !== 'all' && value !== item_data && !ii.classList.contains(hidden)) {
                                ii.classList.add(hidden);
                                hidden_num++;
                            }
                        }
                    }

                    if (result) {
                        if (hidden_num === targets.length) {
                            result_msg = "No such thing..";
                        } else {
                            let result_num = targets.length - hidden_num;
                            result_msg = result_num + " results";
                        }
                        result.innerText = result_msg;
                    }
                });
            }
        }
    }

    multi_filter("d-none", ".js-filter-item", ".js-filter", ".js-filter-msg");




    const areas = [
        '北海道',
        '東北地方',
        '関東地方',
        '中部地方',
        '近畿地方',
        '中国地方',
        '四国地方',
        '九州地方'
    ];

    const prefectures = [
        {area: '北海道', name: '北海道'},
        {area: '東北地方', name: '青森県'},
        {area: '東北地方', name: '秋田県'},
        {area: '東北地方', name: '岩手県'},
        {area: '東北地方', name: '山形県'},
        {area: '東北地方', name: '宮城県'},
        {area: '東北地方', name: '福島県'},
        {area: '関東地方', name: '群馬県'},
        {area: '関東地方', name: '栃木県'},
        {area: '関東地方', name: '茨城県'},
        {area: '関東地方', name: '千葉県'},
        {area: '関東地方', name: '埼玉県'},
        {area: '関東地方', name: '東京都'},
        {area: '関東地方', name: '神奈川県'},
        {area: '中部地方', name: '新潟県'},
        {area: '中部地方', name: '富山県'},
        {area: '中部地方', name: '石川県'},
        {area: '中部地方', name: '福井県'},
        {area: '中部地方', name: '長野県'},
        {area: '中部地方', name: '岐阜県'},
        {area: '中部地方', name: '山梨県'},
        {area: '中部地方', name: '静岡県'},
        {area: '中部地方', name: '愛知県'},
        {area: '近畿地方', name: '滋賀県'},
        {area: '近畿地方', name: '京都府'},
        {area: '近畿地方', name: '兵庫県'},
        {area: '近畿地方', name: '三重県'},
        {area: '近畿地方', name: '奈良県'},
        {area: '近畿地方', name: '大阪府'},
        {area: '近畿地方', name: '和歌山県'},
        {area: '中国地方', name: '鳥取県'},
        {area: '中国地方', name: '岡山県'},
        {area: '中国地方', name: '広島県'},
        {area: '中国地方', name: '島根県'},
        {area: '中国地方', name: '山口県'},
        {area: '四国地方', name: '香川県'},
        {area: '四国地方', name: '徳島県'},
        {area: '四国地方', name: '愛媛県'},
        {area: '四国地方', name: '高知県'},
        {area: '九州地方', name: '大分県'},
        {area: '九州地方', name: '福岡県'},
        {area: '九州地方', name: '佐賀県'},
        {area: '九州地方', name: '長崎県'},
        {area: '九州地方', name: '宮崎県'},
        {area: '九州地方', name: '熊本県'},
        {area: '九州地方', name: '鹿児島県'},
        {area: '九州地方', name: '沖縄県'},
    ];

    const areaSelect = document.getElementById('area-select');
    const prefectureSelect = document.getElementById('prefecture-select');

    areas.forEach(area => {
        const option = document.createElement('option');
        option.textContent = area;
        areaSelect.appendChild(option);
    });

    areaSelect.addEventListener('input', () => {
        const options = document.querySelectorAll('#prefecture-select > option');
        options.forEach(option => {
            option.remove();
        });

        const firstSelect = document.createElement('option');
        firstSelect.textContent = '全て';
        firstSelect.value = 'all';
        prefectureSelect.appendChild(firstSelect);

        prefectures.forEach(prefecture => {
            if (areaSelect.value == prefecture.area) {
                const option = document.createElement('option');
                option.textContent = prefecture.name;
                prefectureSelect.appendChild(option)
            }
        });
    });
});