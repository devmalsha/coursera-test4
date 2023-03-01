(function (window) {
  let helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  window.helloSpeaker = helloSpeaker;
  var speakWord = "Hello";
})(window);
