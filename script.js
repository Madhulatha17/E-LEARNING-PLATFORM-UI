let progress = 0;

function updateProgress() {

if(progress < 100){

progress += 20;

document.getElementById("progress").style.width =
progress + "%";

document.getElementById("percentage").innerText =
progress + "% Completed";

}
}
