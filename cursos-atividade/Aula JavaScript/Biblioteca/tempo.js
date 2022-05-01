// 600000 milissegundos = 10 minutos.

$(function() {
    setTimeout(function(){ location.reload(); }, 600000); // 10 * 60 * 1000
});

// Se você quer 3 minutos, tente 180000 milissegundos.
$(function() {
    setTimeout(function(){ location.reload(); }, 180000); // 3 * 60 * 1000
});