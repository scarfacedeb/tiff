$(document).ready(function() {
  $('#select-a button').click(function() {
    main("a", this);
    return false;
  });

  $('#select-b button').click(function() {
    main("b", this);
    return false;
  });
});

function main(fid, obj) {
  var 
  name,
  style,
  other,
  otherName,
  otherStyle,
  $this = $(obj),
  firstStyle = "rgba(0, 0, 0, 1)",
  secondStyle = "rgba(247, 160, 163, 0.6)",
  canvases = [$('#letter1')[0], $('#letter2')[0], $('#letter3')[0], $('#letter4')[0]];

  if (fid === "a") {
    name = $('#font-a').val();
    style = firstStyle;
    other = "b"
    otherName = $('#font-b').val();
    otherStyle = secondStyle;
  } else {
    name = $('#font-b').val();
    style = secondStyle;
    other = "a"
    otherName = $('#font-a').val();
    otherStyle = firstStyle;
  }

  // Display vs. Reset
  if ($this.text().toLowerCase() === "display") {
    // Lock input field and toggle button text
    if (fid === "a") {
      $('#select-a').find('input').attr('disabled', true);
    } else {
      $('#select-b').find('input').attr('disabled', true);
    }
    $this.text("Reset"); 

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
    // Unlock input field and toggle button text
    if (fid === "a") {
      $('#select-a').find('input').attr('disabled', false);
    } else {
      $('#select-b').find('input').attr('disabled', false);
    }
    $this.text("Display");

    clean(canvases);

    // Re-draw other font if it was there
    if (hasFilledOtherFont(other)) {
      display(canvases[0], otherName, otherStyle, $('#letter1').data('letter'));
      display(canvases[1], otherName, otherStyle, $('#letter2').data('letter'));
      display(canvases[2], otherName, otherStyle, $('#letter3').data('letter'));
      display(canvases[3], otherName, otherStyle, $('#letter4').data('letter'));
    }
  }
}

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

function hasFilledOtherFont(fid) {
  var other = "#select-" + fid;
  return $(other).val() === "";
}

function clean(canvases) {
  for (var i = 0; i < canvases.length; i++) {
    canvases[i].width = canvases[i].width;
  }
}
