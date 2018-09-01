$(document).ready(function() 
	{

	$("body").niceScroll
	({ horizrailenabled: false });

	$(".btn_mnu").click(function() 
		{ 
			$(this).toggleClass("active");
			$(".left_side").toggleClass("active");
		});

// Preloader //

$(window).load(function() /* Загрузка окна! (document).ready отличается
от (window).load тем, что (document).ready срабатывает раньше, когда document готов
а когда польностью загружен (document).ready, только тогда мы показываем контент*/ 
	
	{
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	});

// Здесь подгружается плагин LazyLoad //

$(".gallery img").lazyload({
    	effect : "fadeIn",
    	threshold : 1000
    }).parent() .hover(function() {
		$(".gallery a").css("opacity", ".8");
		$(this).css("opacity", ".1");
	}, function() {
		$(".gallery a").css("opacity", "1");
	});


var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
		onResize: function() {
			wall.fitWidth();
		}
	});

	var images = wall.container.find("a");
	images.find("img").load(function() {
		wall.fitWidth();
	});


	$(".filter-label").click(function() {
 	$(".filter-label").removeClass("active");
 	var filter = $(this).addClass("active").data("filter");
 	wall.filter(filter);
 	setTimeout(function() {
 		$(window).resize();
 		wall.fitWidth();
 	}, 400);
 });


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});


	
});

