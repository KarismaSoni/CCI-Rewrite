$(function(){
	//land's color and border color
	if($('#land').find('path').eq(0).attr('fill') != 'undefined'){
		$('#land').find('path').attr({'fill':wmConfig['default']['landcolor']}).css({'stroke':wmConfig['default']['bordercolor']});
	}
	if($('#islands').find('line').eq(0).attr('fill') != 'undefined'){
		$('#islands').find('line').attr({'fill':wmConfig['default']['landcolor']}).css({'stroke':wmConfig['default']['bordercolor']});
	}

	//configuration for title text's shadow
	$('.tip').css({
		'box-shadow':'1px 2px 4px '+wmConfig['default']['namesShadowColor'],
		'-moz-box-shadow':'2px 3px 6px '+wmConfig['default']['namesShadowColor'],
		'-webkit-box-shadow':'2px 3px 6px '+wmConfig['default']['namesShadowColor'],
	});

	//configuration for map shadow
	if($('#shadow').find('path').eq(0).attr('fill') != 'undefined'){
		var shadowOpacity = wmConfig['default']['shadowOpacity'];
		var shadowOpacity = parseInt(shadowOpacity);
		if (shadowOpacity >=100){shadowOpacity = 1;}else if(shadowOpacity <=0){shadowOpacity =0;}else{shadowOpacity = shadowOpacity/100;}

		$('#shadow').find('path').attr({'fill':wmConfig['default']['shadowcolor']}).css({'fill-opacity':shadowOpacity})
};


	var points_len = wmConfig['points'].length;
	if( points_len > 0){
		var xmlns = "http://www.w3.org/2000/svg";
		var tsvg_obj = document.getElementById("map_points");
		var svg_circle,svg_rect;
		for(var i=0;i<points_len;i++){
			if (wmConfig['points'][i]['shape']=="circle"){
				svg_circle = document.createElementNS(xmlns, "circle");
				svg_circle.setAttributeNS(null, "cx", wmConfig['points'][i]['pos_X']+1);
				svg_circle.setAttributeNS(null, "cy", wmConfig['points'][i]['pos_Y']+1);
				svg_circle.setAttributeNS(null, "r", wmConfig['points'][i]['diameter']/2);
				svg_circle.setAttributeNS(null, "fill", wmConfig['default']['shadowcolor']);
				svg_circle.setAttributeNS(null, "style",'fill-opacity:'+shadowOpacity);
				svg_circle.setAttributeNS(null, "id",'map_points_shadow_'+i);
				tsvg_obj.appendChild(svg_circle);
				svg_circle = document.createElementNS(xmlns, "circle");
				svg_circle.setAttributeNS(null, "cx", wmConfig['points'][i]['pos_X']);
				svg_circle.setAttributeNS(null, "cy", wmConfig['points'][i]['pos_Y']);
				svg_circle.setAttributeNS(null, "r", wmConfig['points'][i]['diameter']/2);
				svg_circle.setAttributeNS(null, "fill", wmConfig['points'][i]['upcolor']);
				svg_circle.setAttributeNS(null, "stroke",wmConfig['points'][i]['outline']);
				svg_circle.setAttributeNS(null, "stroke-width",wmConfig['points'][i]['thickness']);
				svg_circle.setAttributeNS(null, "id",'map_points_'+i);
				tsvg_obj.appendChild(svg_circle);
				dynamicAddEvent(i);
			}
			else if(wmConfig['points'][i]['shape']=="rectangle"){
				svg_rect = document.createElementNS(xmlns, "rect");
				svg_rect.setAttributeNS(null, "x", wmConfig['points'][i]['pos_X']- wmConfig['points'][i]['width']/2+1);
				svg_rect.setAttributeNS(null, "y", wmConfig['points'][i]['pos_Y']- wmConfig['points'][i]['height']/2+1);
				svg_rect.setAttributeNS(null, "width", wmConfig['points'][i]['width']);
				svg_rect.setAttributeNS(null, "height", wmConfig['points'][i]['height']);
				svg_rect.setAttributeNS(null, "fill", wmConfig['default']['shadowcolor']);
				svg_rect.setAttributeNS(null, "style",'fill-opacity:'+shadowOpacity);
				svg_rect.setAttributeNS(null, "id",'map_points_shadow_'+i);
				tsvg_obj.appendChild(svg_rect);
				svg_rect = document.createElementNS(xmlns, "rect");
				svg_rect.setAttributeNS(null, "x", wmConfig['points'][i]['pos_X']- wmConfig['points'][i]['width']/2);
				svg_rect.setAttributeNS(null, "y", wmConfig['points'][i]['pos_Y']- wmConfig['points'][i]['height']/2);
				svg_rect.setAttributeNS(null, "width", wmConfig['points'][i]['width']);
				svg_rect.setAttributeNS(null, "height", wmConfig['points'][i]['height']);
				svg_rect.setAttributeNS(null, "fill", wmConfig['points'][i]['upcolor']);
				svg_rect.setAttributeNS(null, "stroke",wmConfig['points'][i]['outline']);
				svg_rect.setAttributeNS(null, "stroke-width",wmConfig['points'][i]['thickness']);
				svg_rect.setAttributeNS(null, "id",'map_points_'+i);
				tsvg_obj.appendChild(svg_rect);
				dynamicAddEvent(i);
			}
		}
	}
});
function dynamicAddEvent(id){
	var obj = $('#map_points_'+id);
	
	if(wmConfig['points'][id]['enable'] == true){
		obj.attr({'cursor':'pointer'});
		obj.hover(function(){
			$('#tip').show().html(wmConfig['points'][id]['hover']);
			obj.css({'fill':wmConfig['points'][id]['overcolor']})
		},function(){
			$('#tip').hide();
			obj.css({'fill':wmConfig['points'][id]['upcolor']});
		})
		//clicking effect
		obj.mousedown(function(){
			obj.css({'fill':wmConfig['points'][id]['downcolor']});
		})
		obj.mouseup(function(){
			obj.css({'fill':wmConfig['points'][id]['overcolor']});
			if(wmConfig['points'][id]['target'] == '_blank'){
				window.open(wmConfig['points'][id]['url']);	
			}else if(wmConfig['points'][id]['target'] == '_self'){
				window.location.href=wmConfig['points'][id]['url'];
			}else{
			}
		})
		obj.mousemove(function(e){
				var x=e.pageX+10, y=e.pageY+15;
				var tipw=$('#tip').outerWidth(), tiph=$('#tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#tip').css({left:x, top:y})
			})
		}
}