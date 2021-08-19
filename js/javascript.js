const VISOR = document.getElementById('visor');
function insert(num)
{
  if (VISOR.innerHTML === '0') {
    VISOR.innerHTML = num;
    return;
  }
  var numero = document.getElementById('visor').innerHTML;
  document.getElementById('visor').innerHTML = numero + num;
}
function clean()
{
  document.getElementById('visor').innerHTML = "";
}
function back()
{
  var resultado = document.getElementById('visor').innerHTML;
  document.getElementById('visor').innerHTML = resultado.substring(0, resultado.lenght -1);
}
function calcular()
{
  var resultado = document.getElementById('visor').innerHTML;
  if (resultado)
  {
    document.getElementById('visor').innerHTML = eval(resultado);
  }
}
