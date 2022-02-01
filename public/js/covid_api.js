
const node_fetch = require('node-fetch'); 
node_fetch ="https://api.covid19india.org/data.json";
fetch.then((src) => {
   return src.json();
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});