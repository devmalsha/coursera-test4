(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
    "jimie",
  ];

  for (let i = 0; i < names.length; i++) {
    let firstLetter = names[i].charAt(0);
    if (firstLetter == "j" || firstLetter == "J") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
