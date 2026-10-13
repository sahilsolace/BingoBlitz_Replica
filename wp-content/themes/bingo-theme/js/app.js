/* #Header
======================================================= */
const header = document.querySelector(".header");

const headerBtn = document.querySelector(".header-hamburger");
const headerClose = document.querySelector(".header-close");
const tabcoins = document.querySelector(".tabcoins");
if (headerBtn) {
	headerBtn.addEventListener("click", (e) => {
		e.preventDefault();

		header.classList.add("show");
		body.classList.add("no-scroll");
	});
}

if (headerClose) {
	headerClose.addEventListener("click", (e) => {
		e.preventDefault();

		header.classList.remove("show");
		body.classList.remove("no-scroll");
	});
}

// Color Change
if (document.querySelector(".header")) {
	window.addEventListener("scroll", () => {
		if (window.scrollY > 0) {
			header.classList.add("header-scrolled");
		} else {
			header.classList.remove("header-scrolled");
		}
	});
}

if (document.querySelector(".header")) {
	if (window.scrollY > 0) {
		header.classList.add("header-scrolled");
	} else {
		header.classList.remove("header-scrolled");
	}
}

/* #Home Section 7 Slider
======================================================= */
if (document.querySelector(".home-section-7 .swiper")) {
	new Swiper(".home-section-7 .swiper", {
		loop: true,
		pagination: {
			el: ".home-section-7 .swiper-pagination",
		},
		breakpoints: {
			0: {
				slidesPerView: 1.15,
			},
			1024: {
				slidesPerView: "auto",
			},
		},
		navigation: {
			nextEl: ".home-section-7 .next",
			prevEl: ".home-section-7 .prev",
		},
	});
}

/* #Blog Post Slider
======================================================= */
if (document.querySelector(".blog-post-slider .swiper")) {
	new Swiper(".blog-post-slider .swiper", {
		pagination: {
			el: ".blog-post-slider .swiper-pagination",
		},
		loop: true,
		breakpoints: {
			0: {
				slidesPerView: 1.5,
				centeredSlides: true,
			},
			1024: {
				slidesPerView: 4,
				centeredSlides: false,
			},
		},
	});
}

/* #Blog Post Slider
======================================================= */
if (document.querySelector(".home-page")) {
	// Home Section 3
	gsap.to(".home-section-3 .img img:nth-child(3)", {
		yPercent: -75,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-3",
			scrub: true,
		},
	});

	gsap.to(".home-section-3 .img img:nth-child(4)", {
		yPercent: -100,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-3",
			scrub: true,
		},
	});

	gsap.to(".home-section-3 .img img:nth-child(5)", {
		yPercent: 300,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-3",
			scrub: true,
		},
	});

	// Home Section 4
	gsap.to(".home-section-4 .imgs img:nth-child(1)", {
		yPercent: 50,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-4",
			scrub: true,
		},
	});

	gsap.to(".home-section-4 .imgs img:nth-child(2)", {
		yPercent: -50,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-4",
			scrub: true,
		},
	});

	gsap.to(".home-section-4 .imgs img:nth-child(3)", {
		yPercent: -100,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-4",
			scrub: true,
		},
	});

	gsap.to(".home-section-4 .imgs img:nth-child(4)", {
		yPercent: 50,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-4",
			scrub: true,
		},
	});

	gsap.to(".home-section-4 .imgs img:nth-child(5)", {
		yPercent: -75,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-4",
			scrub: true,
		},
	});

	gsap.to(".home-section-4 .imgs img:nth-child(6)", {
		yPercent: -100,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-4",
			scrub: true,
		},
	});

	// Home Section 5
	gsap.to(".home-section-5 .coins img:nth-child(1)", {
		yPercent: -75,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-5",
			scrub: true,
		},
	});

	gsap.to(".home-section-5 .coins img:nth-child(2)", {
		yPercent: 100,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-5",
			scrub: true,
		},
	});

	gsap.to(".home-section-5 .coins img:nth-child(3)", {
		yPercent: -150,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-5",
			scrub: true,
		},
	});

	gsap.to(".home-section-5 .img img", {
		yPercent: -50,
		ease: "none",
		scrollTrigger: {
			trigger: ".home-section-5",
			scrub: true,
		},
	});
}

/* #AOS Animations
======================================================= */
if (window.innerWidth > 1024) {
	AOS.init({
		startEvent: "load",
		once: true,
		duration: 800,
		offset: 300,
	});
} else {
	AOS.init({
		startEvent: "load",
		once: true,
		duration: 600,
		offset: 150,
	});
}

