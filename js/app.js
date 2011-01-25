$(document).ready(function() {
  $('#colorPicker').farbtastic('#colorInput');
	
  /* hook up the class prefix */
  var settings = {
    maxBorder:      20,  //px
    minFontSize:    10,
    maxFontSize:    30,
    minPadding:    	 1,
    maxPadding:    	10
  }
  
  var css = {
    className:      'minim',
    fontSize:       '15px',
    fontWeight:     '700',
    padding:        '7px 20px',
    borderRadius:   '3px',
    primaryColor:	'#3a89a8'
  };
  
  var extras = {
  	buttonText:		'Your Button',
  };
  
  var tmpl = [
    '.${className} {'
    ,'  display:                inline-block;'
    ,'  font-size:              ${fontSize};'
    ,'  font-weight:            ${fontWeight};'
    ,'  padding:                ${padding};'
    ,'  -moz-border-radius:     ${borderRadius};'
    ,'  border-radius:          ${borderRadius};'
    ,'  text-decoration:        none;'
    ,'}'
  ].join("\n");
  tmpl = $.template(tmpl, {compile:true});
  
  var buttonStyleTmpl = [
    'display:                 inline-block;'
    ,'font-size:              ${fontSize};'
    ,'font-weight:            ${fontWeight};'
    ,'padding:                ${padding};'
    ,'-moz-border-radius:     ${borderRadius};'
    ,'border-radius:          ${borderRadius};'
    ,'text-decoration:        none;'    
  ].join('');
  buttonStyleTmpl = $.template(buttonStyleTmpl, { compile: true} );
  
  var generateCss = function() { 
    $('#outputCss').html( tmpl.apply(css) );
  };

  var preview = function() { 
    generateCss();
    var style = buttonStyleTmpl.apply(css);
    $('.minim').attr( 'style', style);
  }
  
  /* hook up keyup event to the className input */
  var classNameInput = $('#className');
    classNameInput.keyup(function(event) { 
    css.className = $(classNameInput).val();
    preview();
  });
  
  /* init the sliders */
  var setBorderRadius = function(event,ui) { 
    css.borderRadius = ui.value + 'px';
    preview();
  };
  
  $("#borderRadiusSlider").slider({
    min:        0
    ,max:       settings.maxBorder
    ,slide:     setBorderRadius
    ,change:    setBorderRadius
	,value:		3
  });
  
  var setFontSize = function(event,ui) {
    css.fontSize = ui.value + 'px'; 
    preview();
  };
  $('#fontSizeSlider').slider({
    min:      settings.minFontSize
    ,max:     settings.maxFontSize
    ,slide:   setFontSize
    ,change:  setFontSize
	,value:   15
  });
  
  var setPadding = function(event,ui) {
    css.padding = ui.value + 'px'; 
    preview();
  };
  $('#paddingSlider').slider({
    min:      settings.minPadding
    ,max:     settings.maxPadding
    ,slide:   setPadding
    ,change:  setPadding
	,value:	  7
  });
  
  preview();  
});