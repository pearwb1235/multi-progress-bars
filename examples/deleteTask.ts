import { MultiProgressBars } from "~/index";

console.log("GO");
const mpb = new MultiProgressBars({
  initMessage: "Test",
  anchor: "top",
  persist: true,
  border: true,
});
mpb.addTask("A", {
  type: "percentage",
  percentage: 0,
});
//console.log("0");
mpb.addTask("B", {
  type: "percentage",
  percentage: 0,
});
mpb.updateTask("A", {
  percentage: 1,
});
setTimeout(() => {
  mpb.removeTask("A");
}, 1000);
setTimeout(() => {
  mpb.updateTask("B", {
    percentage: 1,
  });
}, 2000);
setTimeout(() => {
  mpb.removeHeader();
  mpb.removeFooter();
  mpb.removeTask("B");
  mpb.close();
}, 4000);
setTimeout(() => {
  console.log("1");
}, 6000);
setTimeout(() => {
  console.log("2");
}, 7000);
setTimeout(() => {
  console.log("3");
}, 8000);
setTimeout(() => {
  console.log("4");
}, 9000);
