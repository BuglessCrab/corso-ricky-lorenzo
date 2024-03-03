up=false;
down=true;
right=false;
left=false;

var px=[];
var py=[];

px[0]=2
px[1]=3
py[0]=3
py[1]=3

var l = 2;


var x=3;
var y=3;

function mainCycle() {



    let game  = window.game;
   game.clear();
   


   if (game.getPixel(x,y) != "#FFF") {
       winner=2;
   }
        
     

   
    
    // game.setPixel(x,y,"green");
    
    for (i=0; i<l; i++) {
        game.setPixel (px[i], py[i],"pink")
    }



    if(up) {
        if(y>0) {
            y--;
        }

    }
    if(down) {
        if(y<19) {
            y++;
        }
    }
    if(left) {
        if(x>0) {
            x--
        }
        
    }
    if(right) {
        if(x<19) {
            x++
        }
        
    }

    for(i=0; i<(l-1); i++) {
        px[i] =px[i+1]
        py[i] =py[i+1]
    }
     px[l-1]=x 
     py[l-1]=y

    game.draw();
    game.nextFrame();
}

function keyPressed(keyCode) {
    console.log("Key Pressed: " + keyCode);

    
   




    if (keyCode == "w") {
        up = true;
        down = false;
        right= false;
        left = false;
    }

    if (keyCode == "s") {
        up = false;
        down = true;
        right= false;
        left = false;
    }
    
    
    if (keyCode == "d") {
        up = false;
        down = false;
        right= true;
        left = false;
    }

    if (keyCode == "a") {
        up = false;
        down = false;
        right= false;
        left = true;
    }
    

}



function keyReleased(keyCode) {
    console.log("Key Released: " + keyCode);
/*
    up = (keyCode == "ArrowUp")?false:up;
    down = (keyCode == "ArrowDown")?false:down;
    left = (keyCode == "ArrowLeft")?false:left;
    right = (keyCode == "ArrowRight")?false:right;
*/

 
}
