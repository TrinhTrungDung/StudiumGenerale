#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Nov 27 20:20:41 2018

@author: brucewayne
"""

import csv
from fractions import Fraction
import numpy as np

def readRankingDataFromCsvFile(filePath):
    """
    Read data from a csv formatted file
    Return list of data
    Return None if file is not found
    """
    data = None
    try:
        with open(filePath) as file:
            reader = csv.reader(file)
            data = next(reader)
    except FileNotFoundError:
        raise RuntimeError("Please create file first")
        
    return data


def readSupplierDataFromCsvFile(filePath):
    data = []
    try:
        with open(filePath) as file:
            lines = file.readlines()
            for line in lines:
                data.append(line.replace("\n", ""))
    except FileNotFoundError:
        raise RuntimeError("Please create file first")
            
    return data


def numOfInputsCorelateNumOfCriteria(listOfCriteria):
    return sum(range(len(listOfCriteria)))


def numOfInputsCorelateNumOfSuppliers(suppliers):
    return sum(range(len(suppliers)))


def parseRankingData(data):
    try:
        data = list(map(float, map(Fraction, data)))
    except ValueError:
        data = data
    except TypeError:
        raise RuntimeError("Cannot parse data")
        
    return data

def parseSupplierData(supplierData):
    numOfSuppliers, orderSize = map(int, (supplierData[0], supplierData[1]))
    lotSize = np.array(list(map(int, supplierData[2].split(","))))
    maximum = np.array(list(map(int, supplierData[3].split(","))))
    
    return (numOfSuppliers, orderSize, lotSize, maximum)


def checkValidNumOfInputs(listOfInputs, listOfCriteria):
    if len(listOfInputs) != numOfInputsCorelateNumOfCriteria(listOfCriteria):
        return False
    
    return True
