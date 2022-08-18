const corn = {
    name: "corn",
    yield: 3,
};

const pumpkin = {
    name: "pumpkin",
    yield: 4,
};
    
const crops = [    
    { crop: pumpkin,
    plantsPerCrop: 50,
    numberOfCrops: 4,
    sowingCosts: 2,
    salePrice: 4,
    factor: {
        sun: {
            low: -60,
            medium: 0,
            high: 60,
        },
        wind: {
            low: 0,
            medium: -10,
            high: -25,
        },
    },
    },
    { crop: corn,
    plantsPerCrop: 200,
    numberOfCrops: 3,
    sowingCosts: 2,
    salePrice: 2,
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
    },
]

    
const environmentFactors = {
    sun: "low",
    wind: "low",
    };

module.exports = {pumpkin, corn, environmentFactors };




