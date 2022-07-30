var btn = document.querySelector("button");
var value;
$("li").click(function(){
    $("li").removeClass('selected');
    $(this).addClass('selected');
    value = this.value;
});

$(btn).click(function(){
    if($("li").hasClass('selected')){
        $(".thank-you").removeClass('hidden');
        $(".rating-div").addClass('hidden');
        document.getElementById("value-submitted").innerHTML = value;
    }
});