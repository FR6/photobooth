jQuery(function() {  
	$ = jQuery;

	$('#btn-grab').click(function() {

		$.getJSON('http://192.168.0.102:8080/grab?callback=?', function(res){
			//console.log(res);
			var $inner = $('#slideshow .carousel-inner');
			
			$('.item.active', $inner).removeClass('active');

			var items_in_group = 1; //4;

			for(var i = items_in_group; i >= 1; i--){

				var active = i == 1 ? 'active' : '';

				$inner.prepend(
					'<div class="item '+active+'">'+
				    '  <img src="'+window.wpath+'files/'+res.group+'-'+i+'.jpg" />'+
				    '</div>'
				);
			}			
		});
	});
});