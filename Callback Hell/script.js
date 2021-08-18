let msgEl = document.getElementById("display_message");
setTimeout(function () {
  msgEl.innerHTML = 10;
  setTimeout(function () {
    msgEl.innerHTML = 9;
    setTimeout(function () {
      msgEl.innerHTML = 8;
      setTimeout(function () {
        msgEl.innerHTML = 7;
        setTimeout(function () {
          msgEl.innerHTML = 6;
          setTimeout(function () {
            msgEl.innerHTML = 5;
            setTimeout(function () {
              msgEl.innerHTML = 4;
              setTimeout(function () {
                msgEl.innerHTML = 3;
                setTimeout(function () {
                  msgEl.innerHTML = 2;
                  setTimeout(function () {
                    msgEl.innerHTML = 1;
                    setTimeout(function () {
                      msgEl.innerHTML = "Happy Indepedence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
