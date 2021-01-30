class Form{
    constructor()
    {}
     
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(350,150);

        var input=createInput("name")
        input.position(350,300)
        var button=createButton("play")
        var greeting =createElement('h3');

        button.position(400,400);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            
             var name = input.value();

             playerCount+=1;
             player.update(name);
             player.updateCount(playerCount);

             greeting.html("hello "+name)
             greeting.position(130,160)
        });
        }
    











}


