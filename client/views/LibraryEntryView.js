// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {

    'click': function() {
        this.model.enqueue();
    }

    // if no song has changed state
      // play song
    // if song has changed state
      // on 2nd click enqueue song to queue list
  },

  render: function() {
    //console.log(this.model)
    return this.$el.html(this.template(this.model.attributes));
  }

});
