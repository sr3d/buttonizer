$(document).ready(function() {
  /* hook up the class prefix */
  var settings = {
    maxBorder:      20,  //px
    minFontSize:    14,
    maxFontSize:    30
  }
  
  var css = {
    className:      'mimim',
    fontSize:       '15px',
    fontWeight:     '700',
    padding:        '7px 20px',
    borderRadius:   '3px'
  };
  
  var tmpl = [
    '.${className} {'
    ,'  display:                inline-block;'
    ,'  font-size:              ${fontSize};'
    ,'  font-weight:            ${fontWeight};'
    ,'  padding:                ${padding};'
    ,'  -webkit-border-radius:  ${borderRadius};'
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
    ,'-webkit-border-radius:  ${borderRadius};'
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
    ,max:       settings.maxFontSize
    ,slide:     setBorderRadius
    ,change:    setBorderRadius
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
  });
  
  
  
  preview();  
});