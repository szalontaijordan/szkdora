var portre = [
    {"extended": false, "open": "Tovább", "close": "Vissza"},
    {"support_text": "#2016", "more_text": "Esküvői ajándék", "img": "res/portre/14560086_1130753580344453_8802730895985049917_o.jpg"},
    {"support_text": "#2015", "more_text": "Első megrendelés", "img": "res/portre/14612468_1130753603677784_1392319298267814420_o.jpg"},
    {"support_text": "#2016", "more_text": "Megrendelésre készített", "img": "res/portre/14915444_1164746713611806_8324481530299220199_n.jpg"},
    {"support_text": "#2016", "more_text": "Megrendelésre készített", "img": "res/portre/14917112_1164746576945153_3162711551899333944_o.jpg"},
    {"support_text": "#2016", "more_text": "Megrendelésre készített", "img": "res/portre/14991239_1164746796945131_7969339558244513339_o.jpg"},
    {"support_text": "#2016", "more_text": "Megrendelésre készített", "img": "res/portre/14993458_1164746920278452_2889681249296334582_n.jpg"},
    {"support_text": "#2016", "more_text": "Megrendelésre készített", "img": "res/portre/15192604_1186161148137029_2551131776598377465_n.jpg"}
];

var sajat = [
    {"extended": false},
    {"support_text": "#2015", "more_text": "", "img": "res/sajat/11401398_838472359572578_335634623108359392_n.jpg"},
    {"support_text": "#2014", "more_text": "", "img": "res/sajat/184415_490018421084642_952590775_n.jpg"},
    {"support_text": "#2014", "more_text": "", "img": "res/sajat/484874_678963802165848_1399908569_n.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/1476002_551226284963855_1941319344_n.jpg"},
    {"support_text": "#2014", "more_text": "", "img": "res/sajat/nyul.jpg"},
    {"support_text": "#2014", "more_text": "", "img": "res/sajat/1610104_677363302325898_780247584_n.jpg"},
    {"support_text": "#2014", "more_text": "", "img": "res/sajat/1010378_483653351721149_119780651_n.jpg"},
    {"support_text": "#2016", "more_text": "", "img": "res/sajat/P1060593.jpg"},
    {"support_text": "#2016", "more_text": "", "img": "res/sajat/P1060591.jpg"},
    {"support_text": "#2016", "more_text": "", "img": "res/sajat/P1060592.jpg"},
    {"support_text": "#2016", "more_text": "", "img": "res/sajat/P1060594.jpg"},
    {"support_text": "#2016", "more_text": "", "img": "res/sajat/P1060595.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/64231_532800083473142_2075150265_n.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/734360_494714473948370_1282121088_n.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/998128_467577596662058_461863827_n.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/1003768_494724560614028_1559380144_n.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/1074276_497300723689745_1351574798_o.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/1146286_494194177333733_1849903457_o.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/1390573_533654443387706_1248582647_n.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/1506584_696596493735912_621985049_n.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/sajat/1538934_558804087539408_841994265_n.jpg"},
    {"support_text": "#2014", "more_text": "", "img": "res/sajat/1545796_572258626193954_901010304_n.jpg"},
    {"support_text": "#2014", "more_text": "", "img": "res/sajat/1903009_709174409144787_517521395955556162_n.jpg"},
    {"support_text": "#2014", "more_text": "", "img": "res/sajat/10710872_714211188665363_2677389977132128925_n.jpg"},
    {"support_text": "#2015", "more_text": "", "img": "res/sajat/12208283_911547722265041_717124056580342700_n.jpg"},
    {"support_text": "#2015", "more_text": "", "img": "res/sajat/12548976_950566331696513_7810900170131149324_n.jpg"},
    {"support_text": "#2016", "more_text": "", "img": "res/sajat/14063823_1092628837490261_1560620211128202028_n.jpg"}
];

var teto = [
    {"extended": false},
    {"support_text": "#2013", "more_text": "", "img": "res/teto/1005186_487229164696901_948647457_n.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/teto/1078918_490018571084627_1520149010_o.jpg"},
    {"support_text": "#2014", "more_text": "", "img": "res/teto/64369_725827550837060_2700432337468672048_n.jpg"},
    {"support_text": "#2013", "more_text": "", "img": "res/teto/182375_505848922834925_985864031_n.jpg"}
];

var viewer = false;

document.getElementById('imgv-layer').addEventListener('click', function() {
    if (!viewer) {
        document.getElementById('imgv-layer').innerHTML = '';
        document.getElementById('imgv-layer').style.opacity = '0';
        document.getElementById('imgv-layer').style.width = '0vw';
        document.getElementById('imgv-layer').style.height = '0vh';
    } else {
        viewer = false;
    }
});

