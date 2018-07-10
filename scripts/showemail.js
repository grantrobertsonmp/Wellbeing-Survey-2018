$(document).ready(function () {
    $("#wantemail1").click(function() {
        $("#email").removeClass("noshow", 500);
        $("#email").addClass("show", 500);
    });
    
    $("#wantemail2").click(function() {
        $("#email").removeClass("show", 500);
        $("#email").addClass("noshow", 500);
    });
});

$(document).ready(function () {
    $("#wantfeedbackh1").click(function() {
        $("#housingfeedback").removeClass("noshow", 500);
        $("#housingfeedback").addClass("show", 500);
    });
    
    $("#wantfeedbackh2").click(function() {
        $("#housingfeedback").removeClass("show", 500);
        $("#housingfeedback").addClass("noshow", 500);
    });
});


$(document).ready(function () {
    $("#wantfeedbackhi1").click(function() {
        $("#healthfeedback").removeClass("noshow", 500);
        $("#healthfeedback").addClass("show", 500);
    });
    
    $("#wantfeedbackhi2").click(function() {
        $("#healthfeedback").removeClass("show", 500);
        $("#healthfeedback").addClass("noshow", 500);
    });
});

$(document).ready(function () {
    $("#wantfeedbackt1").click(function() {
        $("#transportfeedback").removeClass("noshow", 500);
        $("#transportfeedback").addClass("show", 500);
    });
    
    $("#wantfeedbackt2").click(function() {
        $("#transportfeedback").removeClass("show", 500);
        $("#transportfeedback").addClass("noshow", 500);
    });
});