if (document.querySelector(".event-about")) {
	gsap.to(".confetti-1", {
		yPercent: -205,
		ease: "none",
		scrollTrigger: {
			trigger: ".event-about",
			scrub: true,
		},
	});
	gsap.to(".confetti-2", {
		yPercent: 205,
		ease: "none",
		scrollTrigger: {
			trigger: ".event-about",
			scrub: true,
		},
	});
	gsap.to(".confetti-3", {
		yPercent: -175,
		ease: "none",
		scrollTrigger: {
			trigger: ".event-about",
			scrub: true,
		},
	});
	gsap.to(".confetti-4", {
		yPercent: 175,
		ease: "none",
		scrollTrigger: {
			trigger: ".event-about",
			scrub: true,
		},
	});
	gsap.to(".confetti-5", {
		yPercent: 20,
		ease: "none",
		scrollTrigger: {
			trigger: ".event-about",
			scrub: true,
		},
	});
}

function copyPageURL() {
	var pageURL = window.location.href;
	var tempInput = document.createElement('input');
	tempInput.setAttribute('value', pageURL);
	document.body.appendChild(tempInput);
	tempInput.select();
	tempInput.setSelectionRange(0, 99999); // For mobile devices
	document.execCommand('copy');
	document.body.removeChild(tempInput);
	document.getElementById("copyBtn").textContent = "Link copied!";
}

const scrollactive = document.querySelectorAll(".scroll_to_section");

jQuery(document).on("click", ".scroll_to_section", function (event) {
	jQuery(scrollactive).removeClass("active");
	jQuery(this).addClass("active");

	jQuery(document).on('click', '.anchor', function (e) {
		e.preventDefault();
		let link = jQuery(this).attr('href');
		let top = jQuery(link).offset().top;
		jQuery('body,html').animate({
			scrollTop: top
		}, 1000);
		if (window.matchMedia('(max-width: 1024px)').matches) {
			header.classList.remove("show");
			body.classList.remove("no-scroll");
		}
	});

	event.preventDefault();

	var target = "#" + this.getAttribute("data-target");
	var targettext = "#" + this.getAttribute("data-text");
	var targettext2 = this.getAttribute("data-text");
	window.history.pushState("", "", targettext);

	// + ' » ' + targettext + '

	// jQuery('#breadcrumbs').append(' » ' + targettext);
	var targetOffset = jQuery(target).offset().top;
	var menu_height = jQuery(".header").height();
	jQuery("html, body").animate(
		{
			scrollTop: targetOffset - menu_height - 50,
		},
		100,
		"linear"
	);
});

