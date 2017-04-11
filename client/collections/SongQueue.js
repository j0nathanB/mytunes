// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  	this.on('add', function(song){
  		if(this.at(1) === undefined) {
  			this.playFirst();
  		}
  	});

  	this.on('ended', function(){
  		if (this.at(1)) {
  			this.shift();
  			this.playFirst();
  		}  		
  	});

  	this.on('dequeue', function(){
  		this.remove();
  	});

  },

  playFirst: function() {
  	if(this.at(0)){
  		this.at(0).play();
  	}
  }


});