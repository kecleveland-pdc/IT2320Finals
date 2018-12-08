$(function () {
    /* There are 4 functions in the TasksController that you have to bind using jQuery ajax
     *
     * Name="ExpiredTasks"
     * URL="/Tasks/ExpiredTasks"
     * Type = "GET"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will return tasks that are in the past => earlier than today's date
     * To do: Call this method when the "ExpiredTasks" button is clicked.
     * Display expired tasks in the div with id="results"*/

    $("#ExpiredTasks").click(function (e) {
        var url = "/Tasks/ExpiredTasks";
        $.get(url, function (data) {
            console.log(data);
            $("#results").html("");

            $.each(data, function (i, item) {
               // var para = $("<p></p>").text(item.Id + " " + item.Title + " " + item.Year);
                var para = $("<p></p>").text(item.Id + " " + item.Title);
                $("#results").append(para);
            });
        });//ajax  
    }); //btn click
     
     /* Name="DeleteExpiredTasks"
     * URL="/Tasks/DeleteExpiredTasks"
     * Type= "POST"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will delete tasks older than today
     * To do: Call this method when the "DeleteExpiredTasks" button is clicked.
     * Display "count" and "status" in the div with id="results"*/

    $("#DeleteExpiredTasks").click(function (e) {
        var url = "/Tasks/DeleteExpiredTasks";
        $("#results").html("");

        $.post(url, function (data) {
            console.log(data);
            var para = $("<p></p>").text(data.count + " " + data.status);
             $("#results").append(para);
        }); //ajax
    }); //btn click
     
     /* Name="UrgentTasks"
     * URL="/Tasks/UrgentTasks"
     * Type = "GET"
     * Input parameter called as "nbr" will be an integer that indicates number of days
     * Returns JSON
     * Goal: This method will return tasks that are due in the next "nbr" days from today
     * To do: Call this method when the "UrgentTasks" button is clicked.
     * Display urgent tasks in the div with id="results2"*/

    $("#UrgentTasks").click(function (e) {

        var numberOfDays = $("#NbrOfDays").val();
        console.log(numberOfDays);
        var url = "/Tasks/UrgentTasks";
        $("#results2").html("");

        $.get(url, { "nbr": numberOfDays }, function (data) {
            console.log(data)
            $.each(data, function (i, item) {
                var para = $("<p></p>").text(item.Id + " " + item.Title);
                $("#results2").append(para);
            });
        });//ajax  
    }); //btn click
     
     /* Name="SearchByCategory"
     * URL="/Tasks/SearchByCategory"
     * Type = "GET"
     * Input parameter called as "searchstring" will be a string that indicates number of days
     * Returns JSON
     * Goal: This method will return tasks that are due in the next "nbr" days from today
     * To do: Call this method when the "SearchByCategory" button is clicked.
     * Display tasks that match the category in the div with id="results3"*/

    $("#SearchByCategory").click(function (e) {

      
        var search = $("#Search").val();
        var url = "/Tasks/SearchByCategory";
        $("#results").html("");

        $.get(url, { "searchstring": search }, function (data) {
            $.each(data, function (i, item) {
                var para = $("<p></p>").text(item.Id + " " + item.Title);
                $("#results3").append(para);
            });
        });//ajax  
    }); //btn click
     
});     