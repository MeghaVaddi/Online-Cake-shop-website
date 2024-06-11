	$(document).ready(function()
	{
		$('#menu').click(function()
		{
			$(this).toggleClass('fas fa-times')
			$('.navigate').toggleClass('nav-toggle')
		});


            $('.Service .cake-list .btn1').click(function()
             {
                  $(this).addClass('active').siblings().removeClass('active');

                  let src = $(this).attr('data-src');
                  $('#cake-img').attr('src',src);
            });
            $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
            
	});

