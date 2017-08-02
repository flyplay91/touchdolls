$(document).ready(function() {
	$("#searchhupint").click(function() {
		$("#searchbarhup").toggle();
        $("#hidesearch").toggle();
        $("#showsearch").toggle();
	});


    $("#open-close-filter").click(function() {
		$("#small-toogle").toggle();
        $("#").toggle();
        $("#").toggle();
	});


    $('#rishimaincl').flexslider({
        animation: "slide",
        controlNav: false
    });

    $('.wanted__Accesories').flexslider({
        animation: "slide",
        slideshow: true,
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 12,

        controlNav: false,
        directionNav: true,
        minItems: 2,
        maxItems: 4

    });

	$('.wanted__shoes').flexslider({
        animation: "slide",
        slideshow: true,
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 12,
        controlNav: false,
        directionNav: true,
        minItems: 2,
        maxItems: 4
	});

    $('.most_wanted').flexslider({
        animation: "slide",
        slideshow: true,
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 12,
        controlNav: false,
        directionNav: true,
        minItems: 2,
        maxItems: 4
    });

    $('.product-rishi-slider').flexslider({
        animation: "slide",
        slideshow: true,
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 12,
        controlNav: false,
        directionNav: true,
        minItems: 1,
        maxItems: 2

    });


    $("#productTabsNav li").click(function() {
        $("#productTabsNav .active").removeClass("active");
        $(this).addClass("active");
        $("#product_tab_content .tab-pane").removeClass("active");
        var gethref = $(this).children("a").attr("data-href");
        $(gethref).addClass("active");
    });
});

function replaceElementWithFade(element1, element2) {
  if ( element1.length > 0 && element2.length > 0 ) {  
    element1.fadeOut(2000);
    element2.fadeIn(2000);
  }
}


$(document).ready(function() {

    var $lis = $(".rishihuptech-s li").hide();
    $lis.slice(0, 3).show();
    var size_li = $lis.length;
    var x = 3,
    start = 0;
    $('#next').click(function() {
        if (start + x < size_li) {
            $lis.slice(start, start + x).hide();
            start += x;
            $lis.slice(start, start + x).show();

        }
    });
    
    $('#prev').click(function() {
        if (start - x >= 0) {
            $lis.slice(start, start + x).hide();
            start -= x;
            $lis.slice(start, start + x).show();
        }
    });

});


