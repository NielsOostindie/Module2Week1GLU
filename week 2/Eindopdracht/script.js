$('.stack').click(function() {
    $(".whiteCard").each(function(e) {
      setTimeout(function() {
        $(".whiteCard").eq(e).attr("class", "whiteCard");
      }, e * 150)
    });
  });
  
  $('.spread').click(function() {
    $(".whiteCard").each(function(e) {
      setTimeout(function() {
        $(".whiteCard").eq(e).attr("class", "whiteCard ani" + e);
      }, e * 150)
    });
  });