
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'tiff - a visual typeface diff tool.' });
};
