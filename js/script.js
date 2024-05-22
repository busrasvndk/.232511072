let addToDoButton = document.getElementById('addToDo');
 let toDoContainer = document.getElementById('toDoContainer');
 let input = document.getElementById('input');
 let clearToDo = document.getElementById('clearToDo');
 
 addToDoButton.addEventListener('click', function(){
     let paragraph = document.createElement('p');
     paragraph.classList.add('paragraph-styling');
     toDoContainer.appendChild(paragraph);
     paragraph.innerHTML = input.value;
     input.value = "";
     
 
     paragraph.addEventListener('click', function(){
         paragraph.style.textDecoration = 'line-through';
     });
 
     paragraph.addEventListener('dblclick', function(){
         toDoContainer.removeChild(paragraph);
     });

     clearToDo.addEventListener('click', function(){
         paragraph.remove();
     })
 
 })
 
 var Hour = document.getElementById('hour');
   var Dots = document.getElementById('dots');
   var Minutes = document.getElementById('minute');

   
   setInterval(function() {

   var D = new Date();
   var Saat = D.getHours();
   var Dakika = D.getMinutes();
   console.log(Hour, Minutes)

    Hour.innerHTML = Saat < 10 ? '0' + Saat : Saat;
    Minutes.innerHTML = (Dakika < 10) ? '0' + Dakika : Dakika;

   Dots.classList.toggle('color');

    },1000);



  let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')

  next.addEventListener('click', function(){
    let resimler = document.querySelectorAll('.resim')
    document.querySelector('.slide').appendChild(resimler[0])
  })

  prev.addEventListener('click', function(){
    let resimler = document.querySelectorAll('.resim')
    document.querySelector('.slide').prepend(resimler[resimler.length - 1])
  })
 

  window.alert("TÜRKİYE'YE HOŞ GELDİNİZ.");


  document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var searchTerm = document.getElementById("search-input").value.trim();
    if (searchTerm !== "") {
     
      window.location.href = "search.php?q=" + encodeURIComponent(searchTerm);
    } else {
     
      alert("Lütfen bir arama terimi girin.");
    }
  });

 
 function myFunction() {
  document.getElementById("demo").innerHTML = "Tüm Şehirlerimizi Tek Tek Gezmenizi Tavsiye Ederim :)";
}

 function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);

  function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Mehaba" + fname + "detaylı bilgi için https://www.grandoriatours.com/tr/turkiyenin-en-iyi-10-turistik-yeri yönlendiriliyorsun.");
  }

  function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("tarayıcıda gezmeyi tercih ediyorsunuz"+" "+ prefer);
  }

  var sicaklik = 20; 
      
      if (sicaklik > 20) {
        $(".icon-sun").animate({
          left: "10px"
        }, 1000);
      } else {
        $(".icon-rain").animate({
          left: "-10px"
        }, 1000);
      }



  function myFunction1() {
    document.getElementById("ant").innerHTML = "Soldaki listeden bilgi almak istediğin şehri seç";
    
  }

   function displayDate() {
     document.getElementById("ist").innerHTML = Date();
   }

   function upperCase(){
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
   }
   
   function savename() {
     let name = document.getElementById("nameinput").value;
     localStorage.setItem("name",name);
   }
    
   function showName() {

    let name = localStorage.getItem("name");
    document.getElementById("savedName").innerHTML = name ? name : "İsim Bulunamadı"
  
  }
  
    

  function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
  document.getElementById("SayfaBaşınaGit").addEventListener("click", goToTop);