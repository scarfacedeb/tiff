$(document).ready(function() {
  $('#select1 a.btn').click(function() {
    main(1, this);
    return false;
  });

  $('#select2 a.btn').click(function() {
    main(2, this);
    return false;
  });

  $('.btn-toggle').click(function(e) {
    $(this).parents('.canvas').toggleClass("flipped");
  });

  $('.btn-edit').click(function(e) {
    var $this = $(this);
    var id = $this.siblings('input').attr('class');
    var letter = $this.parent().find('input.' + id).val();

    if (letter.length === 1) {
      var targets = $this.parents('.canvas').find('p.' + id);
      targets.text(letter);
    }
  });

  $('figure.front').hover(function() {
    $(this).stop().animate({ backgroundColor: "#EEEEEE" }, 'slow');
  }, function() {
    $(this).stop().animate({ backgroundColor: "#FFFFFF" }, 'slow'); // original color
  });

  $("footer a").hover(function() { 
    $(this).stop().animate({ color: "#00B7FF" }, 'slow'); 
  }, function() { 
    $(this).stop().animate({ color: "#AAAAAA" }, 'slow'); // original color 
  });
});

function main(fid, context) {
  var 
  control,
  experiment,
  $this = $(context);

  if (fid === 1) {
    control = $('#control').val();
    experiment = $('#experiment').val();
  } else {
    control = $('#experiment').val();
    experiment = $('#control').val(); 
  }

  if (control.length < 1) {
    return;
  }

  // Display vs. Reset
  if ($this.text().toLowerCase() === "display") {
    $('#select' + fid).find('input').attr('disabled', true);
    $this.text("Hide"); 

    WebFont.load({
      google: {
        families: [control]
      }
    });
 
    displayAll(fid, control);
  } else {
    $('#select' + fid).find('input').attr('disabled', false);
    $this.text("Display");
    hideAll(fid);
  }
}

function displayAll(id, name) {
  $('.font' + id).each(function() {
    this.style.fontFamily = name;

    $(this).animate({
      opacity: 0.5
    }, 500);
  }); 
}

function hideAll(id) {
  $('.font' + id).animate({
    opacity: 0
  }, 500);
}
