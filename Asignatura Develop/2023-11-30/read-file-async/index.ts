console.log("Begin");

import {readFile} from 'fs';

readFile("package.json",(err,text)=>{
    if (err) {
        console.error(err);
        return;
    }
    const json = JSON.parse(text.toString());
    console.log(json);
});
console.log("End");