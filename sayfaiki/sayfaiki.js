


var olEtiket = document.getElementById("ol-etiket");
var denemediv = document.getElementById("deneme-div");
var table3kapsayici = document.getElementById("table3-kapsayici");
var apidivp = document.getElementById("api-div-p");
var table1 = document.getElementById("table1");
var oletiket2 = document.getElementById("ol-etiket2");


document.addEventListener("DOMContentLoaded", function (event) {


  var checkboxDurum = document.getElementById("checkbox").checked;

  
  checkboxDurum ? table3kapsayici.style.opacity = "1" : table3kapsayici.style.opacity = "0";
  checkboxDurum ? table3kapsayici.style.filter = 'alpha(opacity=100)' : table3kapsayici.style.filter = 'alpha(opacity=0)';
  setTimeout(function () {
    checkboxDurum ? table3kapsayici.style.display = "block" : table3kapsayici.style.display = "none";
  }, 250);


});
function veriCek() {
  // XMLHttpRequest nesnesi oluşturma
  var xhr = new XMLHttpRequest();

  // API'den veri çekme işlemi
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Veriyi göstermek için <div> etiketinin içeriğini değiştirme işlemi
      var veri = JSON.parse(this.responseText);


    }
  };
  xhr.open("GET", "http://localhost:3004/posts", true);
  xhr.send();
}

// 5 saniyede bir veriCek() fonksiyonunu tekrarlamak için setInterval() kullanımı
//setInterval(veriCek, 5000);
setInterval(tableicerikDegistir, 1000);

setInterval(divGuncelle, 1000);



var acilirMenu = document.getElementById("acilir-menu");
var acilirMenuElemanlari = acilirMenu.querySelectorAll("li");
var altMenu = document.getElementById("alt-menu");

altMenu.addEventListener("click", function () {


  acilirMenu.style.display = acilirMenuDisplay();


});




function acilirMenuDisplay() {
  if (acilirMenu.style.display == "block") {
    acilirMenu.style.display = "none";

    // altMenu.style.backgroundColor="	#3a4652";






  }
  else {
    acilirMenu.style.display = "block";
    // altMenu.style.backgroundColor="#47515d";
    acilirMenu.style.backgroundColor = "#47515d";
  }
  return acilirMenu.style.display;
}

// var fetchButton = document.getElementById('fetchButton');
var contentDiv = document.getElementById('content');
var anaSayfaDiv = document.getElementById("ana-sayfa");
var sagMenu = document.getElementById("sag-menu");




function check() {
  var checkboxDurum = document.getElementById("checkbox").checked;
  console.log(checkboxDurum);
  checkboxDurum ? table3kapsayici.style.opacity = "1" : table3kapsayici.style.opacity = "0";

  checkboxDurum ? table3kapsayici.style.filter = 'alpha(opacity=100)' : table3kapsayici.style.filter = 'alpha(opacity=0)';

  setTimeout(function () {
    checkboxDurum ? table3kapsayici.style.display = "block" : table3kapsayici.style.display = "none";
  }, 250);




}
var table1 = document.getElementById("table1");
var eskiVeri = "";
function tableicerikDegistir() {

  // XMLHttpRequest nesnesi oluşturma
  var abc = new XMLHttpRequest();

  // API'den veri çekme işlemi
  abc.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var veri = JSON.parse(this.responseText);
      var tr = document.createElement("tr");

      console.log(veri);
      if (veri.toString() != eskiVeri.toString()) {
        table1.innerHTML = `<thead>
        <tr>
          <th>isim</th>
          <th>soyisim</th>
    
          <th>okul</th>
        </tr>
    </thead>`;
        for (let index = 0; index < veri.length; index++) {
          var tr = document.createElement("tr");
       
          const element = veri[index];
          
          for (let index = 0; index < 3; index++) {
         

            var td = document.createElement("td");

            if (index == 0) {
              td.innerHTML = element.id;
            }
            else if (index == 1) {
              td.innerHTML = element.title;
            }
            else {
              td.innerHTML = element.author;
            }
            tr.appendChild(td);
          }

          table1.appendChild(tr);


        }
      }





    }
  }; abc.open("GET", "http://localhost:3004/posts", true);
  abc.send();
}
function divGuncelle() {

  var abc = new XMLHttpRequest();
  abc.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      var divVeri = JSON.parse(this.responseText);
   
      apidivp.innerHTML = divVeri[0].body;
    }
  };
  abc.open("GET", "http://localhost:3004/comments", true);
  abc.send();
}


var olEtiket = document.getElementById("ol-etiket");
var olEtiket2 = document.getElementById("ol-etiket2");
var sagMenu = document.getElementById("sag-menu-sablon");




// document.addEventListener("DOMContentLoaded", function () {
//   init();
// });

// function init() {
//   fetch("../index/index.html")
//   .then(response => response.text())
//   .then(data => {
//     sagMenu.innerHTML = data;
//     return fetch("../index/index.js");
//   })
//   .then(response => response.text())
//   .then(data => {
//     const script = document.createElement("script");
//     script.innerHTML = data;
//     document.querySelector("head").appendChild(script);
//   })
//   .catch(error => console.error(error));
// }







// olEtiket.addEventListener('click', function () {
  
//     .then(response => response.text())
//     .then(data => {
//       sagMenu.innerHTML = data;
//       return fetch("../index/index.js");
//     })
//     .then(response => response.text())
//     .then(data => {
//       const script = document.createElement("script");
//       script.innerHTML = data;
//       document.querySelector("head").appendChild(script);
     
//     })
//     .catch(error => console.error(error));
// });



// olEtiket2.addEventListener('click', function () {
//   fetch("../dosya/dosya.html")
//     .then(response => response.text())
//     .then(data => {
//       sagMenu.innerHTML = data;
//       return fetch("../dosya/dosya..js");
//     })
//     .then(response => response.text())
//     .then(data => {
//       const script = document.createElement("script");
//       script.innerHTML = data;
//       document.querySelector("head").appendChild(script);
     
//     })
//     .catch(error => console.error(error));
// });








