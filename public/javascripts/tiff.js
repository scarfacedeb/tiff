$(document).ready(function() {
  $('#select1 button').click(function() {
    main(1, this);
    return false;
  });

  $('#select2 button').click(function() {
    main(2, this);
    return false;
  });

  $('.btn-edit').click(function(e) {
    var el = e.currentTarget;
    var letter = el.id

    $(this).parent().parent().toggleClass("flipped");
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

  // Display vs. Reset
  if ($this.text().toLowerCase() === "display") {
    $('#select' + fid).find('input').attr('disabled', true);
    $this.text("Cancel"); 

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
      opacity: 1
    }, 500);
  }); 
}

function hideAll(id) {
  $('.font' + id).animate({
    opacity: 0
  }, 500);
}
