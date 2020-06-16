const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/neion-customer-ui/polyfills-es5.js",
    "./dist/neion-customer-ui/polyfill-webcomp.js",
    "./dist/neion-customer-ui/scripts.js",
    "./dist/neion-customer-ui/main-es5.js",
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/neion-customer-ele.js");
  //   await fs.copyFile(
  //     "./dist/neion-customer-ui/styles.css",
  //     "elements/styles.css"
  //   );
  //await fs.copy("./dist/neion-customer-ui/assets/", "elements/assets/");
})();
