import * as gaikan from "gaikan";

const template = "#{root.test}";

let result: string;

result = gaikan(template, { test: "Flux" });
console.log(result);

result = gaikan(template, { test: "Flux" }, {});
console.log(result);

// Does not work in browser
// gaikan(template, { test: "Flux" }, res => console.log(res));

const tmplStr = gaikan.compileFromString(template);
result = tmplStr(gaikan, { test: "Flux" });
console.log(result);

// Does not work in browser
// const tmplFile = gaikan.compileFromFile("./some/file.html");
// result = tmplFile(gaikan, { test: "Flux" }, {});
// console.log(result);