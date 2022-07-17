if (typeof window !== 'undefined'){

    var fullName = document.querySelector(".information-name-pro").innerHTML;
    var price = document.querySelector(".information-price-pro").innerHTML;
    var image = document.querySelector(".style-img-list-pro").getAttribute("src");

    total = document.querySelectorAll(".information-price-pro");

    var count = new Array();
    for(var i = 0; i < total.length; i++){
        count[i] = document.querySelector(".information-price-pro").innerHTML;
    }
        
    var productprice = 0;

    var dataproduct = {}
            dataproduct ['name'] = (fullName);
            dataproduct ['code'] = ('vbah');
            dataproduct ['image'] = (image);
            dataproduct ['price'] = (price);
            dataproduct ['slug'] = ('321');
    
    function themvaogio(){
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://localhost:3000/cart/addToCard',
                data: JSON.stringify(dataproduct),
                dataType: 'json',
                success: function(data, textStatus, jqXHR) {
                    // When AJAX call is successfuly
                    console.log('AJAX call successful.');
                    console.log(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // When AJAX call has failed
                    console.log('AJAX call failed.');
                    console.log(textStatus + ': ' + errorThrown);
                },
                complete: function() {
                    // When AJAX call is complete, will fire upon success or when error is thrown
                    console.log('AJAX call completed');
                }
     
            }).done(function(data) {
                window.location.href = window.location.origin + '/cart/viewcards'

            })     
    }
    function productcount(){
        for (var i = 0; i < count.length; i++)
        {
            productprice = productprice + Number(count[i])
        }
        var totalprice = document.querySelector(".main-information-price-number");
        totalprice.innerHTML = productprice;
    }
    productcount()
}