$(document).ready(function() {
	$(document).on('click', '#mobile-rows', function() {

        if ($(window).width() < 768) {
            if ($('#mobile-rows > .per-row.two').css("display") == "none") {
                $('#mobile-rows > .per-row.two').css("display", "inline-block");
                $('#mobile-rows > .per-row.one').css("display", "none");
                $('#mobile-rows > .per-row.three').css("display", "none");
                re_draw_col(2);
            } else {
                $('#mobile-rows > .per-row.one').css("display", "inline-block");
                $('#mobile-rows > .per-row.two').css("display", "none");
                $('#mobile-rows > .per-row.three').css("display", "none");
                re_draw_col(1);
            }
        } else {
            if ($('#mobile-rows > .per-row.two').css("display") == "none") {
                $('#mobile-rows > .per-row.two').css("display", "none");
                $('#mobile-rows > .per-row.three').css("display", "inline-block");
                $('#mobile-rows > .per-row.one').css("display", "none");
                re_draw_col(2);
            } else {
                $('#mobile-rows > .per-row.three').css("display", "inline-block");
                $('#mobile-rows > .per-row.two').css("display", "none");
                $('#mobile-rows > .per-row.one').css("display", "none");
                re_draw_col(3);
            }
        }
    });

    // calc_collection_hup_hiren();
    $(window).on('resize', function() {
        calc_collection_hup_hiren();
    });

    function calc_collection_hup_hiren() {
        if ($(window).width() <= 480) {
            if ($('#mobile-rows > .per-row.one').css("display") == "none") {
                $('#mobile-rows > .per-row.two').css("display", "inline-block");
                $('#mobile-rows > .per-row.one').css("display", "none");
                $('#mobile-rows > .per-row.three').css("display", "none");
                re_draw_col(2);
            } else {
                $('#mobile-rows > .per-row.one').css("display", "inline-block");
                $('#mobile-rows > .per-row.two').css("display", "none");
                $('#mobile-rows > .per-row.three').css("display", "none");
                re_draw_col(1);
            }
            
        } else {
            re_draw_col(3);
        }
    }

    function re_draw_col(n) {
        var selector = 'div.Collection_hup_hiren';
        if ($('.pro_adjust').length > 0) selector = '.pro_adjust';
        $('.grid-helper').remove();

        if (n == 1) {
          $(selector).css("width", "100%");
        } else if (n == 2) {
            $(selector).css("width", "50%");
//             $(selector + ':nth-child(2n)').after('<div class="grid-helper clear"></div>');
            $('#mobile-rows > .per-row.two').css("display", "inline-block");
            $('#mobile-rows > .per-row.three').css("display", "none");
            $('#mobile-rows > .per-row.one').css("display", "none");
        } else if (n == 3) {
            $(selector).css("width", "33%");
//             $(selector + ':nth-child(3n)').after('<div class="grid-helper clear"></div>');
            $('#mobile-rows > .per-row.two').css("display", "none");
            $('#mobile-rows > .per-row.three').css("display", "inline-block");
            $('#mobile-rows > .per-row.one').css("display", "none");

        }
    }

    $(document).on('click', '.filter-group', function() {

        var class_name = $(this).attr('class').split(' ')[1];
		
      	if ($(this).attr('data-content') == '▶') {
            $(this).removeAttr('data-content');
            $(this).attr('data-content', '▼');
        } else {
            $(this).removeAttr('data-content');
            $(this).attr('data-content', '▶');
        }

        if ($(this).css("height") == "auto" || $(this).css("height") != "40px") {
            $(this).css("height", "40px");
        } else {
            $(this).css("height", "auto");
        }
    });
  
  	$(".single_image").fancybox();
  
////////////////  Size Chart Mordal  //////////////////////////////
///////////////////////////////////////////////////////////////////
  
 	$('.rwd-table tbody tr td').on( "mouseover click",
        function(e) {
      		var _this = $(this);
            var curTable = $(this).closest('table');
            var row = $(this).closest('tr');
            var colCount = 0;
      
      		$('td, th', curTable).removeClass('col-row-highlight');
            $('td', row).each(function(){
              	colCount++;
                if (_this.text() == $(this).text()) {
                  	return false;
                }
              	$(this).addClass('col-row-highlight');
            });
			
      		if (colCount != 1) {
                $('tbody tr', curTable).each(function(){
                    var curCellValue = $('td:nth-child(' + colCount + ')', $(this)).text();
                    if (_this.text() == curCellValue) { 
                    $('tr th:nth-child(' + colCount + ')', curTable).addClass('col-row-highlight');  	
                        return false;
                    }
                    $('td:nth-child(' + colCount + ')', $(this)).addClass('col-row-highlight');
                });
      		}
		}
	);

  	$('.rwd-table tbody tr td').on( "mouseout",
        function(e) {
      		var curTable = $(this).closest('table');
      		$('td, th', curTable).removeClass('col-row-highlight');
        }
    );
 
  
    $('.measure').on('click', function() {
		$('.img_size').toggle();
    });
  
  	$(document).on('click', '.measure-a', function() {

        if ($(this).attr('data-content') == '▶') {
            $(this).removeAttr('data-content');
            $(this).attr('data-content', '▼');
        } else {
            $(this).removeAttr('data-content');
            $(this).attr('data-content', '▶');
        }

        if ($(this).css("height") == "auto" || $(this).css("height") != "40px") {
            $(this).css("height", "40px");
        } else {
            $(this).css("height", "auto");
        }
    });

/////////////////////////  iPhone Modal  /////////////////////////////////
//////////////////////////////////////////////////////////////////////////
  
    $('.size-chart').on('click', function() {
      	if ($(document).width() > 415) {
          	$('#myModal').css("background-color", "rgba(0,0,0,0.35)");
        } else {
          	
          	$('.size_chart_toggle').attr('data-target', '#myModal1');
          	$('.size-chart').attr("href", "https://www.touchdolls.com/pages/size-chart?back_url=" + encodeURI(location.href));
          	
        }
    });
  
  
/////////////////////////////Alexei JS////////////////////////////////////
//////////////////////Menu li toggle//////////////////////////////////////
  
  
  $('.dropdown-li').on('click', function() {
    if ($('.dropdown-ul').is(":hidden")) {
      $('.dropdown-ul').show(1000);
    } else {
      $('.dropdown-ul').hide(1000);
    }
    
  });
  
  $('.site-nav--has-dropdown').on('mouseover', function() {
    $('.site-nav--has-dropdown').removeClass(nav-hover);
  });
  
  
  
  $(window).scroll(function() {
    if ($(window).scrollTop() < 100) {
      $('#wrapper-left-navigation').css({'position': 'absolute', 'top': '55px'});
    } else {
      $('#wrapper-left-navigation').css({'position': 'fixed', 'top': '0px'});
    }
  }); 
  
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 99) {
      $('.large--hide.medium-down--show.mm-icon').css('top', '-9px');
      $('#logohupsite.site-header__logo.logo_1 a img').css({'width': '30%', 'transition': ' all 0.2s ease'});
    } else {
      $('.large--hide.medium-down--show.mm-icon').css('top', '26px');
      $('#logohupsite.site-header__logo.logo_1 a img').css('width', '60%');
    }
  });
  
  
  $(window).scroll(function() {
    if ($(window).scrollTop() < 50) {
      $('.content-top').css({'position': 'initial'});
    } else {
      $('.content-top').css({'position': 'fixed', 'top': '0px', 'z-index': '100000', 'left': '0', 'right': '0'});
    }
  }); 
  
