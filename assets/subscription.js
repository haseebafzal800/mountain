(function($) {
  $(function() {
    
    var subscription_box = {
      quantity : 2,
      duration: "Quarterly",
      items_name_quantity:{}
    }
    
    $(document).on('click','.soap-quantity-selection ul li:not(.active)', function() {
        goto($('.soap-duration-selection'));
        $('.soap-quantity-selection ul li').removeClass("active");
        $(this).addClass("active");
        subscription_box.quantity = parseInt($(this).data("quantity"));
         $('.soap-items-selection input').val("0");
        var subscription_duration = (subscription_box.duration == "Quarterly") ? 3 : 1;
        var total_soaps_quantity =  subscription_box.quantity * subscription_duration ;
        $('span.soap-quantity-number').text(total_soaps_quantity);
    });

    $(document).on('click','.soap-duration-selection div.em-member:not(.active)', function() {
        goto($('.soap-items-selection'));
        $('.soap-duration-selection div.em-member').removeClass("active");
        $(this).addClass("active");    
        subscription_box.duration = $(this).data("duration");
        $('.soap-items-selection input').val("0");
        //alert(subscription_box.duration)
        var subscription_duration = (subscription_box.duration == "Quarterly") ? 3 : 1;
        var total_soaps_quantity =  subscription_box.quantity * subscription_duration ;
        $('span.soap-quantity-number').text(total_soaps_quantity);
    });
    
     $(document).on('click','.confirm-box', function() {
        var subscription_duration = (subscription_box.duration == "Quarterly") ? 3 : 1;
        var total_soaps_quantity =  subscription_box.quantity * subscription_duration ;
        var quantity_selected = 0;
        var line_item_properties= {};
        var product_number = 0;
        line_item_properties["Soap Quantity"] = subscription_box.quantity;
        line_item_properties["Shipping"] = subscription_box.duration;
        $('.soap-items-selection input').each(function(){
          quantity_selected += parseInt($(this).val());    
          if(parseInt($(this).val()) > 0){
             product_number += 1 ;
             line_item_properties[`Soap_${product_number} Name`] = $(this).closest(".product-details").find(".product-name").text().trim();
             line_item_properties[`Soap_${product_number} Quantity`] = parseInt($(this).val());
          }
        });
        console.log(line_item_properties);
       
       if(quantity_selected == 0 || quantity_selected < total_soaps_quantity || quantity_selected > total_soaps_quantity){
          alert(`Please select total of ${total_soaps_quantity} soaps`);
        }
       else if( total_soaps_quantity == quantity_selected ){
        $(".confirm-box").text("sending....") 
        var selected_variant = subsription_product_data.variants.filter( item  => item.title == `${subscription_box.quantity} / ${subscription_box.duration}`)
        var box_items = [{
          id: selected_variant[0].id,
          quantity: 1,
          properties: line_item_properties
        }];
         $('.soap-free-shipping-selection input').each(function(){
           
          if(parseInt($(this).val()) > 0){
             box_items.push({
               id: parseInt($(this).closest("li").find(".product-details").data("v-id")),
               quantity: parseInt($(this).val())
             });
          }
        }); 
         console.log(selected_variant); 
      
            $.ajax({
              url: '/cart/add.js',
              data: {
                items : box_items
              },
              dataType:"json",
              type: 'POST',
              success: function (res) {
                  window.location.href = "/cart";
              }
            });
         
       }  
    });
     $('.soap-items-selection .adding').click(function (e) {

           var subscription_duration = (subscription_box.duration == "Quarterly") ? 3 : 1;
           var total_soaps_quantity =  subscription_box.quantity * subscription_duration ;
           //alert(subscription_box.duration)
           var quantity_selected = 0;
           $('.soap-items-selection input').each(function(){
             quantity_selected += parseInt($(this).val());   

           });
           if(quantity_selected != 0 & quantity_selected == total_soaps_quantity ){
             e.preventDefault();
             //alert(`You can select maximum of ${total_soaps_quantity} quantity`);
           }
       
           else if ($(this).prev().val() < 99) {
                $(this).prev().val(parseInt($(this).prev().val()) + 1);
                
            }
        });
        $('.soap-items-selection .subtracting').click(function () {
            if ($(this).next().val() > 1) {
                if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
            }
        });

       $('.soap-free-shipping-selection .adding').click(function (e) {

            if ($(this).prev().val() < 99) {
                $(this).prev().val(parseInt($(this).prev().val()) + 1);
                
            }
        });
        $('.soap-free-shipping-selection .subtracting').click(function () {
            if ($(this).next().val() > 1) {
                if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
            }
        });



    
    function goto(element){
        $('html, body').animate({
                    scrollTop: element.offset().top - 62
        }, 300);
    }
  
  });
})(jQuery);
/*var chooseSoapNumber = 6;
(function($) {
    'use strict';

    function goTo($fieldset) {
        $('html, body').animate({
            scrollTop: $fieldset.offset().top - 62
        }, 1000);
    }

    function indexFieldsets() {
        $('.advanced-subscription-fieldset-legend:visible').each(function(index, legend) {
            var $legend = $(legend);
            $legend.find('span.index').remove();
            $legend.prepend('<span class="index">' + (++index) + '. <span>');
        });
    }
    //indexFieldsets();

    function handleSingleSelect($option, field, value, associatedVariantField, associatedVariantValue) {

        // If the item is already selected, ignore it
        if ($option.hasClass('active')) {
            return;
        }

        // unselect other options and select clicked one
        $option.parents('.advanced-subscription-fieldset').find('.advanced-subscription-option').removeClass('active');
        $option.addClass('active');

        // UPDATE THE CHOOSE SOAP NUMBER
        var soapShippingFrequeValue = $('[data-field=shipping_interval_frequency].active').data("value").toString();
        var soapQuantitySelectedValue = $('[data-field=soap_per_month].active').data("value").toString();

        // Calculate how many soaps the customer can select
        if (soapShippingFrequeValue == "1") {
            //Shipping is Monthly
            switch (soapQuantitySelectedValue) {
                case '1':
                    chooseSoapNumber = 1;
                    break;
                case '2':
                    chooseSoapNumber = 2;
                    break;
                case '3':
                    chooseSoapNumber = 3;
                    break;
                case '4':
                    chooseSoapNumber = 4;
                    break;
            }

        } else {
            // Shipping is quarterly soap box 
            switch (soapQuantitySelectedValue) {
                case '1':
                    chooseSoapNumber = 3;
                    break;
                case '2':
                    chooseSoapNumber = 6;
                    break;
                case '3':
                    chooseSoapNumber = 9;
                    break;
                case '4':
                    chooseSoapNumber = 12;
                    break;
            }
        }
        // Update the soap quantity number
        $(".soap-quantity-number").text(chooseSoapNumber);

        var $next = $option.parents('.advanced-subscription-fieldset').next();

        window.setTimeout(function() {
            //goTo($next);
        }, 200);
    }

    $('.advanced-subscription-option').on('click', function() {

        var $option = $(this),
            field = $option.data('field'),
            value = $option.data('value'),
            multiple = $option.data('multiple'),
            isDefault = $option.data('default'),
            associatedVariantField = $option.data('associated-variant-field'),
            associatedVariantValue = $option.data('associated-variant-value');


        
        // If the class doesn't have soap, proceed. otherwise skip the select
        if(!$option.hasClass('soaps')) {
            handleSingleSelect($option, field, value, associatedVariantField, associatedVariantValue);
        }
        

    });

}(jQuery)); */