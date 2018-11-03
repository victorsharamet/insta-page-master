$(document).ready(function(){ 


    var userFeed = new Instafeed({
        get: 'user',
        userId: '25339958',
        accessToken: '25339958.1677ed0.c01b52bd035c4e2985577861a6255456',
        resolution: 'standard_resolution',
        limit: 33
    });
    userFeed.run();

    setTimeout(function(){
    	$('.instafeed').addClass('shadowed');
    }, 100);


});