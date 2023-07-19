function toggleMode() {
  const html = document.documentElement;

  // if (html.classList.contains('light')){
  //     html.classList.remove('light')
  // } else {
  //     html.classList.add('light')
  // }

  html.classList.toggle("light");
}




function calcularIdadeCachorro() {
  var dataNascimento = new Date('2023-05-27'); // Data de nascimento do cachorro
  var dataAtual = new Date(); // Data atual

  var diferencaMeses = (dataAtual.getMonth() - dataNascimento.getMonth()) + (12 * (dataAtual.getFullYear() - dataNascimento.getFullYear()));

  if (dataAtual.getDate() < dataNascimento.getDate()) {
    diferencaMeses--;
  }

  var idadeCachorro = '';

  if (diferencaMeses === 1) {
    idadeCachorro = "1 mês";
  } else if (diferencaMeses < 12) {
    idadeCachorro = diferencaMeses + " meses";
  } else {
    var diferencaAnos = Math.floor(diferencaMeses / 12);
    var mesesRestantes = diferencaMeses % 12;

    if (diferencaAnos === 1) {
      idadeCachorro = diferencaAnos + " ano";
    } else {
      idadeCachorro = diferencaAnos + " anos";
    }

    if (mesesRestantes === 1) {
      idadeCachorro += " e 1 mês";
    } else if (mesesRestantes > 1) {
      idadeCachorro += " e " + mesesRestantes + " meses";
    }
  }

  document.getElementById("idade-cachorro").textContent = idadeCachorro;
}

calcularIdadeCachorro(); // Chama a função inicialmente

setInterval(calcularIdadeCachorro, 1000 * 60 * 60 * 24); // Atualiza a idade do cachorro a cada dia
