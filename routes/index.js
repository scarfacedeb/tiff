
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tiff - a visual typeface diff tool.' });
};
