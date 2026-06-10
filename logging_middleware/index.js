import fs from 'fs';

export function Log(stack, level, packageName, message) {
  const log = `{ Error Stack: ${stack.toLowerCase()}, Level: ${level.toLowerCase}, Package: ${packageName.toLowerCase()}, Message: ${message} }`;
  console.log(log);

  // we can create log file for these as well
  // const randomFileName = message ? message + "_" + Date.now() : Date.now();
  // fs.writeFileSync(`./${randomFileName}.log`, log);
}

Log('asd','ad','Ad','ad')