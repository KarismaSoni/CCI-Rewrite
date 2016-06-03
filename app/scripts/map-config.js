var wmConfig = {
	'default':{
		'landcolor':'#D3D3D3', //land color
		'bordercolor':'#DCDCDC', //borders between countries
		'shadowcolor':'#000000', //shadow color below the points
		'shadowOpacity':'75', //shadow opacity, value, 0-100
		'namesShadowColor':'#666666', //tooltip shadow color
	},
	'points':[
	{
		'shape':'circle',//choose the shape of the pin circle or rectangle
		'hover': '<u><b>COLOR COMMUNICATIONS, INC. | WASHINGTON DC</b></u><br><span style="color:black; background-color:#80B2FF;">Sales Offices<br>Phone:(800) 458-5743</span>',//the content of the hover popup
		'pos_X':146,//location of the pin on X axis
		'pos_Y':107,//location of the pin on Y axis
		'diameter':7,
		'outline':'#F5F5F5',//outline color of the pin
		'thickness':0,//thickness of the line (0 to hide the line)
		'upcolor':'#1975FF',//color of the pin when map loads
		'overcolor':'#80B2FF',//color of the pin when mouse hover
		'downcolor':'#80B2FF',//color of the pin when clicked 
		//(trick, if you make this pin un-clickable > make the overcolor and downcolor the same)
		'url':'http://www.ccicolor.com',//URL of this pin
		'target':'_blank',//'_blank' opens URL in new window//'_self' opens URL in the same window //'none' pin is not clickable
		'enable':true,//true/false to enable/disable this pin
	},
	{
		'shape':'circle',
		'hover': '<u><b>COLOR COMMUNICATIONS, INC.| BUFFALO, NY</b></u><br><span style="color:black; background-color:#E680CC;">Sales Offices<br>Phone:(800) 458-5743</span>',
		'pos_X':145.6,
		'pos_Y':96.8,
		'diameter':7,
		'outline':'#F5F5F5',
		'thickness':0,
		'upcolor':'#D119A3',
		'overcolor':'#E680CC',
		'downcolor':'#E680CC',
		'url':'http://www.ccicolor.com',
		'target':'_blank',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': '<b> COLOR COMMUNICATIONS, INC. ERIE | CASTLEREA, IRELAND </b></u><br><span style="color:black; background-color:#FFE066;"<b></b>Full Production & Manufacturing Facilities<br>Phone: +353 94 96 21000</span>',
		'pos_X':287,
		'pos_Y':73,
		'diameter':7,
		'outline':'#F5F5F5',
		'thickness':0,
		'upcolor':'#FFE066',
		'overcolor':'#FFFFB2',
		'downcolor':'#FFFFB2',
		'url':'http://www.ccicolor.com',
		'target':'_blank',
		'enable':true,
	},
	{
	'shape':'circle',
		'hover': '<b> COLOR COMMUNICATIONS, INC. AUSTRALASIA | AUCKLAND, NEW ZEALAND </b></u><br><span style="color:black; background-color:#B280FF;"<b></b>Full Production & Manufacturing Facilities<br>Phone: +64 9 274 6027</span>',
		'pos_X':649,
		'pos_Y':291,
		'diameter':7,
		'outline':'#F5F5F5',
		'thickness':0,
		'upcolor':'#7519FF',
		'overcolor':'#B280FF',
		'downcolor':'#B280FF',
		'url':'http://www.ccia.co.nz/',
		'target':'_blank',
		'enable':true,
	},
	{
	'shape':'circle',
		'hover': '<b> COLOR COMMUNICATIONS, INC. NORTH AMERICA | CHICAGO, IL </b></u><br><span style="color:black; background-color:#FFA366;"<b></b>North America Headquarters<br>Phone:(800) 458-5743 </span>',
		'pos_X':127,
		'pos_Y':97,
		'diameter':7,
		'outline':'F5F5F5',
		'thickness':0,
		'upcolor':'#FF6600',
		'overcolor':'#FFC299',
		'downcolor':'#FFC299',
		'url':'http://www.ccicolor.com',
		'target':'_blank',
		'enable':true,
	},
	{
	'shape':'circle',
		'hover': '<u><b>COLOR COMMUNICATIONS, INC.| CLEVELAND, OH</b></u><br><span style="color:black; background-color:#00FF99;">Sales Offices<br>Phone:(800) 458-5743</span>',
		'pos_X':138,
		'pos_Y':100,
		'diameter':7,
		'outline':'#00FF99',
		'thickness':0,
		'upcolor':'#00FF99',
		'overcolor':'#99FFCC',
		'downcolor':'#99FFCC',
		'url':'http://www.ccicolor.com',
		'target':'_blank',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': '<b> COLOR COMMUNICATIONS, INC. EUROPE AND UK | THE NETHERLANDS </b></u><br><span style="color:black; background-color:#99EBED;"<b></b>Full Production & Manufacturing Facilities<br>Phone: +31 650 50 29 25</span>',
		'pos_X':303,
		'pos_Y':81,
		'diameter':7,
		'outline':'#00CED1',
		'thickness':0,
		'upcolor':'#00CED1',
		'overcolor':'#99EBED',
		'downcolor':'#99EBED',
		'url':'http://www.ccicolor.com',
		'target':'_blank',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': '<b> COLOR COMMUNICATIONS, INC. | INDIA </b></u><br><span style="color:black; background-color:#A30000;"<b></b>Full Production & Manufacturing Facilities<br>Phone: +64 9 274 6027</span>',
		'pos_X':460,
		'pos_Y':141,
		'diameter':7,
		'outline':'#A30000',
		'thickness':0,
		'upcolor':'#A30000',
		'overcolor':'#E68080',
		'downcolor':'#E68080',
		'url':'http://www.ccicolor.com',
		'target':'_blank',
		'enable':true,
	}
	]
}
