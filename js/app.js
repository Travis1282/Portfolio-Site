let		typeSpeed = 1, //in milliseconds
		brouserWidth = (window.innerWidth-80)/9.6,
		brouserHeight = (window.innerHeight-80)/20,
		lineLength = 0, // keep track of printed text length on each line
		numberOfLines = 0, // keep track of printed lines 
		typerCounter = 0, // for iterating over the text arrays
		speed = 1,
		waiting = false,
		blink = true,
		text = '',
		nextLoad = '';


//////////////// GET THE IP ADDRESS OF THE VISITOR, ADD A COOKIE AND GET THEIR LAST LOGIN ////////////////

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
    	retured = JSON.parse(xhr.responseText)
    	console.log(retured)
        ip = retured.ip
		today = new Date()
		console.log(document.cookie)
        if ((document.cookie) == ''){ /// if there is no cookie
        	 text = 'First login: '+ (today.toGMTString().slice(0,-3)) +' on ' +ip+'¶';
        }else{
		    let decodedCookie = decodeURIComponent(document.cookie);
		    let ca = decodedCookie.split(';')

				    let name = "name=";
				    for(let i = 0; i < ca.length; i++) {
				        let c = ca[i];
				        while (c.charAt(0) == ' ') {
				            c = c.substring(1);
				        }
				        if (c.indexOf(name) == 0) {
				        	text = 'Last login:'+ (c.replace("name=", "")+'¶');

				        }
				    }
		
				// }console

		}	
		now = today.toGMTString().slice(0,-3)
		today.setTime(today.getTime() + 31600000000);
		const expires = "; expires=" + today.toGMTString();
       	document.cookie = 'name	='+ now +'on '+ip + expires+";";
       	draw();
       	nextLoad = intro;
    }
}

xhr.open('GET', 'https://freegeoip.net/json/', true);
xhr.send(null); 



//////////////// MAINTAIN THE BROWSER WIDTH AND HEIGHT VARIBLES ON RESIZE ////////////////

window.onresize = (event) => {
  	brouserWidth = (window.innerWidth-70)/10;
  	brouserHeight = (window.innerHeight-70)/20;
  	// console.log(brouserWidth + ' px width', brouserHeight + ' px height');
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
terminal.style.fontSize = '16px';
terminal.style.color = 'white';
terminal.style.zIndex = '1'
terminal.style.position = 'relative';
terminal.style.wordWrap ='break-word';


let blinker = document.createElement('div'); /// create the blinker for the text input area
terminalWindow.appendChild(blinker);
blinker.style.backgroundColor = '#0f0';
blinker.style.width = '10px';
blinker.style.height = '20px';
blinker.style.marginTop = '-20px';
blinker.style.position = 'relative';


//////////////// SET TYPE IN AVAILALBE WINDOW ////////////////

const printChar = (charicters)=>{
  	let textArray =  charicters.split('') 
	// if (Math.floor(brouserWidth) < lineLength){ // inserts a return at the end of the window 
	//  	terminal.innerText += '\n';
	//  	numberOfLines++ ;
	//  	lineLength = 0;

	// }else 
	if (textArray.length >= typerCounter){ // adds text 
		if (textArray[typerCounter] == ' '){// handle spaces
			terminal.innerText += '\u00A0'; 
		}else if (textArray[typerCounter] === '¶'){
		 	numberOfLines++ ;
		 	lineLength = 0;				
		 	blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)';
		 	terminal.innerText += '\n';
		}
		else if(textArray[typerCounter] != null ){// inputs text to dom 
			terminal.innerText += textArray[typerCounter];
			blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)';
			window.scrollTo(0,document.body.scrollHeight);
		}else  { // end of inputsut 
			navagation()   
			// text = nextLoad
			typerCounter = -1
			lineLength--
		}
		lineLength++ ; 
		typerCounter++ ;
	}

  };


//////////////// TEXT PRINT ANIMATION FUNCTION ////////////////

function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw);
		if (waiting === false) {
			printChar(text)
			speed = 1;
		}else{ 
			// console.log(waiting)
			speed = 500;
			blinker.style.visibility = (blink = !blink) ? 'hidden' :  'visible' ; // blink the cursor 
			
		}

    }, speed);
}
 



// const loadOrder = {
// 	1:intro, 
// 	2:shellInstructions
// }

//////////////// INITIALIZE TEXT TO BE PRINTED ////////////////
const navagation = () => {

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	
		if (nextLoad == intro){
			text = intro; 
			console.log(text);
		    waiting = false;
		    speed = 1;
		    nextLoad = contact
		}else if(nextLoad == contact){
			text = nextLoad; 
			console.log(text);
		    waiting = false;
		    speed = 1;
		    nextLoad = shellInstructions;
		}else if(nextLoad == shellInstructions){
			text = ''
			terminal.innerHTML += mobileShellInstructions;
			 let nav = document.getElementsByClassName('mobileNav');
			 for (let i = 0; i < nav.length; i++) {
	    			nav[i].addEventListener('click', listener, false);
	    			console.log(nav[i])
				}
  				// nav.addEventListener("click", listener, false);

		    nextLoad = 'stop';
		}else if(nextLoad == 'stop'){
			waiting = true
		}
	
}else{
		if (nextLoad == intro){
			text = intro; 
			console.log(text);
		    waiting = false;
		    speed = 1;
		    nextLoad = contact
		}else if(nextLoad == contact){
			text = nextLoad; 
			console.log(text);
		    waiting = false;
		    speed = 1;
		    nextLoad = shellInstructions;
		}else if(nextLoad == shellInstructions){
			text = nextLoad; 
			console.log(text);
		    waiting = false;
		    speed = 1;
		    nextLoad = 'stop';
		}else if(nextLoad == 'stop'){
			waiting = true
		}
	}
}


const listener = (e) => {
	let path = e.path[0];
	console.log("hello")
	console.log(path.id)
	registernewSubmittion(path.id)
	
}

















 ////////////// Acsii art  ////////////

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







