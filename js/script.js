$(function () {


	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});

	$("a[href*=#]").on("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 100
		}, 777);
		e.preventDefault();
		return false;
	});


	$('.burger').click(function () {
		$('ul.menu_list').toggle('fade', 200);
		$(this).toggleClass('open_menu');
	});


	function checkWidth() {
		var windowSize = $(window).width();

		if (windowSize < 966) {
			$('li.item_menu_list a').click(function () {
				$('ul.menu_list').toggle('fade', 200);
				$('.burger').toggleClass('open_menu');
			});

			$('a.btn_contact').click(function () {
				$('ul.menu_list').toggle('fade', 200);
				$('.burger').toggleClass('open_menu');
			});
		}


		var count = 0;


	}

	// Execute on load
	checkWidth();
	// Bind event listener
	$(window).resize(checkWidth);


});

(function ($) {
	// Select the form and form message
	var form = $('#ajax-contact-form'),
		form_messages = $('#form-messages');

	// Action at on submit event
	$(form).on('submit', function (e) {
		e.preventDefault(); // Stop browser loading

		// Get form data
		var form_data = $(form).serialize();

		// Send Ajax Request
		var the_request = $.ajax({
			type: 'POST', // Request Type POST, GET, etc.
			url: "https://api.cashierless.sg/connect",
			data: form_data
		});

		// At success
		the_request.done(function (data) {
			form_messages.text("Success: " + data);

			// Do other things at success
		});

		// At error
		the_request.done(function () {
			//  form_messages.text("Error: "+data);

			// Do other things at fails
		});
	});
})(jQuery);


(function ($) {
	// Select the form and form message
	var form = $('#ajax-contact-form2'),
		form_messages = $('#form-messages2');

	// Action at on submit event
	$(form).on('submit', function (e) {
		e.preventDefault(); // Stop browser loading

		// Get form data
		var form_data = $(form).serialize();

		// Send Ajax Request
		var the_request = $.ajax({
			type: 'POST', // Request Type POST, GET, etc.
			url: "https://api.cashierless.sg/connect",
			data: form_data
		});

		// At success
		the_request.done(function (data) {
			form_messages.text("Success: " + data);

			// Do other things at success
		});

		// At error
		the_request.done(function () {
			//  form_messages.text("Error: "+data);

			// Do other things at fails
		});
	});
	form.close()
})(jQuery);