
$(document).ready(function () {
   $("#login").click(function () {
       $(".register-form").addClass('show');
       $("body").addClass("_lock");
   });
   $(document).click(function (event) {
       if (!$(event.target).closest(".register-form__body, #login").length) {
           $(".register-form").removeClass("show");
           $("body").removeClass("_lock");
       }
   });
});