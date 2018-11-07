function CreateTableFromJSON(){
    var emptyBucket = JSON.parse(localStorage.getItem("bucketItems"));
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
        tabCell.innerHTML = emptyBucket[i]
    }
    var divContainer = document.getElementById('showbucketlist');
    divContainer.innterHTML = "";
    divContainer.appendChild(table);
}



  

// function jsonToTable(json, classes){
//     var cols = Object.keys(json[0]);
//     var headerRow = '';
//     var bodyRows = '';

//     classes = classes || '';

//     function capitalizeFirstLetter(string){
//         return 
//         string.charAt(0).toUppercase() + string.slice(1);
//     }

//     cols.map(function(col){
//         headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
//     });

//     json.map(function(row){
//         bodyRows += '<tr>';

//         cols.map(function(colName){
//             bodyRows += '<td>' + row[colName] + '</td>';
//         })

//         bodyRows += '</tr>';
//     });

//     return '<table class="' +
//          classes +
//          '"><thead><tr>' +
//          headerRow +
//          '</tr></thead><tbody>' +
//          bodyRows +
//          '</tbody></table>';

// }

// document.getElementById('showbucketlist') = jsonToTable(emptyBucket, 'table');