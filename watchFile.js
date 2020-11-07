const path = require("path");
const chokidar = require("chokidar");
const {spawn} = require('child_process');

module.exports = {
  watchFile(input, output) {
    const watcher = chokidar.watch(path.join(input, process.cwd()), {
      ignored: /(^|[\/\\])\../,
      persistent: true,
    });

    watcher.on("change", (e, path) => {
      const process_c = spawn("gcc", [input, "-o", output], {
        stdio: "inherit",
      });

      process_c.on("close", (code) => {
        const res = spawn(`./${output}`, { detached: true });

        res.unref();
        res.stderr.pipe(process.stderr);

        process.stdin.pipe(res.stdin);

        res.stdout.on("data", (data) => {
          console.log(`${data}`);
        });
      });
    });
  },
};
