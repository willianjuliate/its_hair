$("input:checkbox").click(function () {
    var dois_hr = $("input:checkbox:checked").length >= 2;
    var um_hr = $("input:checkbox:checked").length >= 1;
    $("input:checkbox").not(":checked").attr("disabled", dois_hr);

    if (um_hr || dois_hr) {
        $('.btn-header').text("ADVANCE").css('color', 'orange');
    } else {
        value = false;       
        $('.btn-header').text("IT'S HAIR").css('color', '#000');
    }
});

var senha = $('#senha');
var olho= $("#olho");

olho.mousedown(function() {
  senha.attr("type", "text");
});

olho.mouseup(function() {
  senha.attr("type", "password");
});
// para evitar o problema de arrastar a imagem e a senha continuar exposta, 
//citada pelo nosso amigo nos comentários
$( "#olho" ).mouseout(function() { 
  $("#senha").attr("type", "password");
});