document.addEventListener('DOMContentLoaded' , function(){
    document.getElementById('flag-animation').classList.add('show');

     setTimeout(function() {
            document.getElementById('flag-animation').classList.remove('show');
            document.getElementById('flag-animation').classList.add('hide');
        }, 2000);

 setTimeout(function() {
        document.getElementById('flag-animation').remove();
    }, 5000); 

});

 $(document).ready(function() {
            $("#b1").on("click",function() {
                var sayi = Math.random() * 82;
                $("#d").append("-").append(Math.floor(sayi));
            });
        });



$.ajax({
    url: "https://www.mgm.gov.tr/tahmin/il-ve-ilceler.aspx?il=K%C4%B1r%C5%9Fehir",
    dataType: "jsonp",
    success: function(data) {
      var cityName = data.name;
      var temperature = data.main.temp;
      var description = data.weather[0].description;
       var html = "<div class='hava-durumu'>" +
                      "<span class='sehir'>" + cityName + "</span>" +
                      "<span class='sicaklik'>" + temperature + "°C</span>" +
                      "<span class='aciklama'>" + description + "</span>" +
                    "</div>";
      
          $("#hava-durumu-kutu").html(html);
        }
      });



$(document).ready(function(){
  $("p").on("click",  function(){
    $(this).hide();
  });
});


 $(document).ready(function() {
            $('#changeColorButton').on('click', function() {
                $('#colorBox').css('background-color', 'lightgreen');
            });
        });



$(document).ready(function(){
  var zoomed =false;
  $('.slide').on('click' , function(){
    if(zoomed){
     $(this).css('transform','scale(1)');
     zoomed = false; }
     else{
      $(this).css('transform','scale(1.5)');
      zoomed = true;
     }

  })
})


  $(document).ready(function() {
          $("#input").on("keyup", function() {
        var yazi = $("#input").val();
         $("#d1").html(yazi.length);
          });
        });




$(document).ready(function(){
  function animateMarquee(){
    $('#marquee').css('left', '100%');
    $('#marquee').animate(
      {
        left: '-100%'
      },5000,'linear',animateMarquee
    );
  }
  animateMarquee();
});


 
$(document).ready(function() {
         $("#color").on("change", function() {
         var secilenrenk = $("#color").val();
        $("body").css("backgroundColor", secilenrenk);
          });
        });


  
function func1() {
  $("#marquee").fadeToggle(2000);
}

$(document).ready(function(){
  $("b1").on("click",function(){
    $("container1").animate({
      height:'toggle'
    });
  });
});


$(doument).ready(function(){
  $("#flip").on("click" , function(){
    $("#panel").add.slideToggle("slow");
  });
});
      



$(document).ready(function(){
  var yazi = $('#yazi').text();
  $('#yazi').empty();
  for(var i=0; i<yazi.length; i++){
      $('#yazi').append('<span>' + yazi[i] + '</span>');
  }
  $('#yazi span').each(function(i){
      $(this).delay(100*i).fadeIn(100);
  });
});



$("#btnFadeIn").click(function(){
  $("#myFadeDiv").fadeIn();
});


$("#btnFadeOut").click(function(){
  $("#myFadeDiv").fadeOut();
});
