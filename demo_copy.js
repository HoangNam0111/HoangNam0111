const fs = require ( 'fs' );
fs.unlink('1', (err) => {
    if (err) {
        throw err;
    }

    console.log("file is deleted.");
});
