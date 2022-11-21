const financialData = require("./financial.json");
console.log("Financial data (1.1): ", getFiancialObject());

function getFiancialObject() {
  const from = new Date("2014-01-01").getTime();
  const to = new Date("2015-01-01").getTime();

  let sum = 0;
  financialData.forEach((f) => {
    const p = f.detailsOfPayent.date.split("-");
    const d = p[2] + "-" + p[1] + "-" + p[0];
    const date = new Date(d).getTime();
    if (from <= date && date < to) {
      sum += parseFloat(f.cost);
    }
  });
  return sum;
}

console.log("Financial data (1.2): ", getFiancialObject2());
function getFiancialObject2() {
  const financialObject = {};

  financialData.forEach((f) => {
    const company = f.detailsOfPayent.company;
    if (!financialObject[company]) {
      financialObject[company] = 0;
    }
    financialObject[company] += parseFloat(f.cost);
  });
  return financialObject;
}

console.log("Financial data (1.3): ", getFiancialObject3());
function getFiancialObject3() {
  const financialObject = {};

  financialData.forEach((f) => {
    const type = f.detailsOfPayent.Type;
    if (!financialObject[type]) {
      financialObject[type] = 0;
    }
    financialObject[type] += parseFloat(f.cost);
  });
  return financialObject;
}

console.log("Financial data (1.4): ", getFiancialObject4());
function getFiancialObject4() {
  const financialObject = {};

  financialData.forEach((f) => {
    const month = +f.detailsOfPayent.date.split("-")[1];
    if (!financialObject[month]) {
      financialObject[month] = 0;
    }
    financialObject[month] += parseFloat(f.cost);
  });
  return financialObject;
}

console.log("Financial data (1.5): ", getFiancialObject5());
function getFiancialObject5() {
  const financialObject = {};

  financialData.forEach((f) => {
    const p = f.detailsOfPayent.date.split("-");
    const d = p[2] + "-" + p[1] + "-" + p[0];
    const day = new Date(d).getDay();

    if (!financialObject[day]) {
      financialObject[day] = 0;
    }
    financialObject[day] += parseFloat(f.cost);
  });
  return financialObject;
}
