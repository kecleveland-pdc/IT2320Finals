
$(function(){
//jQuery code goes here

    //test
    $("#submit-SeePets").click(function(e){
        e.preventDefault();

        const key = "7ca41b0ec396887de2e110e7a3c60b80"; 
        var location = $("#zipcode").val();
        var size = $("#size").val();
        var sex = $("#sex").val();
        var animal = $("#animal").val();        
        var breed = $("#breed").val();
        var url = "http://api.petfinder.com/pet.find?callback=?&format=json&key="+key+"&callback=?&location="+location+"&size="+size+"&sex="+sex+"&breed="+breed+"&animal="+animal+"&_=&format=json";
        console.log(url);
        console.log(location);
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",      
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                 
           success: function(data){              
              var div = $("<div id='result-div'><div>")
              $.each(data.petfinder.pets.pet,function(i,pet){ 
                var petdiv = $("<div id='petdiv' class='shadow'></div>")
                var p = $("<p></p>").append("<strong>Name: </strong>" + pet.name.$t + " <strong>ID:</strong> " + pet.id.$t);
                var contact = $('<p></p>').append("<strong>Contact:</strong> " + pet.contact.phone.$t);
                var description = $('<p></p>').append(pet.description.$t);
                $(petdiv).append(p);
                $(petdiv).append(contact);
                $(petdiv).append(description);
                $(div).append(petdiv);
              });
              $("#results").html(div);          
            }   
         });//ajax  
    });  //btn click

    $("#submit-GetPetsShelter").click(function(e){
        e.preventDefault();
        const key = "7ca41b0ec396887de2e110e7a3c60b80"; 
        var location = $("#zipcode").val();
        var sheltername = "";
        var url = "http://api.petfinder.com/shelter.find?callback=?&format=json&key="+key+"&callback=?&location="+location+"&sheltername="+sheltername+"&_=&format=json";
        console.log(url);
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",      
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                 
           success: function(data){              
              var div = $("<div id='result-div'><div>")
              $.each(data.petfinder.shelters.shelter,function(i,shelter){ 
                var petdiv = $("<div id='petdiv' class='shadow'></div>")
                var shelterName = $("<p></p>").append("<strong>Shelter Name: </strong>" + shelter.name.$t);
                var shelterID =  $("<p id = " + shelter.id.$t + "></p>").append("<strong>ID:</strong> " + shelter.id.$t);
                $(petdiv).append(shelterName);
                $(petdiv).append(shelterID);
                $(div).append(petdiv);
              });
              $("#results").html(div);          
            }   
         });//ajax  
    });  //btn click
});//end jquery