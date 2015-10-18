minimalistic-gallery-plugin
===========================
**A jQuery plugin for a clean and minimalistic gallery**  
Take a look at the demo here: [sanlil.github.io/gallery](http://sanlil.github.io/gallery)

Setup
-----
###HTML
Put each image in a div of the class *galleryImg* and then choose between the classes *portrait* or *landscape* 
depending on the orientation of the picture. Ensure that all images are included in the div with the id *gallery*. 
If you want a caption, add your text to the 'alt' attribute.

For example:  
```html
<div id="gallery">
    <div class="galleryImg portrait">
        <img src="images/first_pic.jpg"/>
    </div>
    <div class="galleryImg landscape">
        <img src="images/second_pic.jpg" alt="The second picture"/>
    </div>
</div>
```

###CSS
Include this stylesheet on your site:  
[minimalistic-gallery-plugin-style.css](https://raw.github.com/Sanlil/minimalistic-gallery-plugin/master/minimalistic-gallery-plugin-style.css)

###JavaScript
Include the plugin code on your site:  
[minimalistic-gallery-plugin.js](https://raw.github.com/Sanlil/minimalistic-gallery-plugin/master/minimalistic-gallery-plugin.js)

To run the code, write:  
```javascript
	$(document).ready( function() {
		$('.galleryImg').galleryPlugin();
	});
```

Pass along a color code as attribute if you want the hover effect to be in another color then white.

And don't forget to include jQuery before you run the code!  
[W3School - jQuery Install](http://www.w3schools.com/jquery/jquery_install.asp)

Contribution
------------
Report issues and requests [here](https://github.com/Sanlil/minimalistic-gallery-plugin/issues)  
and feel free to submit your own code

Author
------
Sandra Liljeqvist  
**Date:** 2014-01-01  
