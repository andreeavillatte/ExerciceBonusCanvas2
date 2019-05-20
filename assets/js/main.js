var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

// Lettre E
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth="2";
ctx.moveTo(20,150);    // Le tracé part du point
ctx.lineTo(60,150);
ctx.moveTo(20,150);    // Le tracé part du point
ctx.lineTo(20,250);
ctx.moveTo(20,250);
ctx.lineTo(60,250);
ctx.moveTo(20,250);
ctx.lineTo(20,350);
ctx.moveTo(20,350);
ctx.lineTo(60,350);
ctx.fill();
ctx.stroke();
ctx.closePath();      // Fermeture du chemin (facultative)
       
// Lettre N
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth="2";
ctx.moveTo(148,150);    // Le tracé part du point
ctx.lineTo(148,350);
ctx.moveTo(230,150);    // Le tracé part du point
ctx.lineTo(230,350);
ctx.moveTo(148,150);    // Le tracé part du point
ctx.lineTo(230,350);
ctx.fill();
ctx.stroke();
ctx.closePath();      // Fermeture du chemin (facultative)
       
// Chiffre 2
ctx.beginPath();              
ctx.lineWidth="8";
ctx.strokeStyle="#EA4E1D"; 
ctx.lineCap="square";
ctx.moveTo(60,150);
ctx.quadraticCurveTo(240,0,40,400);
ctx.moveTo(40,400);
ctx.quadraticCurveTo(70,380,125,360);
ctx.stroke();
// Ombre
ctx.beginPath();              
ctx.lineWidth="5";
ctx.strokeStyle="#EA4E1D"; 
ctx.lineCap="square";
ctx.moveTo(38,406);
ctx.quadraticCurveTo(68,386,123,366);
ctx.stroke();

//losanges
drawDiamond(270,150,1.5,'red');
drawDiamond(370,150,2,'green');

function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
};