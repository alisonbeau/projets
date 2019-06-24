/* Diaporama 1er */

var mesphotos = ['6.jpg','7.jpg','8.jpg','9.jpg']; 
var image_en_cours = 0;
  
function image() { 
	image_en_cours = image_en_cours + 1; 
 	if (image_en_cours == mesphotos.length) { 
		image_en_cours = 0; 
	}

	document.getElementById('ecran').src = 'image/'+mesphotos[image_en_cours]; 
} 

function precedente() { 
 	image_en_cours = image_en_cours - 1; 
 	if (image_en_cours < 0) { 
 	 	image_en_cours = mesphotos.length-1; 
 	} 

 	document.getElementById('ecran').src = 'image/'+mesphotos[image_en_cours]; 
}


function suivantes() { 
 	image_en_cours = image_en_cours + 1; 
 	if (image_en_cours < 0) { 
 	 	image_en_cours = mesphotos.length+1; 
 	}

 	document.getElementById('ecran').src = 'image/'+mesphotos[image_en_cours]; 
}


/* Drapeaux */


var drapeau = ['3.jpg','4.jpg','5.jpg']; 
var image_en_cours = 0;  

function image() { 
	image_en_cours = image_en_cours - 1; 
 	if (image_en_cours == drapeau.length) { 
	 	image_en_cours = 0; 
	}

	document.getElementById('drapeau').src = 'image/'+drapeau[image_en_cours]; 
} 

function drapeauSuivant() { 
 	image_en_cours = image_en_cours - 1; 
 	if (image_en_cours < 0) { 
 	 	image_en_cours = drapeau.length-1; 
 	} 

 	document.getElementById('drapeau').src = 'image/'+drapeau[image_en_cours]; 
}
