function pvp2(form) {
  var change1 = form.cat.value;
    if (change1 == "piedra" || "papel" || "tijeras") {
      document.getElementById('view1').style.display = "none";
      document.getElementById('view2').style.display = "block";
    }
}
function pvp3(form) {
  var change2 = form.dog.value;
    if (change2 == "piedra" || "papel" || "tijeras") {
      document.getElementById('view2').style.display = "none";
    }
  pvp4()
}
function pvp4() {
  var user1 = document.getElementById('incat').cat.value;
  var user2 = document.getElementById('indog').dog.value;

  var aude = document.getElementById('audioempate');
  var audg = document.getElementById('gatogana');
  var audp = document.getElementById('perrogana');

  switch (true) {
    case user1==user2:

      aude.play();
      console.log("empate");
      document.getElementById('view7').style.display = "block";
      document.getElementsByClassName('result1')[4].innerHTML = "Gato escogió "+user1;
      document.getElementsByClassName('result2')[4].innerHTML = "Perro escogió "+user2;
      break;
    case user1=='piedra'&&user2=='papel':
      console.log("gana_user2");
      document.getElementById('view5').style.display = "block";
      document.getElementsByClassName('result1')[2].innerHTML = "Gato escogió Piedra!";
      document.getElementsByClassName('result2')[2].innerHTML = "Perro escogió Papel!";
      audp.play();
      break;
    case user1=='piedra'&&user2=='tijeras':
      console.log("gana_user1");
      document.getElementById('view3').style.display = "block";
      document.getElementsByClassName('result1')[0].innerHTML = "Gato escogió Piedra!";
      document.getElementsByClassName('result2')[0].innerHTML = "Perro escogió Tijeras!";
      audg.play();
      break;
    case user1=='papel'&&user2=='piedra':
      console.log("gana_user1");
      document.getElementById('view4').style.display = "block";
      document.getElementsByClassName('result1')[1].innerHTML = "Gato escogió Papel!";
      document.getElementsByClassName('result2')[1].innerHTML = "Perro escogió Piedra!";
      audg.play();
      break;
    case user1=='papel'&&user2=='tijeras':
      console.log("gana_user2");
      document.getElementById('view6').style.display = "block";
      document.getElementsByClassName('result1')[3].innerHTML = "Gato escogió Papel!";
      document.getElementsByClassName('result2')[3].innerHTML = "Perro escogió Tijeras!";
      audp.play();
      break;
    case user1=='tijeras'&&user2=='piedra':
      console.log("gana_user2");
      document.getElementById('view5').style.display = "block";
      document.getElementsByClassName('result1')[2].innerHTML = "Gato escogió Tijeras!";
      document.getElementsByClassName('result2')[2].innerHTML = "Perro escogió Piedra!";
      audp.play();
      break;
    case user1=='tijeras'&&user2=='papel':
      console.log("gana_user1");
      document.getElementById('view3').style.display = "block";
      document.getElementsByClassName('result1')[0].innerHTML = "Gato escogió Tijeras!";
      document.getElementsByClassName('result2')[0].innerHTML = "Perro escogió Papel!";
      audg.play();
      break;
    default:
  break;

  }

}
function pvc(form) {
  var change = form.dog.value;
    if (change == "piedra" || "papel" || "tijeras") {
      document.getElementById('viewpvc').style.display = "none";
    }
  pvc2()
}
function pvc2() {
  var user = document.getElementById('indog').dog.value;

  var selectitem = ["piedra", "papel", "tijeras"];
  var pickitem = function () {
  var item = selectitem[Math.floor(Math.random() * 3)];
  return item;
  };

  var cpu = pickitem ()

  var aude = document.getElementById('audioempate');
  var audg = document.getElementById('gatogana');
  var audp = document.getElementById('perrogana');

  console.log("usuario eligio:"+user)
  console.log("la maquina eligio:"+cpu)

  switch (true) {
    case cpu==user:
      console.log("empate");
      document.getElementById('view7').style.display = "block";
      document.getElementsByClassName('result2pvc')[4].innerHTML = "CPU escogió "+cpu;
      document.getElementsByClassName('result1pvc')[4].innerHTML = "Perro escogió "+user;
      aude.play();
      break;
    case cpu=='piedra'&&user=='papel':
      console.log("gana_user2");
      document.getElementById('view5').style.display = "block";
      document.getElementsByClassName('result2pvc')[2].innerHTML = "CPU escogió Piedra!";
      document.getElementsByClassName('result1pvc')[2].innerHTML = "Perro escogió Papel!";
      audp.play();
      break;
    case cpu=='piedra'&&user=='tijeras':
      console.log("gana_user1");
      document.getElementById('view3').style.display = "block";
      document.getElementsByClassName('result2pvc')[0].innerHTML = "CPU escogió Piedra!";
      audg.play();
      document.getElementsByClassName('result1pvc')[0].innerHTML = "Perro escogió Tijeras!";
      break;
    case cpu=='papel'&&user=='piedra':
      console.log("gana_user1");
      document.getElementById('view4').style.display = "block";
      document.getElementsByClassName('result2pvc')[1].innerHTML = "CPU escogió Papel!";
      document.getElementsByClassName('result1pvc')[1].innerHTML = "Perro escogió Piedra!";
      audg.play();
      break;
    case cpu=='papel'&&user=='tijeras':
      console.log("gana_user2");
      document.getElementById('view6').style.display = "block";
      document.getElementsByClassName('result2pvc')[3].innerHTML = "CPU escogió Papel!";
      document.getElementsByClassName('result1pvc')[3].innerHTML = "Perro escogió Tijeras!";
      audp.play();
      break;
    case cpu=='tijeras'&&user=='piedra':
      console.log("gana_user2");
      document.getElementById('view5').style.display = "block";
      document.getElementsByClassName('result2pvc')[2].innerHTML = "CPU escogió Tijeras!";
      document.getElementsByClassName('result1pvc')[2].innerHTML = "Perro escogió Piedra!";
      audp.play();
      break;
    case cpu=='tijeras'&&user=='papel':
      console.log("gana_user1");
      document.getElementById('view3').style.display = "block";
      document.getElementsByClassName('result2pvc')[0].innerHTML = "CPU escogió Tijeras!";
      document.getElementsByClassName('result1pvc')[0].innerHTML = "Perro escogió Papel!";
      audg.play();
      break;
    default:
  break;

  }

}
function playaud (){
  var aud = document.getElementById('audiocat');
    aud.play();
}
function playaud2 (){
  var aud = document.getElementById('audiodog');
    aud.play();
}
