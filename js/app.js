let		typeSpeed = 1, //in milliseconds
		brouserWidth = (window.innerWidth-80)/9.6,
		brouserHeight = (window.innerHeight-80)/20,
		lineLength = 0, // keep track of printed text length on each line
		numberOfLines = 0, // keep track of printed lines 
		typerCounter = 0, // for iterating over the text arrays
		speed = 0,
		waiting = false,
		blink = true,
		navagation = false;


//////////////// GET THE IP ADDRESS OF THE VISITOR, ADD A COOKIE AND GET THEIR LAST LOGIN ////////////////

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        	retured = JSON.parse(xhr.responseText)
        ip = retured.ip

		today = new Date()
		console.log(today)
		today.setTime(today.getTime() + 31600000000);
		console.log(today)

		const expires = "; expires=" + today.toGMTString();
		console.log(cookie = 'name	='+ ip + expires+";")
       	document.cookie = 'name	='+ ip + expires+";";
       	// savedCookie = document.cookie
       	console.log(document.cookie)

        draw();
    }
}

xhr.open('GET', 'https://freegeoip.net/json/', true);
xhr.send(null); 




//////////////// MAINTAIN THE BROWSER WIDTH AND HEIGHT VARIBLES ON RESIZE ////////////////

window.onresize = (event) => {
  	brouserWidth = (window.innerWidth-70)/10;
  	brouserHeight = (window.innerHeight-70)/20;
  	console.log(brouserWidth + ' px width', brouserHeight + ' px height');
};


//////////////// DOM MANIPULATION ////////////////

let terminalWindow = document.createElement('div');   // create main window container
document.body.appendChild(terminalWindow);
terminalWindow.style.margin = '40px';
terminalWindow.style.color = '#0bc';
terminalWindow.style.transform = 'translate(0, 20px, 0 20px)';

const terminal = document.createElement('div'); // create terminal window where the text lives
terminalWindow.appendChild(terminal);
terminal.style.fontFamily = "'Courier New', Courier, monospace";
terminal.style.color = 'white';
terminal.style.zIndex = '1'
terminal.style.position = 'relative';

let blinker = document.createElement('div'); /// create the blinker for the text input area
terminalWindow.appendChild(blinker);
blinker.style.backgroundColor = '#0f0';
blinker.style.width = '10px';
blinker.style.height = '20px';
blinker.style.marginTop = '-20px';
blinker.style.position = 'relative';


//////////////// SET TYPE IN AVAILALBE WINDOW ////////////////

const printChar = (text)=>{
  	let textArray =  text.split('') 
	if (Math.floor(brouserWidth) < lineLength){ // inserts a return at the end of the window 
	 	terminal.innerText += '\n';
	 	numberOfLines++ ;
	 	lineLength = 0;

	}else if (textArray.length >= typerCounter){ // adds text 
		if (textArray[typerCounter] == ' '){// handle spaces
				terminal.innerText += '\u00A0'; 
			}else if (textArray[typerCounter] != null ){// inputs text to dom 
				terminal.innerText += textArray[typerCounter];
				blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)';

			}else  { // end of input 
					lineLength--
				  	//blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)'
					waiting = true;
			}
			lineLength++ ; 
			typerCounter++ ;
	}

  };


 ////////////// CALCULATE NAVIGATION ////////////

// const calcNav = () => {
// 	let printableString = ''
// 	let navCenter = Math.floor(brouserWidth)/2;
// 	let spaceBetween = '' 
// 	for (k = 0; navCenter >= k; k++){
// 		spaceBetween += '.'
// 		// \u00A0
// 	}
// 	console.log(spaceBetween)
// 	for (i = 0; about.length-1 >= i; i++) {
// 			console.log(about.length)
// 			let navInstace = about[i]
// 			let splitString = navInstace.split('')
// 			let navCharLength = Math.ceil(navInstace.length / 5)
// 			// console.log(navInstace)
// 			//printableString += spaceBetween
// 			for (j = 0; navInstace.length-1 >= j; j++) {
// 				printableString += navInstace[j]
// 				//console.log(printableString)
// 			}
// 	}	printableString += spaceBetween

// 	console.log(printableString)
// 	return printableString
//   };
// calcNav()

//////////////// INITIALIZE INTODUCTORY WINDOW MESSAGE ////////////////

function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw);
		if (waiting == false) printChar(intro);
			else { 	
			speed = 500;
			blinker.style.visibility = (blink = !blink) ? 'hidden' :  'visible' ; // blink the cursor 
			
		}

    }, speed);
}
 






