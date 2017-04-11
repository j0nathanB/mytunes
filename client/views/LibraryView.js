// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',
  collection: Songs,

  initialize: function() {
    var that = this;
    this.collection.fetch({
      success : function (response) {
        console.log('success');
        that.render();
      },
      error: function(errorResponse) {
        console.log(errorResponse);
      }
    });
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
console.log(this.collection.models);
    this.$el.html('<th>Library</th>').append(
      this.collection.models.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
