function addNota() {

        var aluno, nota1, nota2, nota3, sum, avg;
        aluno = (document.getElementById('aluno').value);
        nota1 = parseFloat(document.getElementById('nota1').value);
        nota2 = parseFloat(document.getElementById('nota2').value);
        nota3 = parseFloat(document.getElementById('nota3').value);
        sum = nota1 + nota2 + nota3;

        if (aluno.trim().length == 0) {
            alert("Nome do aluno não pode ficar vazio.");
            return;
        }
        if (isNaN(sum)) {
            alert("Dados inválidos");
            return
        }
        avg = Math.round(sum / 3)

        var boletim = document.getElementById('tableBoletim');
        var row = boletim.insertRow(-1);
        var cell1 = row.insertCell (0);
        var cell2 = row.insertCell (0);
        var cell3 = row.insertCell (0);
        var cell4 = row.insertCell (0);

        cell4.innerHTML = aluno;
        cell3.innerHTML = sum;
        cell2.innerHTML = avg;

        if (avg >= 70) {
            cell1.innerHTML = "<font color=green>Mandou Bem - Parabéns</font>";
        }   else {
            cell1.innerHTML = "<font color=red>Não foi dessa vez - Reprovado</font>";
            }

    LimparCampos ();

}

function limparCampos() {
    window.document.querySelector("#aluno").value = null;
    window.document.querySelector("#nota1").value = null;
    window.document.querySelector("#nota2").value = null;
    window.document.querySelector("#nota3").value = null;
}

function saveGridToLocalStorage() {
    let tableContent;
    tableContent = window.document.getElementById("tableBoletim").innerHTML;
    localStorage.setItem("boletim, tableContent");
}
function loadFromLocalStorage () {
    let tableContent = window.document.getItem("boletim")
    if (tableContent.trim().length > 0);
        document.getElementById('tableBoletim').innerHTML = tableContent;
}