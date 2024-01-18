function showButtons() {
  document.getElementById("buttonsContainer").style.display = "flex";
}

function editAnswer() {
  window.location.href = "https://github.com/orgs/community/discussions/23522";
}

function watchAgain() {
  var video = document.getElementById("vid1");
  video.currentTime = 0;
  video.play();
  document.getElementById("buttonsContainer").style.display = "none";
}
