const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

describe("getCostsForCrop", () => {
  test("Calculate costs for one crop corn", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getCostsForCrop(input)).toBe(10);
  });

  test("Calculate costs for one crop pumpkin", () => {
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const input = {
      crop: pumpkin,
      numCrops: 2,
    };
    expect(getCostsForCrop(input)).toBe(2);
  });
});

describe("getRevenueforCrop", () => {
  test("Calculate revenue for corn", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getRevenueForCrop(input)).toBe(60);
  });

  test("Calculate revenue for pumpkin", () => {
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const input = {
      crop: pumpkin,
      numCrops: 2,
    };
    expect(getRevenueForCrop(input)).toBe(16);
  });
});

describe("getProfitForCrop", () => {
  test("Calculate profit for corn", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getProfitForCrop(input)).toBe(50);
  });

  test("Calculate profit for pumpkin", () => {
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const input = {
      crop: pumpkin,
      numCrops: 2,
    };
    expect(getProfitForCrop(input)).toBe(14);
  });
});

describe("getTotalProfit", () => {

    test("Calculate total profit with multiple crops", () => {
        const corn = {
          name: "corn",
          yield: 3,
        };
        const pumpkin = {
          name: "pumpkin",
          yield: 4,
        };
        const crops = [
          { crop: corn, numCrops: 5 },
          { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({ crops })).toBe(39);
      });
    
      test("Calculate total profit with 0 amount", () => {
        const corn = {
          name: "corn",
          yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalProfit({ crops })).toBe(0);
      });
});
