// var sound;
var button = [1,2,3,4,5,6,7,8];
var names = ['C','D','E','F','G','A','B','C'];
var pitches = [261.626,293.665,329.628,349.228,391.995,440.000,493.883,523.251];



function setup() {
  
  createCanvas(600, 650);
  background(150);
  textSize(32);
  text('Keyboard', 100, 30);
  

// create buttons 
    var p = 145;
  for (var i = 0; i < 8; i++){
    button[i] = createButton(names[i]);
    button[i].position(p, 50);
    p = p + 40;
 }
    
   
    
// create notes 
for(var j = 0; j < 8; j++){
      names[j] = new p5.Oscillator([pitches[j]], ['triangle']);
      names[j].amp(0);
      names[j].start();
      names[j].playing = false;
}  
  
  //mousePressed 
  
  button[0].mousePressed(toggle);
  button[1].mousePressed(toggleOne);
  button[2].mousePressed(toggleTwo);
  button[3].mousePressed(toggleThree);
  button[4].mousePressed(toggleFour);
  button[5].mousePressed(toggleFive);
  button[6].mousePressed(toggleSix);
  button[7].mousePressed(toggleSeven);

}


// toggle each note seperatly. Havent figured out how to not repeat code
    
function toggle () {
  
  if(!names[0].playing){
    names[0].amp(.5);
    names[0].playing = true;
  } else {
    names[0].amp(0);
    names[0].playing = false;
 }
}
  
function toggleOne () {
  
  if(!names[1].playing){
    names[1].amp(.5);
    names[1].playing = true;
  } else {
    names[1].amp(0);
    names[1].playing = false;
 }
} 


function toggleTwo () {
  
  if(!names[2].playing){
    names[2].amp(.5);
    names[2].playing = true;
  } else {
    names[2].amp(0);
    names[2].playing = false;
 }
} 


function toggleThree () {
  
  if(!names[3].playing){
    names[3].amp(.5);
    names[3].playing = true;
  } else {
    names[3].amp(0);
    names[3].playing = false;
 }
} 

function toggleFour () {
  
  if(!names[4].playing){
    names[4].amp(.5);
    names[4].playing = true;
  } else {
    names[4].amp(0);
    names[4].playing = false;
 }
} 

function toggleFive () {
  
  if(!names[5].playing){
    names[5].amp(.5);
    names[5].playing = true;
  } else {
    names[5].amp(0);
    names[5].playing = false;
 }
} 


function toggleSix () {
  
  if(!names[6].playing){
    names[6].amp(.5);
    names[6].playing = true;
  } else {
    names[6].amp(0);
    names[6].playing = false;
 }
} 


function toggleSeven () {
  
  if(!names[7].playing){
    names[7].amp(.5);
    names[7].playing = true;
  } else {
    names[7].amp(0);
    names[7].playing = false;
 }
} 
  
  
  

function draw() {
  


}



