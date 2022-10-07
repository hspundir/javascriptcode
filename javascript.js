 jQuery( document ).ready(function($) {
        jQuery('.close-btn-main-popup').click(function(){
        jQuery("#elementor-popup-modal-7848").css("display","none");
        setTimeout(function() { 
        if (jQuery('#elementor-popup-modal-7848').css('display') == 'none')
        { setTimeout(jQuery("#elementor-popup-modal-7848").css("display", "flex"), 60000 );  }
    }, 60000);
    });  
});
