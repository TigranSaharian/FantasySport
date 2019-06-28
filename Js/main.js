! function (e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) {
        for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n;
        return Boolean(o[n])
    }), "function" != typeof e.closest && (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    })
}(window.Element.prototype);
document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      item.addEventListener('click', function(e) {

         e.preventDefault();

         var modalId = this.getAttribute('data-signin'),
             modalElem = document.querySelector('.login_window[data-signin="' + modalId + '"]'),
             modalCont = document.querySelector('.transform');
          
          modalElem.classList.add('active');
          modalCont.style.transform = 'translateY(0)';
          overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function (item) {

       item.addEventListener('click', function (e) {
           var parentModal = this.closest('.login_window'),
               modalCont = document.querySelector('.transform');

           modalCont.style.transform = 'translateY(-150%)';
           parentModal.classList.remove('active');
           overlay.classList.remove('active');
       });

   }); // end foreach

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.login_window.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.login_window.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready

// Clock Function
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
         h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();

//players filter
$(document).ready(function () {
    $('.btn-filter').click(function(){
        if($('.btn-checked') != true){
            $('.btn-filter').removeClass('btn-checked');
            $(this).addClass('btn-checked');
        }
    });

    $('.btn-filter').on('click', function () {
      var $target = $(this).data('target');
      if ($target != 'all') {
        $('.choice').css('display', 'none');
        $('.choice[data-status="' + $target + '"]').fadeIn('slow');
      } else {
        $('.choice').css('display', 'none').fadeIn('slow');
      }
    });

 });
