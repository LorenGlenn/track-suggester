
//begin front-end logic

$(document).ready(function() {




  //begin button functionality

  $('button#start-button').click(function(){
    $('#start').hide();
    $('#name-question').show();
  });
  $('button#name-next').click(function(){
    $('#name-question').hide();
    $('#company-question').show();
  });
  $('button#company-next').click(function(){
    $('#company-question').hide();
    $('#design-question').show();
  });
  $('button#company-prev').click(function(){
    $('#company-question').hide();
    $('#name-question').show();
  });
  $('button#design-next').click(function(){
    $('#design-question').hide();
    $('#backend-question').show();
  });
  $('button#design-prev').click(function(){
    $('#design-question').hide();
    $('#company-question').show();
  });
  $('button#backend-next').click(function(){
    $('#backend-question').hide();
    $('#interaction-question').show();
  });
  $('button#backend-prev').click(function(){
    $('#backend-question').hide();
    $('#design-question').show();
  });
  $('button#interaction-next').click(function(){
    $('#interaction-question').hide();
    $('#appsize-question').show();
  });
  $('button#interaction-prev').click(function(){
    $('#interaction-question').hide();
    $('#backend-question').show();
  });
  $('button#appsize-next').click(function(){
    $('#appsize-question').hide();
    $('#phone-question').show();
  });
  $('button#appsize-prev').click(function(){
    $('#appsize-question').hide();
    $('#interaction-question').show();
  });
  $('button#quiz-submit').click(function(){
    $('#phone-question').hide();
    $('#result-page').show();
  });
  $('button#phone-prev').click(function(){
    $('#phone-question').hide();
    $('#appsize-question').show();
  });
  $('button#retake').click(function(){
    $('#result-page').hide();
    $('#name-question').show();

//end button functionality
  });
});
