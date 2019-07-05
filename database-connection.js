
var express = require('express'); 
var app = express();
var sql = require('mssql');
// const parser = require('mssql-connection-string');
// const connectionString = "Data Source=tcp:database.com,1433;Initial Catalog=numbers;User Id=service@database.com;Password=qwerty;";


var sqlConfig = {
    userName: 'DESKTOP-3CHVGOL\Admin',
    server: 'DESKTOP-3CHVGOL',
    database: 'Finance_temp',
    options: {
        instanceName: 'sql'
    }
}

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log(`app listening at http://${host}:${port}`)
});


app.get('/reports', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query('select * from Finance_temp.reports', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); 
        });
    });
})