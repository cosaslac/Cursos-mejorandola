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

alert("Estas en un campo minado \n"+
		"Selecciona una posición entre el 0 y 2 para X y para Y");

var x = prompt("Selecciona una posición para X (entre 0 y 2)");
var y = prompt("Selecciona una posición para Y (entre 0 y 2)");



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
