const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");
const path = require("path");
const os = require("os");

try {
  const filepath = core.getInput("filepath");
  const content = core.getInput("content");
  const mode = core.getInput("mode") || 600;

  const dir = path.dirname(filepath);

  if (dir) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filepath, content + os.EOL, { mode });

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
