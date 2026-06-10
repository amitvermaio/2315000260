import fs from 'fs';
export function Log(stack, level, packageName, message) {
  const log = `Error Stack: ${stack}, Level: ${level}, Package: ${packageName}, Message: ${message}`;
  console.log(log);
  const randomFileName = Date.now();
  fs.writeFileSync(`./${randomFileName}.log`, log);
}

Log("backend", "ad", "ad", "ad")