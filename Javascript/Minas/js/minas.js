function explocion ()
{
	alert("¡Boom!");
	document.write("<h1>¡BOOM! - Elejiste mal has perdido...</h1>");
}
function ganas()
{
	document.write("Ganaste");
}

//1 hay bomba - 0 no hay bomba;
var campo=[	[1,0,0],[0,1,0],[1,1,1]	];
var texto=["cesped","bomba"];

//alert("Estas en un campo minado \n"+"Selecciona una parte del cesped");

document.getElementByClassName('cuadricula').addEventListener("click", function(){
	alert("seleccione uno");
});

if (x<3 && y<3)
{
	var posicion = campo[x][y];
	document.write("Elejiste "+texto[posicion]+"<br />");
	
	if (posicion==1)
	{
		explocion();
	}else
	{
		ganas();
	}
}
else
{
	document.write("Te saliste del campo...");
	explocion();
}