//   var element1 = $('.special-sale');
//   var element2 = $('.special-sale');
  
//   replaceElementWithFade(element1, element2);
  
  if (window.location.href == "https://www.touchdolls.com/collections/dress") {
    $('#AccessibleNav li ul.sub_menu_dress').css('display', 'block');
  }
  
  if (window.location.href == "https://www.touchdolls.com/collections/bottoms") {
    $('#AccessibleNav li ul.sub_menu_bottom').css('display', 'block');
  }
  

///////////////////////////////////////////////////////////////////////////////  
/////////////////////////////Initial Filter////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
  
  
  $( '#view-select' ).val(3);
  $( '#view-select' ).on('change', function() {
    reflect_view();
  });
  
  reflect_view();

});

function reflect_view() {
  console.log($( '#view-select' ).val());
  if ($( '#view-select' ).val() == 2) {
    $('.pro_adjust.sca-qv-image').css('width', '50%');
  } else if ($( "#view-select option:selected" ).text() == 3) {
    $('.pro_adjust.sca-qv-image').css('width', '33%');
  } else {
    $('.pro_adjust.sca-qv-image').css('width', '25%');
  }
  

///////////////////////////////////////////////////////////////////////////////  
/////////////////////////////Mobile submenu////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
  $('.sub_menu.mobile_dress').on('click', function() {
    $('.sub_menu_dress').toggle();
  });
  
  $('.sub_menu.mobile_bottom').on('click', function() {
    $('.sub_menu_bottom').toggle();
  });
  
  
  $('#AddToCart').on('click', function() {
    if ($('.cart-value-count').val() != 0) {
      $('.header-cart-btn.cart-toggle.hup_cart_small .icon.icon-cart').css({'width': '50px', 'height': '50px'});
    } else {
      $('.header-cart-btn.cart-toggle.hup_cart_small .icon.icon-cart').css({'width': '36px', 'height': '36px'});
    }
  });
  
}