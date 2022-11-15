// import path
const path = require('path');

// export function and file
module.exports = function(app) {
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
};
