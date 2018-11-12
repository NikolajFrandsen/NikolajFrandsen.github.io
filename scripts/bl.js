// SOURCE: https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm

// Add a binding to the show bucketlist button
var showBucketListTable = document.getElementById('showBucketListTable');

showBucketListTable.addEventListener('click', function(){
        var emptyBucket = JSON.parse(localStorage.getItem("bucketItem"));
        var table = document.createElement("table");
        var tr = table.insertRow(-1);
        // HEADER --> Remove brackets to see. 
        // for (var i = 0; i < col.length; i++){
        //     var th = document.createElement("th");
        //     th.innerHTML = col[i];
        //     tr.appendChild(th);
        // }
    
        
        for (var i = 0; i < emptyBucket.length; i++){
            tr = table.insertRow(-1);
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = emptyBucket[i];
        }
        var divContainer = document.getElementById('showbucketlist');
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
});

