var aSelected, bSelected, cSelected;
//begin front-end logic

$(document).ready(function() {

  $('form#quiz').submit(function(event){
    aSelected = $('input:radio[value=a]:checked').length;
    bSelected = $('input:radio[value=b]:checked').length;
    cSelected = $('input:radio[value=c]:checked').length;
    console.log(aSelected, bSelected, cSelected);
    $('#phone-question').hide();
    $('#result-page').show();
    event.preventDefault();
  });


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
  $('button#phone-prev').click(function(){
    $('#phone-question').hide();
    $('#appsize-question').show();
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
