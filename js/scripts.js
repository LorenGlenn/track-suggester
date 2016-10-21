var aSelected, bSelected, cSelected, calculate, userName, resultA, resultB, resultC, resultD;

//begin backend logic
calculate = function(){
  if (aSelected > bSelected && aSelected > cSelected) {
    resultA();
  }
  else if (bSelected > aSelected && bSelected > cSelected) {
    resultB();
  }
  else if (cSelected > aSelected && cSelected > bSelected) {
    resultC();
  }
  else if (aSelected === bSelected || aSelected === cSelected || cSelected === bSelected){
    resultD();
  }
  else {
    alert('Error, please refresh the page and try again');
  }
};



//begin frontend logic
$(document).ready(function() {

  $('form#quiz').submit(function(event){
    aSelected = $('input:radio[value=a]:checked').length;
    bSelected = $('input:radio[value=b]:checked').length;
    cSelected = $('input:radio[value=c]:checked').length;
    userName = $('input#name').val();
    calculate();
    $('#user-name').text(userName);
    $('#phone-question').hide();
    $('#result-page').fadeIn(1000);
    event.preventDefault();
  });

  resultA = function(){
    $('#language').text('C# and .Net!');
    $('#top-bar-text').text('C# and .Net');
  };

  resultB = function(){
    $('#language').text('CSS and Design!');
    $('#top-bar-text').text('CSS and Design');
  };

  resultC = function(){
    $('#language').text('Ruby on Rails!');
    $('#top-bar-text').text('Ruby on Rails');
  };

  resultD = function(){
    $('#language').text("more than one language!");
  }


  //begin button functionality

  $('button#start-button').click(function(){
    $('#start').hide();
    $('#name-question').fadeIn(1000);
  });
  $('button#name-next').click(function(){
    $('#name-question').hide();
    $('#company-question').fadeIn(1000);
  });
  $('button#company-next').click(function(){
    $('#company-question').hide();
    $('#design-question').fadeIn(1000);
  });
  $('button#company-prev').click(function(){
    $('#company-question').hide();
    $('#name-question').fadeIn(1000);
  });
  $('button#design-next').click(function(){
    $('#design-question').hide();
    $('#backend-question').fadeIn(1000);
  });
  $('button#design-prev').click(function(){
    $('#design-question').hide();
    $('#company-question').fadeIn(1000);
  });
  $('button#backend-next').click(function(){
    $('#backend-question').hide();
    $('#interaction-question').fadeIn(1000);
  });
  $('button#backend-prev').click(function(){
    $('#backend-question').hide();
    $('#design-question').fadeIn(1000);
  });
  $('button#interaction-next').click(function(){
    $('#interaction-question').hide();
    $('#appsize-question').fadeIn(1000);
  });
  $('button#interaction-prev').click(function(){
    $('#interaction-question').hide();
    $('#backend-question').fadeIn(1000);
  });
  $('button#appsize-next').click(function(){
    $('#appsize-question').hide();
    $('#phone-question').fadeIn(1000);
  });
  $('button#appsize-prev').click(function(){
    $('#appsize-question').hide();
    $('#interaction-question').fadeIn(1000);
  });
  $('button#phone-prev').click(function(){
    $('#phone-question').hide();
    $('#appsize-question').fadeIn(1000);
  });
  // $('button#retake').click(function(){
  //   $('#result-page').hide();
  //   $('#name-question').show();
  //   $("input:radio").removeProp("checked");
  //   aSelected = 0;
  //   bSelected = 0;
  //   cSelected = 0;
  // });
//end button functionality

});
