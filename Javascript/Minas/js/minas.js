function explocion ()
{
	alert("¡Boom!");
	document.write("<h1>¡BOOM! - Elejiste mal has perdido...</h1>");
}
function ganas(x,y)
{
	document.getElementById(x+'-'+y).setAttribute("src","img/hoyo.jpg");
}

//1 hay bomba - 0 no hay bomba;
var campo=[	[1,0,0],[0,1,0],[1,1,1]	];
var texto=["cesped","bomba"];

//alert("Estas en un campo minado \n"+"Selecciona una parte del cesped");

function minas(id)
{
	var arrayId=id.split("-");
	x=arrayId[0];
	y=arrayId[1];
	if (x<3 && y<3)
	{
		var posicion = campo[x][y];
		alert("Elejiste "+texto[posicion]);
		
		if (posicion==1)
		{
			explocion();
		}else
		{
			ganas(x,y);
		}
	}
	else
	{
		document.write("Te saliste del campo...");
		explocion();
	}
}


