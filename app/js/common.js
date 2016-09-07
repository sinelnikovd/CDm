$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}

	$('#select_firm').selectize();

	$('#select_company').selectize({
		//plugins: ['dropdown_header'],
		render: {
			option: function(item, escape) {
				res = '<div class="option" data-stat="'+item.stat+'">'+
					'<span class="val">'+escape(item.text)+'</span>'+
					'</div>';
				return res;
			},
			item: function(data, escape) {
				return '<div class="item" data-stat="'+data.stat+'">' 
						+ escape(data.text) 
						+ '</div>';
			},
		},
	});


	$('#select_sort').selectize({
		//plugins: ['dropdown_header'],
		render: {
			option: function(item, escape) {
				var icon = '';
				if(item.icon != undefined) icon = '<i class="icon icon_'+item.icon+'"></i>';
				res = '<div class="option">'+
					icon+
					'<span class="val">'+escape(item.text)+'</span>'+
					'</div>';
				return res;
			},
			item: function(data, escape) {
				var icon = '';
				if(data.icon != undefined) icon = '<i class="icon icon_'+data.icon+'"></i>';
				return '<div class="item">'
						+ icon
						+ '<span class="val">'+escape(data.text)+'</span>'
						+ '</div>';
			},
		},
	});

	$('.tab-container').easytabs();

	$('.question').each(function() {
		var tooltip = $(this).find('.question__tooltip'),
			tooltipWrap = $(this);
		$(this).mouseover(function(){
				tooltip.fadeIn(0);
			}).mouseout(function(){
				tooltip.fadeOut(0);
			});

	});

	$('.account__name').click(function(){
		$(this).closest('.account').addClass('active');
		$(this).closest('.account').find('.account__dropdown').slideDown(300);
	});

	$('.account__back').click(function() {
		var account = $(this).closest('.account');
		account.find('.account__dropdown').slideUp(300,function() {
			account.removeClass('active');
		});
	});

	$('.icon-link').tooltipster({
		theme: ['tooltipster-customized'],
	});

	moment.locale('ru');
	console.log(moment().format('YYYY-DD-MM'))

	$('.datetimepiker').each(function(){
		var container = $(this).closest('.container'),
			value = moment().add(-1, 'week').format('D MMMM YYYY') + ' - ' + moment().format('D MMMM YYYY');
		$(this).val(value);
		$(this).dateRangePicker({
			autoClose: true,
			format: 'D MMMM YYYY',
			separator: ' - ',
			language: 'ru',
			endDate: moment().format('D MMMM YYYY'),
			container: container,
		});

	});

});