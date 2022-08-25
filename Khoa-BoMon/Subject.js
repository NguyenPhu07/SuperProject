$(document).ready(function(){
    $("div.figure > .item").addClass("wow animate__fadeInUp")
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      })
      wow.init();
})
