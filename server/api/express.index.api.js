'use strict';

module.exports = {
  register: function(app, fileToSend) {
    app.get('/', function(req, res) {
      res.sendFile(fileToSend);
    }, function(err) {
      if(err)
        res.end('WTF');
    });
  }
};
