$(document).ready(function() { 

	$("body, .left_side").niceScroll({ 
		horizrailenabled: false,
		"verge" : "500" 
	});

	$(".gallery").css("min-height", $(document).height()*2);

	

	$(".btn_mnu").click(function() { 
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

$(".gallery img")
	
	.lazyload
		(
			{
				effect : "fadeIn", threshold : 1000
			}
		)

	.parent() .hover 
		(
			function() 
    			{
					$(".gallery a") .css("opacity", ".5");
					$(this) .css("opacity", ".9");
				}, 
			
			function() 
				{
					// этой функцией задаётся яркоcть общего фона галереи,
					// когда на галерею не наведен курсор мыши:
					// 0 - темнее
					// 1 и выше - светлее 
					$(".gallery a") .css("opacity", ".5"); 
				}
		);


var wall = new freewall(".gallery");
	wall.reset

	({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
		onResize: function() 
			{
				wall.fitWidth();
			}
	});

	var images = wall.container.find("a");
	images.find("img").load(function() {
		wall.fitWidth();
	});


	$(".filter_label").click(function() {
 	$(".filter_label").removeClass("active");
 	var filter = $(this).addClass("active").data("filter");
 	wall.filter(filter);
 	setTimeout(function() {
 		$(window).resize();
 		wall.fitWidth();
 	}, 400);
 });


// POP UP окно которое выплывает справа
$(".gallery a").magnificPopup({
	type : 'image',
	gallery : 
		{
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
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

