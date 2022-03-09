function calcular(resultado) {
  document.getElementsByTagName("input")[0].value = eval(resultado);
  console.log(eval(resultado));
  // alert('Sua conta é igual a: ' + eval(resultado) )
  // document.getElementsByTagName('input')[0].value = ""
}
function valor(num) {
  num1 = document.getElementsByTagName("input")[0].value += num;
  //  console.log(num1)
  return num1;
}

function apagar() {
  document.getElementsByTagName("input")[0].value = "";
}
