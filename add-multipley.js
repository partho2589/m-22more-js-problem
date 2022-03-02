function addMultiplay ( charQuantity, tableQuantity, badQuantity){
    const parcharWood = 3;
    const partableWood = 5;
    const parbadQuantity = 50;
    const charWoodQuantity = charQuantity * parcharWood;
    const tableWoodQuantity = tableQuantity * partableWood;
    const badWoodQuantity = badQuantity * parbadQuantity;
    const totalWood = charWoodQuantity + tableWoodQuantity + badWoodQuantity;
    return totalWood;
}
// console.log(addMultiplay( 1, 1, 1));

function addElectoniProdac (mobailCovar, mobailChargar, speacher){
    const parMobailcoverPrice = 120;
    const parMobilChargarPric = 220;
    const parSpeacherPrice = 750;
    const totalMobilecoverPrice = mobailCovar * parMobailcoverPrice;
    const totalMobilchargarPice = mobailChargar * parMobilChargarPric;
    const totalSpeacher = speacher * parSpeacherPrice;
    const totalPrice = totalMobilecoverPrice + totalMobilchargarPice + totalSpeacher;
    return totalPrice;
}
console.log( addElectoniProdac( 1, 1, 1));