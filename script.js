window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");


    //variáveis
    snake=[];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;


    //chamada da funçao jogo a cada 100ms
    setInterval(jogo, 100);

    //controles
    window.addEventListener("keydown", function(e){
        if(e.code === "ArrowRight"){
            velX=1;
            velY=0;
        }
        else if(e.code === "ArrowLeft"){
            velX=-1;
            velY=0;
        }
        else if(e.code==="ArrowUp"){
            velY=-1;
            velX=0;
        }
        else if(e.code==="ArrowDown"){
            velY=1;
            velX=0;
        }
   })


}

function jogo(){
    //config tela
    ctx.fillStyle = "#2ecc71";
    //distancia da borda horizontal, borda vert, largura e altura
    ctx.fillRect(0,0,canvas.width,canvas.height)

    //deslocamento da cobra
    positionX += velX;
    positionY += velY;

    //Espelhamento
    if(positionX < 0){
        positionX=grid;
    }
    if(positionX>grid){
        positionX=0;
    }
    if(positionY<0){
        positionY=grid;
    }
    if(positionY>grid){
        positionY=0;
    }
    
   //configuração da cobra
   ctx.fillStyle = "#8e44ad";
   for(let i=0; i<snake.length;i++){
       ctx.fillRect(snake[i].x*grid,snake[i].y*grid,grid-1,grid-1);
       if(snake[i].x==positionX && snake[i].y==positionY){
           tam = 3;
           positionX=10;
           positionY=10;
           velX=velY=0;
       }
   }


    //movimentação da cobra
    snake.push({x: positionX, y: positionY})

    //apagando
    while(snake.length>tam){
        snake.shift();
    }

    //configurando a comida
    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(foodX*grid,foodY*grid,grid-1,grid-1);

    //comendo a comida
    if(positionX==foodX && positionY==foodY) {
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }

}