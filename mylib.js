function istouching(){
    if(block1.y-jumpingbox.y<block1.height/2+jumpingbox.height/2&&jumpingbox.x<130){
     jumpingbox.velocityY=jumpingbox.velocityY*(0);
     jumpingbox.velocityX=0
     jumpingbox.shapeColor="violet"
     music.stop();
    }
  }

  function istouching2(){
    if(block2.y-jumpingbox.y<block2.height/2+jumpingbox.height/2&&jumpingbox.x>130&&jumpingbox.x<285){
     jumpingbox.velocityY=jumpingbox.velocityY*(-1.5)
     jumpingbox.shapeColor="yellow"
     music.play()
    }
  }

  function istouching3(){
    if(block3.y-jumpingbox.y<block3.height/2+jumpingbox.height/2&&jumpingbox.x>285&&jumpingbox.x<435){
     jumpingbox.velocityY=jumpingbox.velocityY*(-2);
     jumpingbox.shapeColor="orange"
     music.play()
    }
  }
   
  function istouching4(){
    if(block4.y-jumpingbox.y<block4.height/2+jumpingbox.height/2&&jumpingbox.x>435&&jumpingbox.x<580){
     jumpingbox.velocityY=jumpingbox.velocityY*(-1);
     jumpingbox.shapeColor="lightgreen"
     music.play();
    }
  }   
 
  function bounce2(block8,jumpingbox){
    if(block8.x-jumpingbox.x<block8.width/2+jumpingbox.width/2){
      jumpingbox.velocityX=jumpingbox.velocityX*(-1);
      
    }
  }
    function bounce3(block9,jumpingbox){
      if(jumpingbox.y-block9.y<block9.height/2+jumpingbox.height/2){
        jumpingbox.velocityY=jumpingbox.velocityY*(-1);
        
      }
    }
    function bounce4(block10,jumpingbox){
      if(jumpingbox.x-block10.x<block10.width/2+jumpingbox.width/2){
        jumpingbox.velocityX=jumpingbox.velocityX*(-1);
        
      }
    }

    