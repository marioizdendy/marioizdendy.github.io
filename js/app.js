//  <!-- timezone -->
function updateTimeZones() {
  const timeElements = document.querySelectorAll('.tz_time');
  timeElements.forEach(el => {
    const tz = el.dataset.timezone;
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz };
    el.textContent = new Intl.DateTimeFormat([], options).format(now);
  });
}
updateTimeZones();
setInterval(updateTimeZones, 60000);

// <!-- autopause -->

    document.addEventListener('DOMContentLoaded', function() {
        var iframes = document.querySelectorAll('.video-wrapper iframe');
        var players = [];

        iframes.forEach(function(iframe) {
            var player = new Vimeo.Player(iframe);
            players.push(player);

            player.on('play', function() {
                players.forEach(function(otherPlayer) {
                    if (otherPlayer !== player) { 
                        otherPlayer.pause();
                    }
                });
            });
        });
    });

// <!-- Tabs -->

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("tab")) {
        const tabsContainer = e.target.closest(".tabs"); 
        const contentContainer = tabsContainer.nextElementSibling; 

        const tabs = tabsContainer.querySelectorAll(".tab");
        const contents = contentContainer.querySelectorAll(".tab-content");

        const tabIndex = Array.from(tabs).indexOf(e.target);

        tabs.forEach(tab => tab.classList.remove("active_tab"));
        contents.forEach(content => content.classList.remove("activeContent"));

        e.target.classList.add("active_tab");
        contents[tabIndex].classList.add("activeContent");
    }
});

    $('.slider-one').owlCarousel({
    loop:false,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }

})

    $('.slider-two').owlCarousel({
    loop:false,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }

})

    $('.owl-carousel-tabtwo').owlCarousel({
    margin:10,
    loop:false,
    autoWidth:true,
    items:4})

    $('.owl-carousel-tabthree').owlCarousel({
    margin:10,
    loop:false,
    autoWidth:true,
    items:4})

    $('.owl-carousel-tabfour').owlCarousel({
    margin:10,
    loop:false,
    autoWidth:true,
    nav: true,
    items:4})

    document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const content = currentItem.querySelector('.accordion-content');
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== currentItem && item.classList.contains('active_accord')) {
                    item.classList.remove('active_accord');
                    item.querySelector('.accordion-header').classList.remove('active_accord');
                    item.querySelector('.accordion-content').classList.remove('show');
                }
            });
            currentItem.classList.toggle('active_accord');
            header.classList.toggle('active_accord');
            content.classList.toggle('show');
        });
    });
});

// menu

    let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})


<!-- CTA popup close -->

$(document).ready(function($) {
  $('.btnOpenForm').on('click', function(event) {
    event.preventDefault();
    $('.form-popup-bg').addClass('is-visible');
  });

  $('.form-popup-bg').on('click', function(event) {
    if (
      $(event.target).is('.form-popup-bg') || 
      $(event.target).closest('#btnCloseForm').length > 0
    ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
});

// <!-- Marque -->

class LogosMarquee {
	constructor({containerSelector, trackSelector = ".marquee__track", speed = 60} = {}) {
		this.container = document.querySelector(containerSelector);
		this.track = this.container ? this.container.querySelector(trackSelector) : null;
		this.speed = speed;

		if (!this.container || !this.track) return;

		this.trackWidth = this.track.getBoundingClientRect().width;
		this.pos = 0;
		this.start = null;
		this.rafId = null;

		this.setup();
		this.animate = this.animate.bind(this);
		requestAnimationFrame(this.animate);
	}

	setup() {
		this.clone = this.track.cloneNode(true);
		this.container.appendChild(this.clone);
		this.container.style.willChange = "transform";
	}

	animate(timestamp) {
		if (!this.start) this.start = timestamp;
		const elapsed = timestamp - this.start;
		this.pos = -(elapsed / 1000) * this.speed;
		if (Math.abs(this.pos) >= this.trackWidth) {
			this.start = timestamp;
			this.pos = 0;
		}
		this.container.style.transform = `translateX(${this.pos}px)`;
		this.rafId = requestAnimationFrame(this.animate);
	}

	destroy() {
		cancelAnimationFrame(this.rafId);
		if (this.clone) this.clone.remove();
		this.container.style.transform = "";
		this.container.style.willChange = "";
	}
}

window.addEventListener("load", () => {
	new LogosMarquee({
		containerSelector: ".marquee__ctn-why",
		trackSelector: ".marquee__track",
		speed: 80
	});
	new LogosMarquee({
		containerSelector: ".marquee__ctn-fivestar",
		trackSelector: ".marquee__track",
		speed: 80
	});
});

// Scroll animation

$('.content').each( function(i){
  
    var bottom_of_object= $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).height();
    
    if( bottom_of_object > bottom_of_window){
      $(this).addClass('hidden');
    }
});
  
  
$(window).scroll( function(){
    $('.hidden').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
    
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},700);
        }
    });
});


// Video

  const wrappers = document.querySelectorAll('.video-wrapper-feedback');

  wrappers.forEach(wrapper => {
    wrapper.style.position = "relative";
    wrapper.style.width = "100%";
    wrapper.style.cursor = "pointer";

    wrapper.addEventListener('click', () => {
      wrappers.forEach(w => {
        const poster = w.getAttribute('data-poster');
        const videoId = w.getAttribute('data-video');
        w.innerHTML = `<img src="${poster}" alt="Preview"
                          style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">`;
      });

      const videoId = wrapper.getAttribute('data-video');
      wrapper.innerHTML = `
        <iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&autopause=1&dnt=1"
          frameborder="0"
          allow="autoplay; fullscreen; encrypted-media"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          allowfullscreen>
        </iframe>`;
    });
  });

const statContainer = document.querySelector('.stat_container');

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        const numberSpans = statContainer.querySelectorAll('.stat_number span');

        numberSpans.forEach(span => {
            const target = +span.dataset.target;
            let current = 0;
            const duration = 2000; 
            const startTime = performance.now(); 

            const animate = (currentTime) => {
                const elapsedTime = currentTime - startTime; 
                const progress = Math.min(elapsedTime / duration, 1); 


                current = Math.floor(progress * target);
                span.textContent = current;


                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    span.textContent = target;
                }
            };
            
            requestAnimationFrame(animate);
        });

        observer.unobserve(statContainer);
    }
}, {
    threshold: 0.5
});

observer.observe(statContainer);

// CTA popup on scroll
    
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.form-popup-bg');
  const closeBtn = document.getElementById('btnCloseForm');

  setTimeout(() => {
    popup.classList.add('is-visible');
  }, 15000);
});

// close_cta

$(document).ready(function($) {
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('#menu').addClass('close_mcta');
      $('header').addClass('close_mcta');
      $('.menu_logo').addClass('scale_logo');

    } else {
      $('#menu').removeClass('close_mcta');
      $('header').removeClass('close_mcta');
        $('.menu_logo').removeClass('scale_logo');
    }
  });
});