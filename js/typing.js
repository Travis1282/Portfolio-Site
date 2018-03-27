window.addEventListener('keydown', keydown);
// const iframe = document.getElementsById('iframe');
const iframe = document.getElementById('iframe')

keyCodeToChar = {8:"Backspace",32:"Space",13:"Enter",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]"};

let typed = '';

function keydown(e) {
    if(keyCodeToChar[e.which] == 'Enter'){
      registernewSubmittion(typed)
      typed += keyCodeToChar[e.which]
      typed = '';

    }else if (keyCodeToChar[e.which] == 'Backspace' && lineLength >= 1){
      if (lineLength >= 1){
          terminal.innerText = terminal.innerText.slice(0, -1);
          lineLength--
          typed = typed.slice(0, -1)
          blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)'
        }
      }else if (keyCodeToChar[e.which] == 'Space' && lineLength >= 1){
              terminal.innerText += '\u00A0'; 
              lineLength++ ; 
              typerCounter++ ;
      }else{ if (keyCodeToChar[e.which] != null){
        speed = 10;
        typed+=keyCodeToChar[e.which]
                typerCounter = 0;

        printChar(keyCodeToChar[e.which]);
        console.log(keyCodeToChar[e.which])
      }
  }

}



const registernewSubmittion = (submission) => {
  console.log(submission)
  if(submission == 'git'){
      let win = window.open('https://github.com/Travis1282/', '_blank');
      win.focus();
      text = 'openining...¶¶';
      draw()
  }else if(submission == 'linkedin'){
      let win = window.open('https://www.linkedin.com/in/travis-clark/', '_blank');
      win.focus();
      text = 'openining...¶¶';
      draw()
  }else if(submission == 'whirr'){
    iframe.src = 'http://whirr-login.herokuapp.com/';
    text = '¶¶loading '+ submission +'.....¶¶';
    loadNewResource()
  }else if(submission == 'ppsqft-chicago'){
    iframe.src = 'https://travis1282.github.io/PPSQFT-Chicago/';
    text = '¶¶loading '+ submission +'.....¶¶';
    loadNewResource()
  }else if(submission == 'agent-link'){
    iframe.src = 'http://realestateleadgenerator.herokuapp.com';
    text = '¶¶loading '+ submission +'.....¶¶';
    loadNewResource()
  }else if(submission == 'bird-city'){
    iframe.src = 'https://travis1282.github.io/Bird-City/';
    text = '¶¶loading '+ submission +'.....¶¶';
    loadNewResource()  
  }else if(submission == 'about-me'){
      terminal.innerText += '\n';
      terminal.innerText += about;
      terminal.innerText += '\n\n';
      window.scrollTo(0,document.body.scrollHeight);
      lineLength = 0;       
      blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)';
  }else if(submission == 'whirr-about'){
      terminal.innerText += '\n';
      terminal.innerText += whirr;
      terminal.innerText += '\n\n';
      window.scrollTo(0,document.body.scrollHeight);
      lineLength = 0;       
      blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)';
  }else if(submission == 'ppsqft-chicago-about'){
      terminal.innerText += '\n';
      terminal.innerText += ppsqftchicago;
      terminal.innerText += '\n\n';
      window.scrollTo(0,document.body.scrollHeight);
      lineLength = 0;       
      blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)';
  }else if(submission == 'agent-link-about'){
      terminal.innerText += '\n';
      terminal.innerText += agentlink;
      terminal.innerText += '\n\n';
      window.scrollTo(0,document.body.scrollHeight);
      lineLength = 0;       
      blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)';
  }else if(submission == 'bird-city-about'){
      terminal.innerText += '\n';
      terminal.innerText += birdcity;
      terminal.innerText += '\n\n';
      window.scrollTo(0,document.body.scrollHeight);
      lineLength = 0;       
      blinker.style.transform ='translateX('+ lineLength * 9.6 +'px)';
   }else{
      text = "¶¶\'"+ submission+"\' is not a command¶¶use: about-me, git, linkedin, sqft-chicago, sqft-chicago-about, whirr, whirr-about, agent-link, agent-link-about bird-city, bird-city-about¶"
      speed = 1;
      waiting = false;
      draw();
      console.log(text)
    }
  } 

const loadNewResource = () =>{
    window.removeEventListener('keydown', keydown);
    waiting = false;
    speed = 1;
    draw();
    setTimeout(function() {iframeActivate.doToggle()}, 2000);//wait one second before opening flyin window
        
}



// keyCodeToChar = {8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause/Break",20:"Caps Lock",27:"Esc",32:"Space",33:"Page Up",34:"Page Down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Windows",93:"Right Click",96:"Numpad 0",97:"Numpad 1",98:"Numpad 2",99:"Numpad 3",100:"Numpad 4",101:"Numpad 5",102:"Numpad 6",103:"Numpad 7",104:"Numpad 8",105:"Numpad 9",106:"Numpad *",107:"Numpad +",109:"Numpad -",110:"Numpad .",111:"Numpad /",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Num Lock",145:"Scroll Lock",182:"My Computer",183:"My Calculator",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};
// keyCharToCode = {"Backspace":8,"Tab":9,"Enter":13,"Shift":16,"Ctrl":17,"Alt":18,"Pause/Break":19,"Caps Lock":20,"Esc":27,"Space":32,"Page Up":33,"Page Down":34,"End":35,"Home":36,"Left":37,"Up":38,"Right":39,"Down":40,"Insert":45,"Delete":46,"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,"L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,"W":87,"X":88,"Y":89,"Z":90,"Windows":91,"Right Click":93,"Numpad 0":96,"Numpad 1":97,"Numpad 2":98,"Numpad 3":99,"Numpad 4":100,"Numpad 5":101,"Numpad 6":102,"Numpad 7":103,"Numpad 8":104,"Numpad 9":105,"Numpad *":106,"Numpad +":107,"Numpad -":109,"Numpad .":110,"Numpad /":111,"F1":112,"F2":113,"F3":114,"F4":115,"F5":116,"F6":117,"F7":118,"F8":119,"F9":120,"F10":121,"F11":122,"F12":123,"Num Lock":144,"Scroll Lock":145,"My Computer":182,"My Calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222};


