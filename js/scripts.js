var aSelected, bSelected, cSelected, calculate, userName, resultA, resultB, resultC, resultD, progressBarValue, progressBarCalculate, insertProgress;

//begin backend logic
calculate = function(){
  if (aSelected > bSelected && aSelected > cSelected) {
    progressBarValue = aSelected;
    resultA();
    progressBarCalculate();
  }
  else if (bSelected > aSelected && bSelected > cSelected) {
    progressBarValue = bSelected;
    resultB();
    progressBarCalculate();
  }
  else if (cSelected > aSelected && cSelected > bSelected) {
    progressBarValue = cSelected;
    resultC();
    progressBarCalculate();
  }
  else if (aSelected === bSelected || aSelected === cSelected || cSelected === bSelected){
    resultD();
  }
  else {
    alert('Error, please refresh the page and try again');
  }
};

progressBarCalculate = function() {
  progressBarValue = parseInt(progressBarValue * (100 / 6));
  console.log(progressBarValue);
  insertProgress();
}

//begin frontend logic
$(document).ready(function() {

  $('button#quiz-submit').click(function(event){
    aSelected = $('input:radio[value=a]:checked').length;
    bSelected = $('input:radio[value=b]:checked').length;
    cSelected = $('input:radio[value=c]:checked').length;
    userName = $('input#name').val();
    calculate();
    $('#user-name').text(userName);
    $('#phone-question').hide();
    $('#result-page').fadeIn(1000);
    $('#beep').delay(1000).fadeIn(1000);
    $('#boop').delay(3000).fadeIn(1000);
    $('#calculating').delay(5000).fadeIn(1000);
    $('#track-says').delay(7000).fadeIn(1000);
    $('#response').delay(7000).fadeIn(1000);
    $('#top-bar').delay(7000).fadeIn(1000);
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
    $('.progress').hide();
  }

  insertProgress = function(){
    $('#top-bar').css("width", progressBarValue + "%");
    $('#top-bar-text').append(" " + progressBarValue + "%")
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
