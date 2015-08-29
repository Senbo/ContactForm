$(document).ready(function() {

	// TEXT EXPANDING
    var showChar = 43;
    var ellipsestext = '...';
    var moretext = '[czytaj wi&#281;cej]';
    var lesstext = '[zwi&#324;]';

    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext + '</span>' +
				'<span class="morecontent"><span>' + h + '</span>' +
				'<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }
    });

    $('.morelink').click(function(e) {
		e.preventDefault();
		var $el = $(this);

        if($el.hasClass('less')) {
            $el.removeClass('less');
            $el.html(moretext);
        } else {
            $el.addClass('less');
            $el.html(lesstext);
        }

        $el.parent().prev().toggle();
        $el.prev().toggle();
    });

	// FORM VALIDATION
    var $form = $( "#form" );
	$form.validate({
		rules: {
			'approve': {
				required: true
			}
		},
		messages: {
			'approve': {
				required: 'Musisz wyrazi&#263; zgod&#281;'
			}
		}
	});

	// FORM SUBMIT HANDLER
	$('.submitBtn').click(function () {
		if ($form.valid()) {
			$('.submit div').fadeOut(500, function () {
				$('.loader').show();
				setTimeout(function () {
					$('form').fadeOut(500, function () {
						$('.confirmation').fadeIn(500);
						$('section').animate({
							minHeight: "150px"
						});
					});
					$('header .before').fadeOut(300,function() {
						$('header .after').css('display', 'table-cell').fadeIn(300);
					});
					$('.info').fadeOut(500);
				}, 1000);
			});
		}
	});

	// SHOW PHONE NUMBER
	$('.button').click(function() {
		$(this).fadeOut(100);
	});
});
