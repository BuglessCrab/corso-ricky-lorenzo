up=false;
down=true;
right=false;
left=false;


up2=true;
down2=false;
right2=false
left2=false;

var x=3;
var y=3;
var x2=55;
var y2=55;
winner=0;
function mainCycle() {



    let game  = window.game;
   // game.clear();
   

   console.log(game.getPixel(x,y));

   if (game.getPixel(x,y) != "#FFF") {
       winner=2;
   }
        
   if (game.getPixel(x2,y2) != "#FFF") {
       winner=1;
}    

    if(winner>0) {
        console.log("winner is"+winner);
        return;
    }
    game.setPixel(x,y,"green");
    game.setPixel(x2,y2,"red");
    if(up) {
        if(y>0) {
            y--;
        }

    }
    if(down) {
        if(y<200) {
            y++;
        }
    }
    if(left) {
        if(x>0) {
            x--
        }
        
    }
    if(right) {
        if(x<60) {
            x++
        }
        
    }


    if(up2) {
        if(y2>0) {
            y2--;
        }

    }
    if(down2) {
        if(y2<60) {
            y2++;
        }
    }
    if(left2) {
        if(x2>0) {
            x2--
        }
        
    }
    if(right2) {
        if(x2<60) {
            x2++
        }
        
    }
    game.draw();
    game.nextFrame();
}

function keyPressed(keyCode) {
    console.log("Key Pressed: " + keyCode);

    if (keyCode == "ArrowUp") {
        up = true;
        down = false;
        right= false;
        left = false;
    }

    if (keyCode == "ArrowDown") {
        up = false;
        down = true;
        right= false;
        left = false;
    }
    
    if (keyCode == "ArrowRight") {
        up = false;
        down = false;
        right= true;
        left = false;
    }

    if (keyCode == "ArrowLeft") {
        up = false;
        down = false;
        right= false;
        left = true;
    }





    if (keyCode == "w") {
        up2 = true;
        down2 = false;
        right2= false;
        left2 = false;
    }

    if (keyCode == "s") {
        up2 = false;
        down2 = true;
        right2= false;
        left2 = false;
    }
    
    
    if (keyCode == "d") {
        up2 = false;
        down2 = false;
        right2= true;
        left2 = false;
    }

    if (keyCode == "a") {
        up2 = false;
        down2 = false;
        right2= false;
        left2 = true;
    }
    

}



function keyReleased(keyCode) {
    console.log("Key Released: " + keyCode);
/*
    up = (keyCode == "ArrowUp")?false:up;
    down = (keyCode == "ArrowDown")?false:down;
    left = (keyCode == "ArrowLeft")?false:left;
    right = (keyCode == "ArrowRight")?false:right;


    up2 = (keyCode == "w")?false:up2;
    down2 = (keyCode == "s")?false:down;
    left2 = (keyCode == "a")?false:left;
    right2 = (keyCode == "d")?false:right;
 */
}
