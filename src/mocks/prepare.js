export default async function prepare() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./browser");
    return worker.start();
  }
}
