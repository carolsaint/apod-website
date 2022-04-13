$ ("#input").on("change", function (event){
    event.preventDefault();

    let input = $("#input")
    let img = $("#imgOut")
    let texto = $("#texto")

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=bZD0thHorWv70ZZhFwnL0MajObm3gQEy0euFry4s&date=${input.val()}`,
        success: function(resposta){

            img.attr("src", resposta.url),
            texto.text(resposta.explanation)

        }
    });
});