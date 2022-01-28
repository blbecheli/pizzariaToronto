// ativa o box de mensagem
function showIt2() {
    document.getElementById("msg1").style.visibility = "visible";
  }
  setTimeout("showIt2()", 5000); // Depois 5 segs
  // desativa o box de mensagem
  function hiddenIt() {
    document.getElementById("msg1").style.visibility = "hidden";
  }
  setTimeout("hiddenIt()", 15000); // Depois 15 segs
  // ativa novamente o box de mensagem
  function showIt3() {
    document.getElementById("msg1").style.visibility = "visible";
  }
  setTimeout("showIt3()", 35000); // Depois 35 segs
  // Clique para esconder o box de mensagem
  msg1.onclick = function() {
      document.getElementById('msg1').style.visibility = "hidden"; 
  };