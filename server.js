const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Require all groups of routes here
app.use(express.static(__dirname + '/build'));

app.get('*', function(req,res){
  res.sendfile(__dirname + '/build/index.html');
})




app.listen(PORT, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