function renderImageViewer(imgSrc, active) {
    document.getElementById('imgv-layer').innerHTML = '<div id="image-viewer" class="container no-padding"></div>';

    document.getElementById('image-viewer').addEventListener('click', function() {
        viewer = true;
    });

    document.getElementById('imgv-layer').style.opacity = '1';
    document.getElementById('imgv-layer').style.width = '100vw';
    document.getElementById('imgv-layer').style.height = '100vh';

    var carousel =  
        '<div id="myCarousel" class="carousel slide" data-ride="carousel">'+
          '<ol class="carousel-indicators"></ol>'+
          '<div id="carousel-images" class="carousel-inner" role="listbox"></div>'+
          '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">'+
            '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
            '<span class="sr-only">Previous</span>'+
          '</a>'+
          '<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">'+
            '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'+
            '<span class="sr-only">Next</span>'+
          '</a>'+
        '</div>';

    document.getElementById('image-viewer').innerHTML = carousel;

    var array;

    if (imgSrc.indexOf('portre') >= 0) {
        array = portre;
    }

    if (imgSrc.indexOf('sajat') >= 0) {
        array = sajat;   
    }

    if (imgSrc.indexOf('teto') >= 0) {
        array = teto;
    }


    var items = [];
    for (var i = 1; i < array.length; i++) {
        var itemClass = "item";

        if (i === active) {
            itemClass = "item active";  
        } 

        var item = 
            '<div class="'+itemClass+'">'+
              '<img src="'+array[i].img+'" class="carousel-image">'+
              '<div class="carousel-caption">'+
                '<h3>'+array[i].support_text+'</h3>'+
                '<p>'+array[i].more_text+'</p>'+
              '</div>'+
            '</div>';

        items.push(item);
    }

    for (var i = 0; i < items.length; i++) {
        document.getElementById('carousel-images').innerHTML += items[i];
    }

    $("#carousel").carousel(active);
}

function renderCards(array, howMany, targetID) {
    document.getElementById(targetID).innerHTML = '';

    var parent = 'p-more';

    if (targetID == 's-cards') {
        parent = 's-more';
    }

    if (targetID == 't-cards') {
        parent = 't-more';
    }

    if (array.length - 1 < howMany) {
        howMany = array.length - 1 - ((array.length-1) % 4);    
    }

    if (howMany === -1) {
        howMany = array.length;
    }

    var newText = 'Tovább (+'+ (array.length-1 - howMany) +')';
    portre[0].open = newText;

    document.getElementById(parent).innerHTML = newText;

    for(i = 1; i < array.length && i <= howMany; i++) {
        document.getElementById(targetID).innerHTML +=
            '<div class="card shadow" onClick="renderImageViewer(\''+array[i].img+'\','+i+')">' +
                '<img src="'+array[i].img+'" />' +
                '<div class="card-cover">' +
                    '<span class="card-cover-text">'+array[i].support_text+'</span>' +
                    '<span class="hidden">'+array[i].more_text+'</span>' +
                '</div>' +
            '</div>'
    }
    array[0].extended = !array[0].extended;
}

function loadMainCards(howMany) {
    renderCards(portre, howMany, 'p-cards');
    renderCards(sajat,  howMany, 's-cards');
    renderCards(teto,   howMany, 't-cards');
}

document.getElementById('p-more').addEventListener('click', function() {
    if (portre[0].extended) {
        renderCards(portre, -1, 'p-cards');  
        document.getElementById('p-more').innerHTML = portre[0].close;  
    } else {
        renderCards(portre,  8, 'p-cards');    
        document.getElementById('p-more').innerHTML = portre[0].open;
    }
});

document.getElementById('s-more').addEventListener('click', function() {
   if (sajat[0].extended) {
        renderCards(sajat, -1,  's-cards');    
        document.getElementById('s-more').innerHTML = portre[0].close;
    } else {
        renderCards(sajat,  8,  's-cards'); 
        document.getElementById('s-more').innerHTML = portre[0].open;   
    }
});

document.getElementById('t-more').addEventListener('click', function() {
    if (teto[0].extended) {
        renderCards(teto, -1, '  t-cards'); 
        document.getElementById('t-more').innerHTML = portre[0].close;   
    } else {
        renderCards(teto,  8,   't-cards'); 
        document.getElementById('t-more').innerHTML = portre[0].open;   
    }
});













