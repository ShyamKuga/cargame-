class Form{ 
    constructor(){
      this.input = createInput("Name")
      this.button = createButton('Play');
      this.greeting = createElement('h3');
 }
 hider(){
  this.input.hide()
  this.button.hide()
  this.greeting.hide()
 }
 display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, displayHeight/2-250);
    

    
    
    this.input.position(displayWidth/2, displayHeight/2-200);
    this.button.position(displayWidth/2, displayHeight/2-100);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
      player.name = this.input.value()
      playerCount+=1;
      player.index = playerCount  

      player.nameUp()
      player.update(playerCount);
     
      this.greeting.html("Hello " + name )
      this.greeting.position(displayWidth/2, displayHeight/2-200)
    })}}
