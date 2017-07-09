var MatchGame = {}

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(function() {
  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'))
});


/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function() {
  var cardValues = [];
  for (var i = 1; i < 9; i++) {
    cardValues.push(i);
    cardValues.push(i);
  }
  console.log(cardValues);

  cardValues.sort(function() {
    return 0.5 - Math.random();
  })

  console.log(cardValues);
  return cardValues;
}

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

  $game.data('revealed', flippedCards = []);
  $game.empty();

  var cardColors = ["hsl(25,85%,65%)", "hsl(55,85%,65%)", "hsl(90,85%,65%)", "hsl(160,85%,65%)", "hsl(220,85%,65%)", "hsl(265,85%,65%)", "hsl(310,85%,65%)", "hsl(360,85%,65%)"];
  var totalCards = cardValues.length;
  for (i = 0; i < totalCards; i++) {
    var value = cardValues[i];
    var $card = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 card"></div>');
    $card.data('value', value);
    $card.data('flipped', false);
    $card.data('color', cardColors[value - 1]);
    $game.append($card);
  }

  // LIstener for when a card is clicked
  $('.card').on('click', (function() {
    MatchGame.flipCard($(this), $game);
  }))
}

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  // Flip the Card if the card has not already been flipped
  if ($card.data('flipped') !== true) {
    // Check is the card is face down, and show the characteristics of the flipped card.
    $card.css('background-color', $card.data('color'));
    $card.text($card.data('value'));
    $card.data('flipped', true);

  flippedCards.push($card);

  if (flippedCards.length === 2) {
    // Check if the game has 2 flipped cards
    var $card1 = flippedCards[0];
    var $card2 = flippedCards[1];
    if ($card1.data('value') === $card2.data('value')) {
      // Change the appearance of the matching cards
      $card1.css('background-color', 'rgb(153,153,153)');
      $card1.css('color', 'rgb(204,204,204)');
      $card2.css('background-color', 'rgb(153,153,153)');
      $card2.css('color', 'rgb(204,204,204)');
        $game.data('revealed',flippedCards=[]);
    } else {
      // Return the unmatched cards to a FaceDown positon
    setTimeout(function () {
      $card1.css('background-color', 'rgb(32, 64, 86)');
      $card1.css('color', 'rgb(255, 255, 255)');
      $card1.data('flipped', false);
      $card1.text('');
      $card2.css('background-color', 'rgb(32, 64, 86)');
      $card2.css('color', 'rgb(255, 255, 255)');
      $card2.data('flipped', false);
        $card2.text('');
        $game.data('revealed', flippedCards=[]);
    },500);

    }
  }
  }



}
