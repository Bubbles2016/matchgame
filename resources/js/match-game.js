var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
var $game = $('#game');
$(document).ready(function() {
  MatchGame.renderCards(MatchGame.generateCardValues(), $game);
});
/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var in_order_card_values = new Array();
  for (var i = 0; i < 8; i++) {
    in_order_card_values.push(i+1);
    in_order_card_values.push(i+1);
  }
  var ramdomly_ordered_card_values = new Array();
  var i = 0;
  /*Following is one approach on how to generate a random number between 0 and 16 using Math.random()*/
  var min = 0;
  var max = 16;
  /*The Math.ceil() function returns the smallest integer greater than or equal to a given number.*/
  min = Math.ceil(min);
  /*The Math.floor() function returns the largest integer less than or equal to a given number.*/
  max = Math.floor(max);
  var ordered_array_length = in_order_card_values.length;
  while (i < ordered_array_length) {
    /*The following formula is taken from MDN documentation to generate a random number between min and max (excluded)*/
    var j = Math.floor(Math.random() * (max - min)) + min;
    /*While the value at the index generated is not defined, generate another index*/
    while (in_order_card_values[j] == null) {
      j = Math.floor(Math.random() * (max - min)) + min;
    }
    ramdomly_ordered_card_values.push(in_order_card_values[j]);
    in_order_card_values.splice(j, 1);
    i = i + 1;
  }
  return ramdomly_ordered_card_values;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var cards_colors = ["hsl(25, 85%, 65%)", "hsl(55, 85%, 65%)", "hsl(90, 85%, 65%)", "hsl(160, 85%, 65%)","hsl(220, 85%, 65%)", "hsl(265, 85%, 65%)", "hsl(310, 85%, 65%)", "hsl(360, 85%, 65%)"];
  $game.empty();
  var numberOfCards = cardValues.length;
  for (var i = 0; i < numberOfCards; i++) {
    var value = cardValues[i];
    var $card = $('<div class="col-xs-3 card"><div>');
    $card.data('value',value);
    $card.data('card_flipped', false);
    $card.data('color', cards_colors[value-1]);
    $game.append($card);
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
