1. This file declares a class, `Player`, instantiates it, and assigns it to a global `player` variable.
2. The `Player` class contains four methods:
    - `constructor()`
    - `playPause()`
    - `skipTo()`
    - `setVolume()`
3. The `constructor()` method sets initial values for the `currentlyPlaying`, `playState`, `volume`, and `soundObject` properties.
    - `currentlyPlaying` is set to the first item in `album.songs`.
    -  The initial `playState` is `"stopped"`.
    -  The `volume` is set to the number `80`.
    -  The `soundObject` instantiates a new `buzz.sound` object using the `soundFileUrl` property of `this.currentlyPlaying`. The `buzz` variable doesn't appear to be initialized here, so presumably it's a dependency loaded elsewhere.
4. The `playPause()` method accepts one parameter, `song`. It sets it to `this.currentlyPlaying` by default. It checks to see if `this.currentlyPlaying` is different from `song`, and if so, it:
    - Stops the `soundObject` property.
    - Removes the `"playing"` and `"paused"` classes from the `element` property of `this.currentlyPlaying`.
    - Sets `this.currentlyPlaying` to the function's parameter, `song`.
    - Changes the `playState` property to `"stopped"`.
    - Instantiates a new sound object using `this.currentlyPlaying`, which was just updated to `song`.
5. The `playPause()`method changes the `playstate` of `Player` and play or pause the `soundObject`.

if the `playState` property of `Player` is `"paused"` or `"stopped"`:
   - Plays `soundObject`
   - Changes `playState` property into `"playing"`
   - Removes the `paused` class from `element` property of `this.currentlyPlaying`, add the `playing` class to it.

if the `playState` property of `Player` is `"playing"`:
  - Pauses  `soundObject`
  - Changes `playState` property of this `Player` into `paused`
  - Removes the `playing` class from `element` property of `this.currentlyPlaying`, add the `paused` class to it.
6. The `skipTo()` method accepts one parameter, `percent`. it checks the `playState` of this `Player` and sets the time of `soundObject`.
  - If `this.playState` is not `"playing"`, the method `return` without doing anything.
  - Otherwise, use `setTime()` method of `this.soundObject`. First `getDuration()` of `this.soundObject`, then times `(percent/100)`, pass the result as a parameter to `setTime()` method.
7. The `setVolume()` method accepts one parameter, `percent`. it changes the `volume` property of this `Player` and set the volume of `this.soundObject`.
  - the `volume` property is set as equal to `percent`
  - `percent` is passed as a parameter to `setVolume()` method of `this.soundObject`
