#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Nov 27 21:50:42 2018

@author: brucewayne
"""

import core
import dataHandler
import numpy as np
from scipy.optimize import linprog

if __name__ == "__main__":
    criteriaData = dataHandler.readRankingDataFromCsvFile("../input/criteria.csv")
    criteriaRankData = dataHandler.readRankingDataFromCsvFile("../input/criteriaRank.csv")
    criteriaRankData = dataHandler.parseRankingData(criteriaRankData)
    priceRankData = dataHandler.readRankingDataFromCsvFile("../input/priceRank.csv")
    priceRankData = dataHandler.parseRankingData(priceRankData)
    qualityRankData = dataHandler.readRankingDataFromCsvFile("../input/qualityRank.csv")
    qualityRankData = dataHandler.parseRankingData(qualityRankData)
    deliveryRankData = dataHandler.readRankingDataFromCsvFile("../input/deliveryRank.csv")
    deliveryRankData = dataHandler.parseRankingData(deliveryRankData)
    processRankData = dataHandler.readRankingDataFromCsvFile("../input/processRank.csv")
    processRankData = dataHandler.parseRankingData(processRankData)
    supplierData = dataHandler.readSupplierDataFromCsvFile("../input/suppliers.txt")
    numOfSuppliers, orderSize, lotSize, maximumSize = \
                                dataHandler.parseSupplierData(supplierData)
    weightTable = core.tableOperation(criteriaRankData)
    scoreTable = np.array([core.tableOperation(priceRankData), 
                           core.tableOperation(qualityRankData),
                           core.tableOperation(deliveryRankData),
                           core.tableOperation(processRankData)])
    finalScore = core.finalScoreOp(scoreTable, weightTable)
    c = -np.multiply(finalScore, lotSize)
    xUpper = np.multiply(maximumSize, 1 / lotSize)
    limit = tuple([tuple((0, i)) for i in xUpper])
    result = linprog(c, A_ub=[lotSize], b_ub=[orderSize], bounds=limit)
    print(result.x)