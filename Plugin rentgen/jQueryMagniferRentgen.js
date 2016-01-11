$.fn.magniferRentgen = function() {

	return this.each(function() {

		var th        = $(this),
		dataImage     = th.data("image"),
		dataImageZoom = th.data("image-zoom"),
		dataSize      = th.data("size");
		
		th
			.addclass("magniferRentgen")
			.append("
				<img class='data-image' src='" + dataImage + "'>
				<div class='magnifer-loupe'>
					<img src='" + dataImageZoom + "'
				")
			.find(".data-image");




	});

};