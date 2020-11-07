#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const chokidar = require('chokidar');
const argv = process.argv.slice(2);
// const util = require('util');
const {spawn} = require('child_process');
const {watchFile} = require('./watchFile.js');


const input = argv[0];
const output = argv[1] || 'a.out';

fs.readFile(path.join(__dirname,output))
  .then(data => {
    if(data){
      const child = spawn(`./${output}`,{stdio: 'inherit'});
    }
  })
  .finally(()=> watchFile(input, output))


