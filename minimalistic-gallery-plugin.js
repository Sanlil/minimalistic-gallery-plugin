/** 
* minimalistic-gallery-plugin.js
* The jQuery code for the Minimalistic Gallery Plugin
* Sandra Liljeqvist, 2013
*/

(function ( $ ) {
	$.fn.galleryPlugin = function(thumbColor) {
		
		// Adding elements the lightbox
		$('#gallery').append("<div id='showImgDiv'><img id='showImg' src=''/><div id='clickable'><div id='left'><p>&lsaquo;</p></div><div id='right'><p>&rsaquo;</p></div></div><div id='textbar'></div></div><div id='overlay'></div>");
		
		return this.each(function() {
			var thisImgDiv = $(this);
			var next, nextImg;
			
			// Adding thumbnail hover effect
			$(this).append("<div class='thumbHover'></div>");
			if (thumbColor) {
				$('.thumbHover').css('background', thumbColor);
			}
			$(this).hover(
				function() {
					console.log('hover');
					$(this).find('.thumbHover').show();
				}, function() {
					$(this).find('.thumbHover').hide();
				}
			);
			
			// Position the lightbox in the middle and set the size of clickable areas and arrows
			var setPositions = function() {
				var left = ($(window).width()-$('#showImg').outerWidth())/2;
				var top = ($(window).height()-$('#showImg').outerHeight())/2;
				$('#showImgDiv').css('left', left+'px');
				$('#showImgDiv').css('top', top+'px');
				
				$('#clickable').css('height', $('#showImg').outerHeight()+'px');
				$('#clickable').css('width', $('#showImg').outerWidth()+'px');
				$('#right p').css('margin-top', ($('#showImg').height()-$('#right p').outerHeight())/2+'px');
				$('#left p').css('margin-top', ($('#showImg').height()-$('#right p').outerHeight())/2+'px');
			}
			
			// Set the size of the lightbox image to fit the window
			var setImgSize = function(thumbnail) {
				var imgSize = $(window).height()*0.9+'px';
				if ( $(thumbnail).hasClass('portrait') ) {
					console.log('portrait');
					$('#showImg').css('height', imgSize);
					$('#showImg').css('width', '');
				} if ( $(thumbnail).hasClass('landscape') ) {
					console.log('landscape');
					$('#showImg').css('width', imgSize);
					$('#showImg').css('height', '');
				}
			}
			
			// On click on a thumbnail, open the lightbox
			$(this).click( function() {
				console.log('click thumbnail '+$(this).find('img').attr('src'));
				console.log($(this).attr('id'));

				// Set lightbox attributes
				$('#showImg').attr('src', $(this).find('img').attr('src'));
				$('#showImgDiv').fadeIn();
				$('#overlay').fadeIn();
				if ($(this).find('img').attr('alt')) {
					$('#textbar').html('<p>'+$(this).find('img').attr('alt')+'<p>');
					$('#textbar').show();
				}	
				setImgSize(this);
				setPositions();
				
				//Hide lightbox on click outside 
				$('#overlay').click( function() {
					console.log('hide');
					$('#showImgDiv').hide();
					$('#textbar').hide();
					$('#overlay').fadeOut();
					$('#right').off();
					$('#left').off();
					$('#overlay').off();
				});
				
				// Show arrow on hover on the right part of the lightbox
				$('#right').hover(
					function() {
						console.log('hover right');
						$(this).find('p').css('margin-right','0px');
					}, function() {
						$(this).find('p').css('margin-right','-30px')
					}
				);
				
				// Show arrow on hover on the left part of the lightbox
				$('#left').hover(
					function() {
						console.log('hover left');
						$(this).find('p').css('margin-left','0px');
					}, function() {
						$(this).find('p').css('margin-left','-30px')
					}
				);
				
				// On click on the right side, change lightbox attributes to next image
				$('#right').click( function() {
					console.log('click right');
					console.log(thisImgDiv.next().attr('id'));
					if (thisImgDiv.next().hasClass('galleryImg')) {
						next = thisImgDiv.next();
						nextImg = next.find('img');
						console.log(nextImg.attr('src'));
						$('#showImg').attr('src', nextImg.attr('src'));
						thisImgDiv = next;
						setImgSize(thisImgDiv);
						setPositions();
					} else {
						console.log('no next');
					}
					if (thisImgDiv.find('img').attr('alt')) {
						$('#textbar').html('<p>'+thisImgDiv.find('img').attr('alt')+'<p>');
						$('#textbar').show();
					} else {
						$('#textbar').hide();
					}
				});
				
				// On click on the left side, change lightbox attributes to previous image
				$('#left').click( function() {
					console.log('click left');
					console.log(thisImgDiv.prev().attr('id'));
					if (thisImgDiv.prev().hasClass('galleryImg')) {
						next = thisImgDiv.prev();
						nextImg = next.find('img');
						console.log(nextImg.attr('src'));
						$('#showImg').attr('src', nextImg.attr('src'));
						thisImgDiv = next;
						setImgSize(thisImgDiv);
						setPositions();
					} else {
						console.log('no prev');
					}
					console.log('src: '+thisImgDiv.find('img').attr('src'));
					console.log('alt: '+thisImgDiv.find('img').attr('alt'));
					if (thisImgDiv.find('img').attr('alt')) {
						$('#textbar').html('<p>'+thisImgDiv.find('img').attr('alt')+'<p>');
						$('#textbar').show();
					} else {
						$('#textbar').hide();
					}
				});
			});
		});
	};
}( jQuery ));
