const { environmentFactors, corn, pumpkin } = require("./farm");

// 1. get the costs for a crop
const getCostsForCrop = plant => plant.plantsPerCrop * plant.sowingCosts;

// 2. get the revenue for a crop
const getRevenueForCrop = plant => plant.salePrice  * getYieldForCrop(plant);

const getProfitForCrop = plant => getRevenueForCrop(plant) - getCostsForCrop(plant);

const getTotalProfit = plant => getProfitForCrop(plant) * plant.numberOfCrops;
 
const getYieldForPlant = plant => {
    let product = 0;
    switch (environmentFactors.sun && environmentFactors.wind) {
        case "low" && "low":
            product +=  plant.yield * ((100 + plant.factor.sun.low)/ 100) * 
                        ((100 + plant.factor.wind.low)/100);
            break;
        case "low" && "medium":
            product +=  plant.yield * ((100 + plant.factor.sun.low)/ 100) * 
                        ((100 + plant.factor.wind.medium)/100);
            break;
        case "low" && "high":
            product +=  plant.yield * ((100 + plant.factor.sun.low)/ 100) * 
                        ((100 + plant.factor.wind.high)/100);
            break;
        case "medium" && "low":
            product +=  plant.yield * ((100 + plant.factor.sun.medium)/ 100) * 
                        ((100 + plant.factor.wind.low)/100);
            break;
        case "medium" && "medium":
            product +=  plant.yield * ((100 + plant.factor.sun.medium)/ 100) * 
                        ((100 + plant.factor.wind.medium)/100);
            break;
        case "medium" && "high":
            product +=  plant.yield * ((100 + plant.factor.sun.medium)/ 100) * 
                        ((100 + plant.factor.wind.high)/100);
            break;
        case "high" && "low":
            product +=  plant.yield * ((100 + plant.factor.sun.high)/ 100) * 
                        ((100 + plant.factor.wind.low)/100);
            break;
        case "high" && "medium":
            product +=  plant.yield * ((100 + plant.factor.sun.high)/ 100) * 
                        ((100 + plant.factor.wind.medium)/100);
            break;
        case "high" && "high":
            product +=  plant.yield * ((100 + plant.factor.sun.high)/ 100) * 
                        ((100 + plant.factor.wind.high)/100);
            break;
    }
    return product;
};

const getYieldForCrop = element => element.crop.yield * element.numCrops;


const getTotalYield = function (harvest) {
    let totalY = 0;
    harvest.forEach(function(plant){
     totalY += plant.crop.yield * plant.numCrops;
    })
    return totalY;
}


// console.log(getTotalProfit(corn));
// console.log(getTotalProfit(pumpkin));











module.exports = {getRevenueForCrop, getCostsForCrop, getProfitForCrop, 
    getTotalProfit, getYieldForPlant, getYieldForCrop, getTotalYield};
