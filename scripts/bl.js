// SOURCE: https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm

// Add a binding to the show bucketlist button
var showBucketListTable = document.getElementById('showBucketListTable');

showBucketListTable.addEventListener('click', function(){
        var bucketStorage = JSON.parse(localStorage.getItem("bucketItems"));
        var table = document.createElement("table");
        var tr = table.insertRow(-1);
        
        for (var i = 0; i < bucketStorage.length; i++){
            tr = table.insertRow(-1);
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = bucketStorage[i];
        }
        var divContainer = document.getElementById('showbucketlist');
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
});

