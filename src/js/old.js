(function($) {

    $("section:not(.hero-banner) .robot > a").click(function(){
        $(this).parent().toggleClass("active");
        return false;
	});	

    $(".call-us-section .robot > a").click(function(){
        $(this).parent().toggleClass("active");
        return false;
	});	
    
	$(".hero-banner .robot a").click(function () {
		$(this).parent().toggleClass("act");
    	return false;
	})    
    
	$(window).on('load', function() {
  		$(".hero-banner .robot").addClass("active");
	})

    // Services Details Slider
    $('.how-work-slider').slick({
        slidesToShow: 2,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.item',
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $(".typewriter").click(function() {
        $(this).addClass("act");
    });

    $('a[href*="#seo"]').click(function() {
        $(".seo-popup-wrap").addClass("act");
        return false;
    });    

    $('a[href*="#popup"]').click(function() {
        $(".step-popup-wrap").addClass("act");
        return false;
    });    

    $('.popup-close').click(function() {
        $(".seo-popup-wrap").removeClass("act");
        $(".step-popup-wrap").removeClass("act");
    });    

    $('a[href*="#contact"]').click(function() {
        $('html, body').animate({
            scrollTop: $("#contacto").offset().top - 100
        }, 900);
        return false;
    });
	
	//sticky widget
	$(document).ready(function() {
		stickyW('.blog-right', '.gform_widget');
		columnW('.blog-right', '.gform_widget');
		$(window).resize(function() {
			stickyW('.blog-right', '.gform_widget');
			columnW('.blog-right', '.gform_widget')
		})
	});
	
	function stickyW(bPar, bWidg){
		if ( $(window).width() > '768' ) {
			let top = $(bWidg).offset().top - 20;
			let bottomPar = $(bPar).offset().top + $(bPar).height();
			
			$(window).scroll(function(e) {
				let bottomW = $(bWidg).offset().top + $(bWidg).height() - 20;
				let y = $(this).scrollTop();
				if ( y >= top ) {
					$(bWidg).css('top', '25%');
					$(bWidg).addClass('fixed');
					if(bottomW > bottomPar){
						$(bWidg).addClass('end');
					} else {
						$(bWidg).removeClass('end')
					}
				} else {
					$(bWidg).css('top', '');
					$(bWidg).removeClass('fixed');
				}
			});
		}
	}
	
	function columnW(par, widg){
		let w = $(par).width();
		$(widg).css('max-width', w)
	}
	
    // Fixed Header
    //$(window).scroll(function() {
        //var value = $(this).scrollTop();
        //if (value > 0)
           // $("header").addClass("sticky");
        //else
           // $("header").removeClass("sticky");
    //});

    // Menu
    $('.humburger-menu').on('click', function() {
        $('.header-wrapper .navbar, .humburger-menu, body').toggleClass('active');
    });
    $('.humburger-menu').click(function() {
        $('.header-wrapper .navbar').slideToggle('slow');
    });
    $(window).resize(function() {
        if ($(window).width() > 991) {
            $('.header-wrapper .navbar').removeAttr('style');
            $('.humburger-menu').removeClass('active');
        }
    });

    // Tabs
    $(document).ready(function() {
        $('.tab').click(function() {
            $(".tab-content").removeClass('tab-active');
            $(".tab-content[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
            $(".tab").removeClass('active');
            $(this).parent().find(".tab").addClass('active');
        });
    });

    // Accordian
    $('.toggle').click(function(e) {
        e.preventDefault();
        let $this = $(this);

        $('.toggle').not(this).removeClass('active');

        $this.toggleClass('active');

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });


})