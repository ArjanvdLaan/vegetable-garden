const {getCostsForCrop, getRevenueForCrop, getProfitForCrop, 
    getTotalProfit, getYieldForPlant, getYieldForCrop, getTotalYield} = require("./functions.js")

// 1. get the costs for a crop
describe("getCostsForCrop",() => {
    const corn = {
        name: 'corn',
        plantsPerCrop: 230, 
        sowingCosts: 1,
    };

    test("get costs for crop of maize", () => {
        expect(getCostsForCrop(corn)).toBe(230);
    });
});

// 2. get the revenue for a crop
describe("getRevenueForCrop", () => {
    const corn = {
        name: 'corn',
        yield: 3,
        salePrice: 2,
        plantsPerCrop: 200,
    };

    test("get revenue for crop of maize, with environmental factors", () => {
        expect(getRevenueForCrop(corn)).toBe(1200);
    });
});

// 3. get the profit for a crop
describe("getProfitForCrop", () => {
    const corn = {
        name: 'corn',
        yield: 3,
        salePrice: 2,
        plantsPerCrop: 200,
        sowingCosts: 1,
    };

    test("get profit for crop of maize, with environmental factors", () => {
        expect(getProfitForCrop(corn)).toBe(1000);
    });
});

// 4. get the profit for all crops
describe("getTotalProfit", () => {
    const corn = {
        name: 'corn',
        yield: 3,
        salePrice: 2,
        plantsPerCrop: 200,
        sowingCosts: 1,
        numberOfCrops: 3,
    };

    test("get profit for all crops of maize, with environmental factors", () => {
        expect(getTotalProfit(corn)).toBe(3000);
    });
});


// 5. get the yield for one plant with environment factors
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 0,
                medium: -20,
                high: -40,
            },
        },
    };
    const environmentFactors = {
        sun: "low",
        wind: "low",
        };

    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(15);
    });
});

// 6. get the yield for a crop with environment factors
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

// 7. get the yield of all crops with environment factors
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops",  () => {
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
        expect(getTotalYield( crops )).toBe(23);
    });
});
// get yield for all crops with 0 amount
    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ 
            crop: corn, 
            numCrops: 0 
        }];
        expect(getTotalYield(crops )).toBe(0);
    });




