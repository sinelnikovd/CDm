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


	$('.input-file').each(function() {
		var input = $(this).find('.input-file__input'),
			label = $(this).find('.input-file__label span'),
			labelVal = label.text();


		input.on('change', function(e) {
			var thisInput = $(this)[0],
				fileName = '';
			if( thisInput.files && thisInput.files.length > 1 )
				fileName = ( thisInput.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', thisInput.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.text(fileName);
			else
				label.text(labelVal);
		});
	});


	$('.input-image').each(function() {
		var input = $(this).find('.input-image__input'),
			img = $(this).find('.input-image__img img'),
			imgSrc = img.attr('src'),
			label = $(this).find('.input-image__label'),
			labelVal = label.text();


		input.on('change', function(e) {
			var thisInput = $(this)[0],
				fileName = '';
			if( thisInput.files && thisInput.files.length > 0 )
				if ( thisInput.files[0].type.match('image.*') ) {
					var reader = new FileReader();
					reader.onload = function(e) {
						img.attr('src', e.target.result);
					}
					reader.readAsDataURL(thisInput.files[0]);
					fileName = e.target.value.split( '\\' ).pop();
				}

			if( fileName )
				label.text(fileName);
			else{
				img.attr('src', imgSrc);
				label.text(labelVal);
				return false;
			}
		});
	});





	$('.static-data__btn').click(function(){
		var btn = $(this),
			label = btn.prev('.static-data'),
			input = btn.prevAll('.static-data__input');

		btn.hide();
		label.hide();
		input.val(label.text()).animate({width: "show"}, 300, function () {
			input.focus();
		});
		return false;
	});

	$(".faq__title").click(function () {
		if(!$(this).closest('.faq').hasClass('active')){
			var faq = $(this).closest(".faq"),
				body = faq.find(".faq__body");
				faq.addClass('active');
				body.slideDown();
		}
		return false;
	});


	$(".faq__control .btn_up").click(function () {
		if($(this).closest('.faq').hasClass('active')){
			var faq = $(this).closest(".faq"),
				body = faq.find(".faq__body");
				body.slideUp(400,function(){
					faq.removeClass('active');
				});

		}
		return false;
	});


	$('.faq').each(function(i){
		var faq = $(this),
			body = faq.find(".faq__body");
			body.slideUp(400,function(){
				faq.removeClass('active');
			});
	});

	


	$('.faq__frame').each(function(){
		var $frame = $(this),
			$wrap = $frame.closest('.faq__text');

		$frame.sly({
			speed: 300,
			activatePageOn: 'click',
			scrollBy: 100,
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.faq__text-control_down'),
			backward: $wrap.find('.faq__text-control_up'),
		});
	});





});


tinymce.init({
	selector: '.textarea-tiny',
	menubar: false,
	theme: 'modern',
	plugins: [
	'advlist autolink lists link image charmap hr anchor',
	'searchreplace wordcount visualblocks visualchars code fullscreen',
	'insertdatetime media nonbreaking save table contextmenu directionality',
	'emoticons template paste textcolor colorpicker textpattern imagetools'
	],
	toolbar1: 'insertfile undo redo | styleselect fontselect fontsizeselect | forecolor backcolor emoticons',
	toolbar2: 'bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media',
	image_advtab: true,
	templates: [
	{ title: 'Test template 1', content: 'Test 1' },
	{ title: 'Test template 2', content: 'Test 2' }
	],
	content_css: [
	'//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
	'//www.tinymce.com/css/codepen.min.css'
	]
});