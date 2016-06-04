/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

/*! skrollr-menu 1.0.3 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-menu | Free to use under terms of MIT license */
(function(t,e){"use strict";var n=500,a="sqrt",o=1,r="data-menu-top",i="data-menu-offset",u="data-menu-duration",c="data-menu-ignore",l=e.skrollr,s=e.history,f=!!s.pushState,h=function(e){return e!==t&&e?"A"===e.tagName.toUpperCase()?e:h(e.parentNode):!1},p=function(t){if(1===t.which||0===t.button){var e=h(t.target);e&&m(e)&&t.preventDefault()}},m=function(n,a){var o;if(y){if(n.hostname!==e.location.hostname)return!1;if(n.pathname!==t.location.pathname)return!1;o=n.hash}else o=n.getAttribute("href");if(!/^#/.test(o))return!1;if(!a&&null!==n.getAttribute(c))return!1;var l,h;if(h=T?T(n):n.getAttribute(r),null!==h)l=/p$/.test(h)?h.slice(0,-1)/100*t.documentElement.clientHeight:+h*k;else{var p=t.getElementById(o.substr(1));if(!p)return!1;l=v.relativeToAbsolute(p,"top","top");var m=p.getAttribute(i);null!==m&&(l+=+m)}f&&N&&!a&&s.pushState({top:l},"",o);var d=parseInt(n.getAttribute(u),10),q=A(v.getScrollTop(),l);return isNaN(d)||(q=d),E&&E(o,l),S&&!a?v.animateTo(l,{duration:q,easing:b}):g(function(){v.setScrollTop(l)}),!0},d=function(){if(e.location.hash&&t.querySelector){var n=t.querySelector('a[href="'+e.location.hash+'"]');n||(n=t.createElement("a"),n.href=e.location.hash),m(n,!0)}},g=function(t){e.setTimeout(t,1)};l.menu={},l.menu.init=function(r,i){v=r,i=i||{},b=i.easing||a,S=i.animate!==!1,A=i.duration||n,T=i.handleLink,k=i.scale||o,y=i.complexLinks===!0,E=i.change,N=i.updateUrl!==!1,"number"==typeof A&&(A=function(t){return function(){return t}}(A)),l.addEvent(t,"click",p),f&&l.addEvent(e,"popstate",function(t){var e=t.state||{},n=e.top||0;g(function(){v.setScrollTop(n)})},!1),d()},l.menu.click=function(t){m(t)};var v,b,A,S,T,k,y,E,N;g(function(){e.location.hash&&e.scrollTo(0,0)})})(document,window);


/*! jquery.timer-tools v0.1.0 by Andrey Mikhaylov (lolmaus) lolmaus@gmail.com, inspired by https://code.google.com/p/jquery-debounce/, MIT license  */
(function(){var t=[].slice;$.extend({delay:function(t,n){return setTimeout(n,t)},debounceLast:function(n,e,u){var l,r;if(arguments.length<2)throw"debounceLast called with less than two arguments";return 2===arguments.length&&(r=[void 0,e],e=r[0],u=r[1]),l=null,function(){var r;return r=1<=arguments.length?t.call(arguments,0):[],e=e||this,clearTimeout(l),l=$.delay(n,function(){return u.apply(e,r),l=null})}},debounceFirst:function(n,e,u){var l,r;if(arguments.length<2)throw"debounceLast called with less than two arguments";return 2===arguments.length&&(r=[void 0,e],e=r[0],u=r[1]),l=null,function(){var r;return r=1<=arguments.length?t.call(arguments,0):[],e=e||this,l||u.apply(e,r),clearTimeout(l),l=$.delay(n,function(){return l=null})}},throttle:function(n,e,u){var l,r;if(arguments.length<2)throw"debounceLast called with less than two arguments";return 2===arguments.length&&(r=[void 0,e],e=r[0],u=r[1]),l=null,function(){var r;return r=1<=arguments.length?t.call(arguments,0):[],e=e||this,l?void 0:(u.apply(e,r),l=$.delay(n,function(){return l=null}))}}})}).call(this);

/**
 * How to create a parallax scrolling website
 * Author: Petr Tichy
 * URL: www.ihatetomatoes.net
 * Article URL: http://ihatetomatoes.net/how-to-create-a-parallax-scrolling-website/
 */

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      initScroller();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
			  
		}, 10);
	});
	
	function initScroller(){
		
		// Manage menu and sections:
		var current_classname, original_menu_item;

		window.$menu_items = $('.menu-item');

		current_classname = '-current';

		original_menu_item = window.$menu_items.find("a[href='" + window.location.hash + "']").get(0);

		window.skrollr_instance = skrollr.init({
			forceHeight: false,
			render: $.throttle(100, function (skrollr_data) {
				var $active_menu_items, $current_menu_item, href;
				$active_menu_items = $menu_items.filter('.skrollable-between');
				$current_menu_item = skrollr_data.curTop < $window.height() / 2 ? $menu_items.first() : $active_menu_items.length === 1 ? $active_menu_items : $active_menu_items.length > 1 ? $active_menu_items.eq(1) : $menu_items.last();
				if ($current_menu_item.get(0) === $menu_items.get(0)) {
					return typeof history !== "undefined" && history !== null ? typeof history.pushState === "function" ? history.pushState(null, null, window.location.pathname + window.location.search) : void 0 : void 0;
				} else {
					href = $current_menu_item.find('a').attr('href') || '#';
					return typeof history !== "undefined" && history !== null ? typeof history.pushState === "function" ? history.pushState(null, null, href) : void 0 : void 0;
				}
			})
		});

		skrollr.menu.init(window.skrollr_instance);

		if (original_menu_item) {
			$.delay(1000, function () {
				return skrollr.menu.click(original_menu_item);
			});
		}
		
		// Resize sections:
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    $slideTall.height(winH*2);
	    $slideTall2.height(winH*3);
	    
	    // Refresh Skrollr after resizing our sections
	    window.skrollr_instance.refresh($('.homeSlide'));
	    
	}
		
} )( jQuery );