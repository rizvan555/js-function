const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const reply = document.getElementById("reply");
function rechner() {
  reply.innerHTML = "Die Differenz ist: " + (input1.value - input2.value);
}
rechner();
