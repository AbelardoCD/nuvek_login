$(document).ready(function() {

    $("#btnIngresar").click(function() {
        let username = $("#username").val();
        let password = $("#password").val();
        logIn(username, password)
    });
});

function logIn(username, password) {

    var params = {};
    params.username = username;
    params.password = btoa(password);

    $.ajax({
        data: params,
        url: 'api_rest.php',
        type: 'POST',
        async: true,
        success: function(response) {
            //alert(response);
            if (response != null && response != "" && response != undefined) {
                userExist(response);
            } else {
                userNonexistent()
            }


        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus + ": " + XMLHttpRequest.responseText);
        }

    });
}

function userNonexistent() {
    $("#lblMensajes").text('No se encontró usuario y contraseña.');

    $("#alert-operacion-fail").show("fast", function() {

        setTimeout(function() {
            $("#alert-operacion-fail").hide("fast");
        }, 2000);
    });
}

function userExist(response) {
    let data = JSON.parse(response)
    let usernameB64 = btoa(data.username);
    let form = "http://project-test-nvk.epizy.com/";
    let direccionConQueryParms = form + "?" + "username=" + usernameB64;
    window.location = direccionConQueryParms;
}