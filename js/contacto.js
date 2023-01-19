$(document).ready(function () {
    validarDatosContacto();
});

function validarDatosContacto() {
    $("#form-contact").submit(function (e) {
        if ($("#nombre").val() == "") {
            e.preventDefault();
            $("#error-nombre").fadeIn();
            $("#nombre").change(function () {
                $("#error-nombre").fadeOut();
            });
        } else if ($("#email").val() == "") {
            e.preventDefault();
            $("#error-correo").fadeIn();
            $("correo").change(function () {
                $("#error-correo").fadeOut();
            });
        } else if ($("#celular").val() == "") {
            e.preventDefault();
            $("#error-celular").fadeIn();
            $("#celular").change(function () {
                $("#error-celular").fadeOut();
            });
        } else if ($("#mensaje").val() == "") {
            e.preventDefault();
            $("#error-mensaje").fadeIn();
            $("#mensaje").change(function () {
                $("#error-mensaje").fadeOut();
            });
        } else {
            e.preventDefault();

            let datosContacto = [];
            datosContacto.push($("#nombre").val());
            datosContacto.push($("#correo").val());
            datosContacto.push($("#celular").val());
            
            let datosContactoJSON = JSON.stringify(datosContacto);
            enviarDatos(datosContactoJSON);

            Swal.fire({
                icon: 'success',
                title: 'Datos enviados con éxito',
                text: 'En unos días vas a recibir nuestro contacto :)',
                confirmButtonColor: "#444444"
            });

            $(".entrada-contacto").val('');
        };
    });
};

function enviarDatos(datos) {
    const URLPOST = "https://jsonplaceholder.typicode.com/posts";

    $.post(URLPOST, datos).done(function(respuesta, estado) {
        console.log(respuesta);
        console.log(estado);
    })
}