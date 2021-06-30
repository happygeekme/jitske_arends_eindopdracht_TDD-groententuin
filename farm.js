const getYieldForPlant = plant => plant.yield;

const getYieldForCrop = crops => crops.numCrops * crops.crop.yield;

const getTotalYield = (input) => {
    const crops = input.crops;
    const cropsYield = crops.map(crop => getYieldForCrop(crop));
    return cropsYield.reduce((acc, cur) => acc + cur)
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
}

// bereken de kosten voor een crop:getCostsForCrop
// bereken inkomsten voor een crop (zonder omgevingsfactoren): getRevenueForCrop
// bereken de winst voor een crop (zonder omgevingsfactoren): getProfitForCrop
// bereken de winst voor meerdere crops (zonder omgevingsfactoren): getTotalProfit
// Implementeer de hierop volgende functionaliteiten door je eerder geschreven functies aan te passen. Schrijf dus geen nieuwe functies. 
// Het is dus de bedoeling dat je nu binnen de functies gaat checken of er wel/geen relevante omgevingsfactoren zijn meegegeven.

// neem omgevingsfactoren mee in het berekenen van de opbrengst (in kilo's) van een plant: getYieldForPlant, gebruik daarvoor de volgende datastructuren: