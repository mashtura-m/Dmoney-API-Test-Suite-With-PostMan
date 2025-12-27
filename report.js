const newman = require('newman');

newman.run({
    // 1. Point to your exported JSON files
    // Replace 'collection.json' and 'env.json' with your actual file names
    collection: //"https://api.postman.com/collections/50488459-3101b5c4-a838-400b-8ae4-ac575304168e?access_key=PMAT-01KDEN1CD1NGSM1680DEJ8S4ZN",
    
    //require('./collection.json'), 
   // environment: require('./env.json'), 
    
    // 2. Specify reporters: 'htmlextra' for the HTML report, 'cli' for terminal output
    reporters: ['htmlextra', 'cli'],
    
    // 3. Configure the HTML reporter
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // Where to save the report
            // optional: logs: true,
            // optional: title: 'My DMoney API Test Report',
        }
    }
}, function (err) {
    if (err) { 
        throw err; 
    }
    console.log('collection run complete!');
});