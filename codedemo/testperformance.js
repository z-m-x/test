const { performance, PerformanceObserver } = require("perf_hooks");

const add = (a) => {};

const arr = [1, 2, 3];
const obj = { a: 1 };
performance.mark("start");
/* ------------------------------------- */
for (let i = 0; i < 100000000; i++) {
  add(arr);
}

// add(obj);不同参数类型会导致jsv8引擎优化编译回退到字节码阶段不做优化

for (let i = 0; i < 100000000; i++) {
  add(arr);
}
performance.mark("end");
/* ------------------------------------- */

const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0]);
});

observer.observe({ entryTypes: ["measure"] });

performance.measure("测量1", "start", "end");
