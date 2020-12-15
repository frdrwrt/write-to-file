const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");
const path = require("path");
const os = require("os");

try {
  const filepath = core.getInput("filepath");
  const content = core.getInput("content");
  const mode = core.getInput("mode") || 600;
  console.log('Filepath: ', filepath);
  console.log('Mode: ', mode)

  const dir = path.dirname(filepath);

  if (dir) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filepath, content + os.EOL, { mode });

} catch (error) {
  core.setFailed(error.message);
}
