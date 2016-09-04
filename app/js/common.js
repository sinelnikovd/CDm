$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}

	$('#select_firm, #select_sort').selectize();

	var companySelect = $('#select_company').selectize({
		//plugins: ['dropdown_header'],
		render: {
			option: function(item, escape) {
				res = '<div class="option" data-stat="'+item.stat+'">'+
					'<span class="val">'+escape(item.text)+'</span>'+
					'</div>';
				return res;
			},
			item: function(data, escape) {
				console.log(data)
				return '<div class="item" data-stat="'+data.stat+'">' 
						+ escape(data.text) 
						+ '</div>';
			},
		},
	});


	$('.tab-container').easytabs();

	$('.question').each(function() {
		var tooltip = $(this).find('.question__tooltip'),
			tooltipWrap = $(this);
		$(this).mouseover(function(){
				/*var tooltipLeft = tooltipWrap.offset().left + tooltip.outerWidth() + tooltipWrap.outerWidth() + 10 > $(window).width()+10 ? 0-tooltip.outerWidth()-10 : tooltipWrap.outerWidth() + 10,
					tooltipTop = tooltipWrap.offset().top + tooltip.outerHeight() > $('.reviews__list').offset().top + $('.reviews__list').height() ? 0-tooltip.outerHeight()-10 + tooltipWrap.outerHeight() : 10;
				tooltip.css({left:tooltipLeft, top:tooltipTop});*/
				tooltip.fadeIn(0);
			}).mouseout(function(){
				tooltip.fadeOut(0);
			});

	});

});