const express = require('express');
const app = express();
const port = 2000;
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use('/stocks/:ticker', express.static(__dirname)); // serves the index.html from the current directory

app.listen(port, ()=> {
  console.log(`Hello, I am listening on port ${port}`);
});


//app.use('/', express.static(path.join(__dirname)));


// getAnalystRatings(stockTicker, callback) {
//   $.ajax({
//     method: 'GET',
//     url: `http://localhost:4000/api/analystRatings/?ticker=${stockTicker}`,
//     success: (data) => {
//       this.setState({
//         currentStockTicker: stockTicker,
//         details: data[0]
//       });
//       console.log('Get request successful: ', data);
//       console.log('State after get request: ', this.state);
//     }
//   });
// }