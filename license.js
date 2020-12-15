  
	var urlBlog = 'https://www.azid45.web.id';
  var license = $('#license-code').text();
  var informasibatas = '<style>body{background:#000}#peringatan span{font-size:50px}#peringatan{z-index:99999;position:fixed;top:0;right:0;left:0;height:100%;text-align:center;background:rgba(0, 0, 0, 0.95);border:5px solid #444;color:#fff;padding:20px;font-family:monospace;border-radius:10px}#peringatan h4{font-size:20px}</style><div id="peringatan"><h4>Activate Templates</h4><p>Untuk mendapatkan lisensi Anda bisa menghubungi Admin di 089677337414</p><span id="batas-waktu-template">20</span></div>';
  var input = 20;

$(document).ready(function () {
  var dataLicense = license.split('-');
  var codeLicense = dataLicense[0];
  var arrayLicense = dataLicense[1];
  console.log(codeLicense);
  console.log(arrayLicense);
  if (arrayLicense == undefined) {
    $(document.body).html(informasibatas);
    setInterval(function () {
        input <= 1 ? (window.location.href = urlBlog) : (document.getElementById("batas-waktu-template").innerHTML = --input);
    }, 1e3);
  }
  str = [arrayLicense];
$.ajax({
    url: "
https://script.google.com/macros/s/AKfycbyMbQjUcqVPerPdrCQfKDrfmR1oEK8PdirzJ6rAlFvVGDKsTnw/exec",
    type: "GET",
    data: "users",
    crossDomain: true,
    dataType: "",
    success: function (data) {
      
      // mengambil data JSON dari user google sheet
      var json = data.user;
      
      // mengambil data dari Array ke-n
      var sheetLicense = json[str];
      console.log(sheetLicense)
      if (sheetLicense == undefined) {
        $(document.body).html(informasibatas);
        setInterval(function () {
          input <= 1 ? (window.location.href = urlBlog) : (document.getElementById("batas-waktu-template").innerHTML = --input);
        }, 1e3);
      }
      // mengambil data dari sheet, ada ID dan Code
      var ID = sheetLicense.id;
      var code = sheetLicense.code;
// Mengambil data ID Blog dengan Ajax
      $.ajax({
        url: "/feeds/posts/summary/?alt=json",
        type: "get",
        dataType: "jsonp",
        success: function (data) {
          // Mengambil ID Blog dari post summary blogger
          var dataID = data.feed.id.$t;
          console.log(dataID)
          
          // Hasil tag:blogger.com,1999:blog-4666907241397774044, yang kita butuhkan hanya ID jadi butuh kita eksplode
          var IDblog = dataID.split('-');
          
          // Hasil eksplode - akan ada dua array yaitu tag:blogger.com,1999:blog dan 4666907241397774044 ["tag:blogger.com,1999:blog", "4666907241397774044"]
          
         var blogID = IDblog[1];
          try {
            var input = 20,
                dataInBlog = blogID + codeLicense,
                dataInSheet = ID + code;
            if (dataInBlog == dataInSheet) {
              return;
            }
            $(document.body).html(informasibatas);
            setInterval(function () {
              input <= 1 ? (window.location.href = urlBlog) : (document.getElementById("batas-waktu-template").innerHTML = --input);
            }, 1e3);
          } catch (input) {
            window.location.href = urlBlog;
          }
        },
      });
    },
});
});
