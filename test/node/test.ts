import * as gaikan from "gaikan";

const template = "#{root.test}";

let result: string;

result = gaikan(template, { test: "Flux" });
console.log(result);

gaikan(template, { test: "Flux" }, console.log.bind(console));

const tmplStr = gaikan.compileFromString(template);
result = tmplStr(gaikan, { test: "Flux" });
console.log(result);

const tmplFile = gaikan.compileFromFile("./some/file.html");
result = tmplFile(gaikan, { test: "Flux" }, {});
console.log(result);