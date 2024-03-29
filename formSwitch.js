var designFormURL = "https://seam-3y7pg5pi7a-ue.a.run.app/requestDesignForm.html"
var sellFormURL = "https://seam-3y7pg5pi7a-ue.a.run.app/sellForm.html"


$(document).ready(function () {
    
    $("#sellButton").click(function(){
        if ($(".createForm").attr("id") == "requestDesignForm"){
            $.ajax({
                url: sellFormURL,
                method: 'GET',
                success: function (data) { 

                    $("#sellButton").attr('class', "activeForm")
                    $("#requestDesignButton").attr('class', "inactiveForm")
                    $(':root').css("--accent", "#FC678A")
                    $("#formContainer").html(data);
                    
                }
            });
        }
    });

    $("#requestDesignButton").click(function(){
        if ($(".createForm").attr("id") == "sellForm"){
            $.ajax({
                url: designFormURL,
                method: 'GET',
                success: function (data) { 
                    $("#sellButton").attr('class', "inactiveForm")
                    $("#requestDesignButton").attr('class', "activeForm")

                    $(':root').css("--accent", "#736CED")
                    $("#formContainer").html(data);
                }
            });
        }
    });

     

});