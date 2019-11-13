const fs = require('fs');

const results = (() => {
  try {
    return require('./exam/exam.js');
  } catch (err) {
    return err;
  }
})()

const resultsAsJson = results instanceof Error
  ? JSON.stringify({ error: true, name: results.name, message: results.message }, null, 2)
  : JSON.stringify(results, null, 2);


fs.writeFileSync('./report.json', resultsAsJson);