// !!!!!!!!!!!!!!!
// SUPPORT SCRIPTS
// !!!!!!!!!!!!!!!
(function ($) {
	function generatorNavInit() {
		const prev = $(".js-steps-prev"),
			next = $(".js-steps-next"),
			tabs = $(".generator__tabs");
		let activeIndex = getIndex(tabs.find("._active"));

		checkAbility();

		tabs.on("click", (event) => {
			activeIndex = getIndex($(event.target));
			checkAbility();
		});

		prev.on("click", handlePrev);
		next.on("click", handleNext);

		function handlePrev() {
			const tab = tabs.find(`[href*="#step_${activeIndex - 1}"]`);
			handleTabButton(tab);
			activeIndex = getIndex(tabs.find("._active"));
			checkAbility();
		}
		function handleNext() {
			const tab = tabs.find(`[href*="#step_${+activeIndex + 1}"]`);
			handleTabButton(tab);
			activeIndex = getIndex(tabs.find("._active"));
			checkAbility();
		}

		function getIndex(button) {
			return button.attr("href").split("_")[1];
		}

		function checkAbility() {
			if (activeIndex <= 0) {
				prev.attr("disabled", true);
				next.attr("disabled", false);
			} else if (activeIndex >= tabs.find("a").length - 1) {
				next.attr("disabled", true);
				prev.attr("disabled", false);
			} else {
				prev.attr("disabled", false);
				next.attr("disabled", false);
			}
		}
	}

	if ($(".generator__tabs").length) {
		generatorNavInit();
	}

	$(".js-tabs__button").on("click", function (e) {
		e.preventDefault();
		handleTabButton($(this));
	});

	function handleTabButton(button) {
		targetTab = $(button.attr("href"));
		button.siblings("a").removeClass("_active");
		button.addClass("_active");
		targetTab.siblings(".js-tabs__item").removeClass("_active");
		targetTab.addClass("_active");
	}

	$(".js-slide__button").on("click", function (e) {
		e.preventDefault();
		const button = $(this),
			content = button.next(".js-slide__content"); // Use .next() for the immediate next sibling

		if (button.hasClass("_active")) {
			button.removeClass("_active");
			content.slideUp();
		} else {
			button.addClass("_active");
			content.slideDown();
		}
	});


	if ($("main.event").length) {
		// Home Section 3
		gsap.to(".soon__ball-01", {
			yPercent: 175,
			ease: "none",
			scrollTrigger: {
				trigger: ".soon",
				scrub: true,
			},
		});
		gsap.to(".soon__ball-02", {
			yPercent: 95,
			ease: "none",
			scrollTrigger: {
				trigger: ".soon",
				scrub: true,
			},
		});
		gsap.to(".soon__curl", {
			yPercent: -65,
			ease: "none",
			scrollTrigger: {
				trigger: ".soon",
				scrub: true,
			},
		});
		gsap.to(".confetti-left-top_1", {
			yPercent: -105,
			ease: "none",
			scrollTrigger: {
				trigger: ".soon",
				scrub: true,
			},
		});
		gsap.to(".confetti-left-top_2", {
			yPercent: 105,
			ease: "none",
			scrollTrigger: {
				trigger: ".soon",
				scrub: true,
			},
		});
		gsap.to(".confetti-right-bottom_1", {
			yPercent: -55,
			ease: "none",
			scrollTrigger: {
				trigger: ".soon",
				scrub: true,
			},
		});
		gsap.to(".confetti-right-bottom_2", {
			yPercent: 25,
			ease: "none",
			scrollTrigger: {
				trigger: ".soon",
				scrub: true,
			},
		});
		gsap.to(".confetti-left-bottom_1", {
			yPercent: -85,
			ease: "none",
			scrollTrigger: {
				trigger: ".soon",
				scrub: true,
			},
		});
	}

	if ($(".hot-topics__list").length) {
		new Swiper(".hot-topics__list", {
			navigation: {
				nextEl: ".hot-topics__next",
				prevEl: ".hot-topics__prev",
			},
			pagination: {
				el: ".hot-topics__pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2.2,
					spaceBetween: "6.43%",
				},
				1024: {
					slidesPerView: 6,
					spaceBetween: "2.62%",
				},
			},
		});
	}

	if ($(".related__posts").length) {
		$(".related__posts").each(function () {
			const slider = new Swiper(".related__posts", {
				pagination: {
					el: ".related__pagination",
					type: "bullets",
					clickable: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 1.22,
						spaceBetween: "6.43%",
					},
				},
			});

			resizeSlider(slider);
			window.addEventListener("resize", () => {
				resizeSlider(slider);
			});
		});
	}

	if ($(".recent-changes__wrap").length) {
		$(".recent-changes__wrap").each(function () {
			const current = $(this),
				sliderName = `.recent__${current.data("category")}`;
			const slider = new Swiper(sliderName, {
				slidesPerView:4,
				pagination: {
					el: '.swiper-pagination'
				},
				breakpoints: {
					0: {
						slidesPerView: 1.22,
						spaceBetween: "6.43%",
					},
				},
			});

			resizeSlider(slider);
			window.addEventListener("resize", () => {
				resizeSlider(slider);
			});
		});
	}

	$('.load-more-button').on('click', function (e) {
		let neededPage = $(this).data('currentpage') + 1;
		let category = $(this).data('category');

		// Show with grid layout
		$('.page-' + category + '-' + neededPage).css('display', 'grid');

		// Update page state
		$(this).data('currentpage', neededPage);
		if (neededPage >= $(this).data('pages')) {
			$(this).hide();
		}

		// Scroll to bottom of container
		const listContainer = document.querySelector('.recent-changes__list');
		if (listContainer) {
			listContainer.scrollTo({
				top: listContainer.scrollHeight,
				behavior: 'smooth'
			});
		}
	});



	if ($(".cooking-show__slider").length) {
		$(".cooking-show__slider").each(function () {
			const current = $(this),
				sliderName = `.cooking__${current.data("category")}`;
			new Swiper(sliderName, {
				navigation: {
					nextEl: `.cooking-show__${current.data("category")}_next`,
					prevEl: `.cooking-show__${current.data("category")}_prev`,
				},
				breakpoints: {
					0: {
						slidesPerView: 1.22,
						spaceBetween: "6.43%",
					},
					1024: {
						slidesPerView: 2.755,
						spaceBetween: "2.39%",
					},
				},
			});
		});
	}

	if ($(".bingo-blitz__slider").length) {
		$(".bingo-blitz__slider").each(function () {
			const current = $(this),
				sliderName = `.bingo__${current.data("category")}`;
			new Swiper(sliderName, {
				navigation: {
					nextEl: `.bingo-blitz__${current.data("category")}_next`,
					prevEl: `.bingo-blitz__${current.data("category")}_prev`,
				},
				breakpoints: {
					0: {
						slidesPerView: 1.22,
						spaceBetween: "6.43%",
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: "2.229%",
					},
				},
			});
		});
	}

	if ($(".seasonal-rooms__slider").length) {
		$(".seasonal-rooms__slider").each(function () {
			const current = $(this),
				sliderName = `.seasonal__${current.data("category")}`;
			new Swiper(sliderName, {
				navigation: {
					nextEl: `.seasonal-rooms__${current.data("category")}_next`,
					prevEl: `.seasonal-rooms__${current.data("category")}_prev`,
				},
				breakpoints: {
					0: {
						slidesPerView: 1.28,
						spaceBetween: "5.64%",
						centeredSlides: true,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: "2.62%",
						centeredSlides: false,
					},
				},
			});
		});
	}

	if ($(".fun__slider").length) {
		const funSliders = $(".fun__slider"),
			prevArrows = $(".fun__prev"),
			nextArrows = $(".fun__next");
		funSliders.each(function (index, slider) {
			new Swiper(slider, {
				autoplay: {
					delay: 5000,
				},
				navigation: {
					nextEl: nextArrows[index],
					prevEl: prevArrows[index],
				},
				breakpoints: {
					0: {
						speed: 600,
						initialSlide: 1,
						slidesPerView: 1,
						centeredSlides: true,
						spaceBetween: "2%",
					},
					1024: {
						spaceBetween: 0,
						initialSlide: 1,
					},
				},
			});
		});
	}

	if ($(".event-slider").length) {
		new Swiper('.event-slider .swiper', {
			navigation: {
				nextEl: ".event-slider__navigation .swiper-next",
				prevEl: ".event-slider__navigation .swiper-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1.25,
					pagination: {
						el: ".event-slider__pagination",
						clickable: true,
					},
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}

	if ($(".together__slider").length) {
		const togetherSliders = $(".together__slider"),
			prevArrows = $(".together__prev"),
			nextArrows = $(".together__next"),
			paginations = $(".together__pagination");
		togetherSliders.each(function (index, slider) {
			new Swiper(slider, {
				breakpoints: {
					0: {
						pagination: {
							el: paginations[index],
							type: "bullets",
							clickable: true,
						},
						speed: 600,
						initialSlide: 0,
						slidesPerView: 1,
						spaceBetween: "5%",
					},
					1024: {
						navigation: {
							nextEl: nextArrows[index],
							prevEl: prevArrows[index],
						},
						spaceBetween: "5%",
					},
				},
			});
		});
	}

	if ($(".past__slider").length) {
		const pastSliders = $(".past__slider"),
			paginations = $(".past__pagination");
		pastSliders.each(function (index, sliderItem) {
			const slider = new Swiper(sliderItem, {
				pagination: {
					el: paginations[index],
					type: "bullets",
					clickable: true,
				},
				breakpoints: {
					0: {
						speed: 600,
						initialSlide: 0,
						slidesPerView: 1,
						spaceBetween: "5%",
					},
				},
			});
			resizeSlider(slider);
			window.addEventListener("resize", () => {
				resizeSlider(slider);
			});
		});
	}

	function resizeSlider(slider) {
		const media_query = "screen and (max-width:1024px)";
		const matched = window.matchMedia(media_query).matches;

		if (!matched) {
			slider.disable();
		} else {
			slider.enable();
		}
	}
})(jQuery);

document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.remove('no-js');
	document.addEventListener('click', function (event) {
		// Check if the clicked element has the class 'ga-push'
		if (event.target.classList.contains('ga-push')) {
			// Initialize dataLayer if it doesn't exist
			window.dataLayer = window.dataLayer || [];

			// Get GA parameters from data attributes
			const eventName = event.target.getAttribute('data-event') || 'NA';
			const parameter = event.target.getAttribute('data-parameter') || 'NA';
			const parameter_value = event.target.getAttribute('data-parameter-value') || 'NA';
			const title = event.target.getAttribute('data-title') || 'NA';
			const component = event.target.getAttribute('data-component') || 'NA';
			const context = event.target.getAttribute('data-context') || 'NA';
			const type = event.target.getAttribute('data-type') || '';

			// Prepare the event object
			const eventObject = {
				event: eventName,
				[parameter]: parameter_value,
				title: title,
				component: component,
				context: context
			};

			// Add type only if it exists and isn't empty
			if (type) {
				eventObject.app_type = type;
			}

			// Push the event to the dataLayer
			window.dataLayer.push(eventObject);
		}

	});
});

$(document).ready(function() {
	$('.magnific-popup-button').on('click', function () {
		const target = $(this).data('src');
		$.magnificPopup.open({
			items: {
				src: target
			},
			type: 'inline'
		});
	});

	$('.magnific-popup-link').on('click', function () {
		const target = $(this).attr('href');
		$.magnificPopup.open({
			items: {
				src: target
			},
			type: 'inline'
		});
	});
});