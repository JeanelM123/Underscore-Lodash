((function () {

var templateString = $('#itemTemplate').text();

var templateFunction = _.template(templateString);

//will display requested items 

_.each(etsy.results, function (item) {
  var itemHTML = templateFunction(item);
  $('.container').append(itemHTML);
});


}());

