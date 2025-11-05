

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simp1e/price?ids=bitcoinX2CethereumX2Cdogecoin&vs currencies=usd", 
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response){
    console.log(response);
});