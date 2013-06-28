$(document).ready(function() {
  var canvases = [
    $('#letter1')[0], $('#letter2')[0], $('#letter3')[0], $('#letter4')[0]
  ]

  $('#select-a button').click(function() {
    var $this = $(this);

    if ($this.text().toLowerCase() === "display") {
      $('#select-a').find('input').attr('disabled', true);
      $this.text("Reset");

      var name = $('#font-a').val();
      var style = "rgba(0, 0, 0, 1)";

      WebFont.load({
        google: {
          families: [name]
        }
      });

      display(canvases[0], name, style, "R");
      display(canvases[1], name, style, "a");
      display(canvases[2], name, style, "g");
      display(canvases[3], name, style, "h");
    } else {
      $('#select-a').find('input').attr('disabled', false);
      $this.text("Display");

      if (hasFilledOtherFont("b")) {
        // Erase all canvases and fill in the other font
      } else {
        // Erase all canvases
      }
    }

    return false;
  });

  $('#select-b button').click(function() {
    $('#select-b').find('input').attr('disabled', true);

    var name = $('#font-b').val();
    var style = "rgba(247, 160, 163, 0.6)";    
    
    WebFont.load({
      google: {
        families: [name]
      }
    });

    display(canvases[0], name, style, "R");
    display(canvases[1], name, style, "a");
    display(canvases[2], name, style, "g");
    display(canvases[3], name, style, "h");

    return false;
  });
});

function display(canvas, name, style, letter) {
  var context = canvas.getContext('2d');
  var x = canvas.width / 2;
  var y = canvas.height / 2;

  context.font = "normal 120px " + name;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = style;
  context.fillText(letter, x, y);
}

function hasFilledOtherFont(font) {
  other = "#select-" + font;
  return $(other).val() === "";
}
