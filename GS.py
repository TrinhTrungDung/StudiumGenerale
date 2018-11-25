# -*- coding: utf-8 -*-
"""
Spyder Editor

Generale Studium: Supplier Selection with Multiple Criteria
Author: Ha Anh Hoang
Core logic with dummy data from the example.
comb(n,k) wasn't used anywhere but should be used to check 
table integrity after being read from a file
"""

import numpy as np
from math import factorial
from scipy.optimize import linprog

def comb(n,k):
    if(n>k):
        return factorial(n) / factorial(k) / factorial(n-k)
    else:
        print("Invalid")
        return -1
    
def populate(array):
    #resultTable = np.ones((dimension,dimension),float)
    #Count the dimension of the array
    arrayLength = len(array)
    if(len(array)<1): return None
    else:
        dimension = 1
        while(arrayLength>0):
            arrayLength-=dimension
            dimension+=1
        if(arrayLength!=0):
            print("Invlid input array")
            return None
    resultTable = np.ones((dimension,dimension),float)
    #Reverse the array
    array = array[::-1]
    #Inputs raw data from the input array
    for i in range(1,dimension):
       for j in range(i):
           resultTable[i][j]=array.pop()       
    #Transform and returns the list
    transposedTable = 1 / np.transpose(resultTable)
    return np.multiply(resultTable,transposedTable)
#Assumes NxN matrixes, else won't work properly
def normalize(matrix):
    dimension = len(matrix)
    columnSum = np.sum(matrix, axis=0)
    for i in range(dimension):
        for j in range(dimension):
            matrix[j][i]= matrix[j][i]/columnSum[i]
    return matrix

def rowAveragesArray(matrix):
    dimension = len(matrix)
    return np.sum(matrix,axis=1) / dimension
    
def tableOperation(array):
    return rowAveragesArray(normalize(populate(array)))

def finalScoreOp(scoreTable, weightTable):
    dimension = len(scoreTable)
    finalScoreTable = []
    for i in range(dimension):
        supplierScore = [scoreTable[j][i] for j in range(dimension)]
        finalScoreTable.append(np.sum(np.multiply(weightTable, supplierScore)))
    return np.array(finalScoreTable)
#Dummy data, from the example
# --DATA--
productRank = [7,4,1/4,5,1/5,1/3]
priceRank = [1/7,1/6,4,1/3,3,4]
qualityRank = [6,1,1/6,1/2,1/2,1]
deliveryRank = [3,6,2,1/2,1,1/3]
processRank = [1/4,1/3,1/2,1,3,2]
orderSize = 800
lotSize = np.array([40,20,100,50])
maximum = np.array([400,400,600,300])
# --TEXT--
weight = tableOperation(productRank)
#Calculate the score table 14.6. This whole block should be 
#replaced with a for loop or something as the data comes in
#as arrays. Each member array contains the data from a single
#category
scoreTable=np.array([tableOperation(priceRank),tableOperation(qualityRank),
            tableOperation(deliveryRank),tableOperation(processRank)])
finalScore = finalScoreOp(scoreTable,weight)
#Since the goal is to maximize, we find the minimum of the objective
c = np.multiply(finalScore,lotSize)*(-1)
#Combination of all orders should be smaller than the order size
#A = lotSize
#Each supplier can only supply that much lots. Defined as a tuple
xUpper = np.multiply(maximum,1/lotSize)
limit = tuple([tuple((0,i)) for i in xUpper])
#Solver uses the "simplex" method
result = linprog(c,A_ub=[lotSize],b_ub=[orderSize],bounds=limit)
print(result.x)    




