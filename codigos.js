$("#imgOut").hide()
$("#videoOut").hide()
$("#texto").hide()


$ ("#sub").on("click", function (event){
    event.preventDefault();

    let input = $("#input")
    let img = $("#imgOut")
    $("#imgOut").show()
    let texto = $("#texto")
    let video = $("#videoOut")


    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=bZD0thHorWv70ZZhFwnL0MajObm3gQEy0euFry4s&date=${input.val()}`,
        success: function(resposta){
            $("#input").attr("max", resposta.date)
            if (resposta.media_type == "image") {
                if ($("#imgOut").show()) {
                    $("videoOut").hide()
                }
                $("#imgOut").attr("src", resposta.url)

            } else if (resposta.media_type == "video") {
                  ($("#videoOut").show()); 
                   $("#imgOut").hide()
                $("#videoOut").attr("src", resposta.url)
        }
        texto.text(resposta.explanation).show()
    },

});
})
