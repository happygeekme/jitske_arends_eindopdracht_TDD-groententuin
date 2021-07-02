const getYieldForPlant = (plant) => plant.yield;

const getYieldForCrop = (crops, factors) => {
  const basicCropYield = crops.numCrops * crops.crop.yield;
  if (!factors) {
    return basicCropYield;
  } else {
    const factorsOfInfluece = crops.crop.factors;
    let sunInfluece;
    let windInfluece;

    switch (factors.sun) {
      case "low":
        sunInfluece = (factorsOfInfluece.sun.low + 100) / 100;
        break;
      case "medium":
        sunInfluece = (factorsOfInfluece.sun.medium + 100) / 100;
        break;
      case "high":
        sunInfluece = (factorsOfInfluece.sun.high + 100) / 100;
        break;
      default:
        sunInfluece = 1;
    }
    switch (factors.wind) {
      case "low":
        windInfluece = (factorsOfInfluece.wind.low + 100) / 100;
        break;
      case "medium":
        windInfluece = (factorsOfInfluece.wind.medium + 100) / 100;
        break;
      case "high":
        windInfluece = (factorsOfInfluece.wind.high + 100) / 100;
        break;
      default:
        windInfluece = 1;
    }

    return basicCropYield * sunInfluece * windInfluece;
  }
};

const getTotalYield = (input) => {
  const crops = input.crops;
  const cropsYield = crops.map((crop) => getYieldForCrop(crop));
  return cropsYield.reduce((acc, cur) => acc + cur);
};

// bereken de kosten voor een crop:getCostsForCrop
const costsPerPlant = 1;

const getCostsForCrop = (crops) => crops.numCrops * costsPerPlant;

// bereken inkomsten voor een crop (zonder omgevingsfactoren): getRevenueForCrop
const salesPrice = 2;

const getRevenueForCrop = (crops) => {
  const cropYield = getYieldForCrop(crops);
  return cropYield * salesPrice;
};

// bereken de winst voor een crop (zonder omgevingsfactoren): getProfitForCrop
const getProfitForCrop = (crops) => {
  const revenuePerCrop = getRevenueForCrop(crops);
  const costPerCrop = getCostsForCrop(crops);
  return revenuePerCrop - costPerCrop;
};
// bereken de winst voor meerdere crops (zonder omgevingsfactoren): getTotalProfit
const getTotalProfit = (input) => {
  const crops = input.crops;
  const profit = crops.map((crop) => getProfitForCrop(crop));
  return profit.reduce((acc, cur) => acc + cur);
};

// Implementeer de hierop volgende functionaliteiten door je eerder geschreven
// functies aan te passen. Schrijf dus geen nieuwe functies.
// Het is dus de bedoeling dat je nu binnen de functies gaat checken of er
// wel/geen relevante omgevingsfactoren zijn meegegeven.

// neem omgevingsfactoren mee in het berekenen van de opbrengst (in kilo's)
// van een plant: getYieldForPlant, gebruik daarvoor de volgende datastructuren:

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
