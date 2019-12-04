$(document).ready(function() {
  
  // set the background to a random color
  var hue = 350;
  
  // cache the jquery elements to prevent dom queries during the animation events
  var $body = $("body");
  var $svg = $("svg");
  var $word = $(".word");
  var $btn = $("button");
  var $toggle = 0;

  // when the animation iterates
  $("h1").on('webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration ', function() {

    // replace the header with a random word
    var word = words[Math.floor(Math.random() * words.length)] + "!";
    $word.text(word);

    // update the background color
    hue += 47;
    $body.css("background-color", "hsl(" + hue + ", 100%, 50%)");
    
    });
    $btn.click(function(){ 
      
      if($toggle==0){
        $toggle=1;
        $svg.css({
          '-webkit-animation-play-state': 'paused',
          'animation-play-state': 'paused'
      });
      }
      else{
        $toggle=0;
        $svg.css({
          'height': '100%',
          'width': '100%',
          'position': 'relative',
          'top': '-1rem',
          '-webkit-animation':' pop-out .05s ease-in-out infinit',
          'animation': 'pop-out .05s ease-in-out infinite'
      });
      }
  });
  });



// the 10,000 most comment words, taken from https://goo.gl/hfjFkz
words = [ "Afghan", "African", "American", "Arabian", "Argentine", "Asian", "Asian Fusion", "Australian", "Austrian", "BBQ", "Bakery", "Bangladeshi", "Bar Food", "Basque", "Belgian", "Beverages", "Brazilian", "British", "Bubble Tea", "Burger", "Burmese", "Cafe Food", "Cambodian", "Cantonese", "Caribbean", "Charcoal Chicken", "Chinese", "Coffee and Tea", "Colombian", "Contemporary", "Continental", "Creole", "Crepes", "Croatian", "Danish", "Deli", "Desserts", "Drinks Only", "Dumplings", "Dutch", "Eastern European", "Egyptian", "Ethiopian", "European", "Falafel", "Fijian", "Filipino", "Finger Food", "Fish and Chips", "French", "Fried Chicken", "Frozen Yogurt", "Fusion", "Georgian", "German", "Greek", "Grill", "Hawaiian", "Healthy Food", "Hot Pot", "Hungarian", "Ice Cream", "Indian", "Indonesian", "International", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Japanese", "Japanese BBQ", "Jewish", "Juices", "Kebab", "Korean", "Korean BBQ", "Latin American", "Lebanese", "Malatang", "Malaysian", "Mauritian", "Meat Pie", "Mediterranean", "Mexican", "Middle Eastern", "Modern Australian", "Modern European", "Mongolian", "Moroccan", "Nepalese", "North Indian", "Pacific", "Pakistani", "Pan Asian", "Parma", "Pastry", "Patisserie", "Peruvian", "Pho", "Pizza", "Poké", "Polish", "Portuguese", "Pub Food", "Ramen", "Roast", "Russian", "Salad", "Sandwich", "Scandinavian", "Scottish", "Seafood", "Shanghai", "Sichuan", "Singaporean", "Soul Food", "South African", "South Indian", "Spanish", "Sri Lankan", "Steak", "Street Food", "Sushi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tapas", "Tea", "Teppanyaki", "Teriyaki", "Tex-Mex", "Thai", "Tibetan", "Turkish", "Ukrainian", "Uruguayan", "Uyghur", "Vegan", "Vegetarian", "Venezuelan", "Vietnamese", "Yum Cha" ];