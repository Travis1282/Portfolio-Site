
let		typeSpeed = 1, //in milliseconds
		brouserWidth = window.innerWidth,
		brouserHeight= window.innerHeight,
		lineLength = 0, // keep track of printed text length on each line
		numberOfLines = 0, // keep track of printed lines 
		txt = '+'; // all text to be printed in the window 

//////////////// MAINTAIN THE BROWSER WIDTH AND HEIGHT VARIBLES ON RESIZE ////////////////

window.onresize = function(event) {
  	brouserWidth = window.innerWidth;
  	brouserHeight = window.innerHeight;
  	console.log(brouserWidth + ' px width', brouserHeight + ' px height');
};

//////////////// CREATE THE MAN WINDOW ////////////////

let terminalWindow = document.createElement('div');   // create main window 
document.body.appendChild(terminalWindow);
terminalWindow.id = 'terminal';
terminalWindow.style.margin = '40px';
terminalWindow.style.color = '#0bc';
terminalWindow.style.transform = 'translate(0, 20px, 0 20px)' 
terminalWindow.style.fontFamily = "'Courier New', Courier, monospace"


//////////////// SET THE TYPE IN AVAILALBE WINDOW ////////////////

setInterval(typer, 1); // animation set with milliseconds

function typer(txt){
	if ((brouserWidth-80)/10 <= lineLength){ // inserts a return at the end of the window 
	 	terminalWindow.innerText += "\n";
	 	numberOfLines ++ ;
	 	lineLength = 0;
	}else if((brouserHeight-80)/20 >= numberOfLines){ // adds text 
		terminalWindow.innerText += txt;
		lineLength ++ ; 
	}else{
		terminalWindow.innerText += '|';
		blinker()
	} 	 
}


//////////////// BLINKING CURSOR IF NOT CURRENTLY TYPING  ////////////////

function blinker(){
	// if ( ) 

}

// document.getElementById("terminal").addEventListener("click", function(){
//         var myElement = document.getElementById('text-element');
//         var startPosition = myElement.selectionStart;
//         var endPosition = myElement.selectionEnd;
        
//         // Check if you've selected text
//         if(startPosition == endPosition){
//             console.log("The position of the cursor is (" + startPosition + "/" + myElement.value.length + ")");
//         }else{
//             console.log("Selected text from ("+ startPosition +" to "+ endPosition + " of " + myElement.value.length + ")");
//         }
//     },false);



