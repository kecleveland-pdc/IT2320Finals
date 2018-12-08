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

        var url = "/Tasks/UrgentTasks";
        var numberOfDays = $("NbrOfDays").Val();
        $.get(url, function (data) {
            console.log(data);
            $.each(data, { "nbr": numberOfDays }, function (i, item) {
                var para = $("<p></p>").text(item.Id + " " + item.Title + " " + item.DueDate);
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

        var url = "/Tasks/SearchByCategory";
        var numberOfDays = $("searchstring").Val();
        $.get(url, function (data) {
            console.log(data);
            $.each(data, { "nbr": searchstring }, function (i, item) {
                var para = $("<p></p>").text(item.Id + " " + item.Title + " " + item.DueDate);
                $("#results3").append(para);
            });
        });//ajax  
    }); //btn click
     
});     