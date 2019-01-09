#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Jan  6 14:35:58 2019
Particle swarm optimization for the linear problem.
Very overkilled,but why not
Result can varied very wildly due to RNG.
@author: root
"""

from pyswarm import pso
import numpy as np


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
#Calculate the score table 14.6. This whole block should be 
#replaced with a for loop or something as the data comes in
#as arrays. Each member array contains the data fro a single
#category?
weight = tableOperation(productRank)
scoreTable=np.array([tableOperation(priceRank),tableOperation(qualityRank),
            tableOperation(deliveryRank),tableOperation(processRank)])
finalScore = finalScoreOp(scoreTable,weight)
c = np.multiply(finalScore,lotSize)
xUpper = np.multiply(maximum,1/lotSize)
xUpper.astype(int)
xLower = np.zeros((len(lotSize)),int)
#The above steps won't be changed no matter what
#since only the optimization step is different 
#-- Particle swarm optimization
#Define the target function
#   - args passed as a list to contain the results
#   Length based on the number of suppliers
#   - finalScore is the list that contains the
#   final score on the step above 
mainArgs=tuple([np.multiply(finalScore,lotSize),
          np.append(lotSize,np.array([orderSize]))])
def objective(x,*args):
    target = 0
    objectiveArgs, conArgs = args
    for i in range(len(x)):
        target-=x[i]*objectiveArgs[i]
    return target


def constraint(x,*args):
    objectiveArgs, conArgs = args
    target=conArgs[-1] 
    for i in range(len(x)):
        target-=x[i]*conArgs[i]
    return target
#Use PSO to optimize
xopt, fopt = pso(objective,xLower,xUpper,ieqcons=[constraint],args=mainArgs)
#Output result
print('Order specification: '+ str(np.rint(xopt)))