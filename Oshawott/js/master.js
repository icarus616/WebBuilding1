function evolvekey(self){
    if(self.value=='evolve'){
    document.getElementById("oshawott").src="Dewott.png";
    self.value="final evolve";
    $('h1').html("Dewott");
    }else if(self.value=="final evolve"){
        document.getElementById('oshawott').src="samurott.jpg";
        self.value="back to first";
        $('h1').html("Samurott");
    }else if(self.value=="back to first"){
        document.getElementById('oshawott').src="Oshawott.png";
        self.value="evolve";
        $('h1').html("Oshawott");
    }
}