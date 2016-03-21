$( document ).ready(function() {



var displayvolume = $('#displayvolume')
var currentvolume = 1;

var aladdin = document.getElementById('aladin');
var beautyBeast = document.getElementById('beautybeast');
var frozen = document.getElementById('frozen');
var hercules = document.getElementById('hercules');
var littleMermaid = document.getElementById('mermaid');
var lionking = document.getElementById('lionking');


var hakuna = document.getElementById('hakuna');
var aladdinSong = document.getElementById('onejump');
var beautyBeastSong = document.getElementById('beOurGuest');
var frozenSong = document.getElementById('letItGo');
var herculesSong = document.getElementById('gospelTruth');
var littleMermaidSong = document.getElementById('underTheSea');

var stop = document.getElementById('stop');
var mute = document.getElementById('mute');
var unmute = document.getElementById('unmute');
var volumeincrease = document.getElementById('volumeup');
var volumedecrease = document.getElementById('volumedown');
var jukes = new Jukebox();

function Jukebox(){
	this.play= function(song){
		song.play();
		song.volume = currentvolume;
		displayvolume.text((currentvolume*100).toFixed(0) + "%")
		console.log(currentvolume)
	}
	this.pause = function(song){
		song.pause();
	}
	this.next = function(song){

	}
	this.previous = function(song){

	}
	
	this.volumeUp = function(volume){
		if( volume < 1  ){
		  currentvolume += .05
		  displayvolume.text((currentvolume*100).toFixed(0) + "%")
		}
		
	}
	this.volumeDown = function(volume){
		if(volume>0){
		  currentvolume -= .05
		  displayvolume.text((currentvolume*100).toFixed(0) + "%")
		}

	}
}

function currentSong(name, movie){
	this.name = name;
	this.movie = movie;
}

var songtext = $('#song')
var movietext = $('#movie')

lionking.addEventListener('mouseover', function(){
	jukes.play(hakuna)
	hakunaMatata = new currentSong("Hakuna Matata", "The Lion King")
	songtext.text(hakunaMatata.name);
	movietext.text(hakunaMatata.movie);
});
lionking.addEventListener('mouseout', function(){
	jukes.pause(hakuna)
	songtext.text("");
	movietext.text("");
});

aladdin.addEventListener('mouseover', function(){
	jukes.play(aladdinSong)
	onejumpahead = new currentSong("One Jump Ahead", "Aladdin")
	songtext.text(onejumpahead.name)
	movietext.text(onejumpahead.movie)
});
aladdin.addEventListener('mouseout', function(){
	jukes.pause(aladdinSong)
	songtext.text("");
	movietext.text("");
});
frozen.addEventListener('mouseover', function(){
	jukes.play(frozenSong)
	frozenletitgo = new currentSong("Let it Go", "Frozen")
	songtext.text(frozenletitgo.name);
	movietext.text(frozenletitgo.movie);
});
frozen.addEventListener('mouseout', function(){
	jukes.pause(frozenSong)
	songtext.text("");
	movietext.text("");
});

littleMermaid.addEventListener('mouseover', function(){
	jukes.play(littleMermaidSong)
	undersea = new currentSong("Uner the Sea", "The Little Mermaid")
	songtext.text(undersea.name);
	movietext.text(undersea.movie);
});
littleMermaid.addEventListener('mouseout', function(){
	jukes.pause(littleMermaidSong)
	songtext.text("");
	movietext.text("");
});
hercules.addEventListener('mouseover', function(){
	jukes.play(herculesSong)
	herculesgospel = new currentSong("The Gospel Truth", "Hercules")
	songtext.text(herculesgospel.name);
	movietext.text(herculesgospel.movie);
});
hercules.addEventListener('mouseout', function(){
	jukes.pause(herculesSong)
	songtext.text("");
	movietext.text("");
});
beautybeast.addEventListener('mouseover', function(){
	jukes.play(beautyBeastSong)
	beast = new currentSong("Be Our Guest", "Beauty and the Beast")
	songtext.text(beast.name);
	movietext.text(beast.movie);
});
beautyBeast.addEventListener('mouseout', function(){
	jukes.pause(beautyBeastSong)
	songtext.text("");
	movietext.text("");
});


volumeincrease.addEventListener('click', function(e){
	jukes.volumeUp(currentvolume)
});
volumedecrease.addEventListener('click', function(e){
	jukes.volumeDown(currentvolume)
});

$('#lionking').click(function(){
	$('#lionking').addClass("animate");
})

$('#frozen').click(function(){
	$('#frozen').addClass("animate");
})

$('#aladin').click(function(){
	$('#aladin').addClass("animate");
})

$('#mermaid').click(function(){
	$('#mermaid').addClass("animate");
})

$('#hercules').click(function(){
	$('#hercules').addClass("animate");
})

$('#beautybeast').click(function(){
	$('#beautybeast').addClass("animate");
})

});



