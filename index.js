#!/usr/bin/env node
const fs = require("fs").promises;
const path = require("path");
const chokidar = require("chokidar");
const argv = process.argv.slice(2);
// const util = require('util');
const { spawn } = require("child_process");
const watchFile = require("./watchFile.js");
const chalk = require("chalk");

const input = argv[0];
const output = argv[1] || "a.out";

fs.readFile(path.join(process.cwd(), output))
  .then((data) => {
    if (data) {
      const child = spawn(`./${output}`);

      child.stdout.on("data", (data) => {
        console.log(chalk.red`${data}`);
      });
    }
  })
  .catch((err) => Promise.resolve())
  .finally(() => watchFile(input, output));
