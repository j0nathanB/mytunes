client
├── collections
│   ├── SongQueue.js           - defines a backbone model class for the song queue.
│   └── Songs.js               - defines a backbone collection class for songs.
├── data
│   └── data.js                - defines an array of data regarding song files and
├── env
│   └── config.example.js      - defines the configuration needed to send AJAX requests
├── index.html                 - main html file
│
├── models
│   ├── App.js                 - defines a backbone model class for the whole app.
│   └── Song.js                - defines a backbone model class for songs.
└── views
    ├── AppView.js             - defines a backbone view class for the whole music app.
    ├── LibraryEntryView.js    - defines a backbone view class for the entries
    │                            that will appear within the library views.
    │                            these will be inserted using the "subview" pattern.
    ├── LibraryView.js         - defines a backbone view class for the music library.
    ├── PlayerView.js          - defines a backbone view class for the music player.
    ├── SongQueueEntryView.js  - defines a backbone view class for the song
    │                            queue entries.
    └── SongQueueView.js       - defines a backbone view class for the song queue.
