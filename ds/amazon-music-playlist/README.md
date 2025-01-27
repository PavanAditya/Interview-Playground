### Problem: Design Amazon Music Playlist

#### Background

In a music streaming application, users create and manage custom playlists. To create an engaging user experience, the application needs to support operations to manipulate these playlists efficiently.

#### Task
You are required to design a Playlist class that represents a music playlist using a linked list. The class should support the following operations:

1. **Add Song:** Add a new song to the playlist. If the song already exists in the playlist, it should not be added again.
2. **Remove Song:** Remove a song from the playlist. If the song does not exist, return an appropriate message.
3. **Play Next:** Play the next song in the playlist. If the playlist is empty, return a message indicating that there are no songs to play.
4. **Shuffle Playlist:** Randomly shuffle the songs in the playlist. You should implement this in a way that does not create a new list but rearranges the existing nodes.

#### Class Definition
Your Playlist class should include the following methods:

* ```add_song(title: str) -> str```: Adds a song with the given title to the playlist.

  * Returns a message indicating success or that the song already exists.

* ```remove_song(title: str) -> str```: Removes the song with the specified title from the playlist.
  * Returns a message indicating success or that the song was not found.

* ```play_next() -> str```: Plays the next song in the playlist.

  * Returns the title of the song being played, or a message that there are no songs to play.

* ```shuffle_playlist() -> str```: Shuffles the songs in the playlist.

  * Returns a message indicating that the playlist has been shuffled.

#### Example Usage
```
const playlist = new Playlist();  
console.log(playlist.addSong("Song A"));  // Output: Added 'Song A' to the playlist.  
console.log(playlist.addSong("Song B"));  // Output: Added 'Song B' to the playlist.  
console.log(playlist.addSong("Song A"));  // Output: Song already exists in the playlist.  
console.log(playlist.playNext());          // Output: Playing 'Song A'.  
console.log(playlist.removeSong("Song C")); // Output: Song not found in the playlist.  
console.log(playlist.removeSong("Song A")); // Output: Removed 'Song A' from the playlist.  
console.log(playlist.shufflePlaylist());    // Output: Shuffled the playlist.  
console.log(playlist.playNext());           // Output: Playing 'Song B' (or next song). 
``` 

#### Constraints
* Assume titles of the songs are unique strings.
* The operations should be efficient, handling moderate playlist sizes.

#### Objective
Implement the Playlist class and its methods to perform the operations as stated above
