#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modified on Sun Jan  13 13:14:12 2019

@author: root
"""

import random
import numpy as np
random.seed(1337)
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
#
# --DATA--
#
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
#
# -- TEXT --
#
def objectiveConstructor(coeff):
    return lambda x: np.sum(np.multiply(coeff,x))

def constraintConstructor(lotSize,orderSize):
    return lambda x: orderSize - np.sum(np.multiply(lotSize,x))

#Construct the objective function

objective = objectiveConstructor(c)
constraint = constraintConstructor(lotSize,orderSize)

#Create the initial population
numWeight = len(finalScore)
solPerPop = 30
#Individual generator function, with constraints in mind
def generate(xUpper):
    trigger = True
    while(trigger):
        gene =[]
        for i in range(4):
            gene.append(random.randint(0,xUpper[i]))
        if (constraint(gene) > -1):
            trigger = False
    return gene
#    print(str(newPopulation[i])+"~"+str(constraint(newPopulation[i])))
#Calculate fitness for the whole population
def calPopFitness(pop):
    fitness = []
    for i in pop:
        fitness.append(objective(i))
    return np.array(fitness)
#Define a function for the mating pool
def selectMatingPool(pop,fitness,numParents):
    parents=np.empty((numParents,pop.shape[1]))
    for i in range(numParents):
        maxFitnessIndex = np.where(fitness == np.max(fitness))
        maxFitnessIndex = maxFitnessIndex[0][0]
        parents[i, :] = pop[maxFitnessIndex,:]
        fitness[maxFitnessIndex]=-999999999
    return parents
#Define the crossover strategy
def crossover(parents, offspring_size):
    offspring = np.empty(offspring_size)
    # The point at which crossover takes place between two parents. Usually, it is at the center.
    crossover_point = np.uint8(offspring_size[1]/2)

    for k in range(offspring_size[0]):
        # Index of the first parent to mate.
        parent1_idx = k%parents.shape[0]
        # Index of the second parent to mate.
        parent2_idx = (k+1)%parents.shape[0]
        # The new offspring will have its first half of its genes taken from the first parent.
        offspring[k, 0:crossover_point] = parents[parent1_idx, 0:crossover_point]
        # The new offspring will have its second half of its genes taken from the second parent.
        offspring[k, crossover_point:] = parents[parent2_idx, crossover_point:]
    return offspring

def mutation(offspring_crossover,xUpper):
    # Mutation changes a single gene in each offspring randomly.
    for idx in range(offspring_crossover.shape[0]):
        # The random value to be added to the gene.
        #Make sure mutation doesn't go out of bound
        triggerSwitch, triggerCheck = True, True
        while (triggerCheck):
            while(triggerSwitch):
                randomValuePair= (np.random.randint(0,len(offspring_crossover[idx])),
                                    np.random.randint(0,len(offspring_crossover[idx])))
                if(randomValuePair[0]!=randomValuePair[1]):
                    triggerSwitch = False
                    ###
            offspring_crossover[idx, randomValuePair[0]] += 1
            offspring_crossover[idx, randomValuePair[1]] -= 1
            ###
            for i in range(len(offspring_crossover[idx])):
                if (offspring_crossover[idx,i]<0):
                    offspring_crossover[idx,i] = 0
                elif (offspring_crossover[idx,i] > xUpper[i]):
                    offspring_crossover[idx,i] = xUpper[i]
                    ###
            if (constraint(offspring_crossover[idx]) > -1):
                triggerCheck=False
            else:
                triggerSwitch=True
    return offspring_crossover

#Create a new population
newPopulation = []
for i in range(solPerPop):
    newPopulation.append(generate(xUpper))
newPopulation=np.array(newPopulation)
num_generations = 100
num_parents_mating = 2
for generation in range(num_generations):
    # Measuring the fitness of each chromosome in the population.
    fitness = calPopFitness(newPopulation)


    # Selecting the best parents in the population for mating.
    parents = selectMatingPool(newPopulation, fitness, 
                                      num_parents_mating)

    # Generating next generation using crossover.
    offspring_crossover = crossover(parents,
                                       offspring_size=(solPerPop-parents.shape[0]
                                       , numWeight))

    # Adding some variations to the offsrping using mutation.
    offspring_mutation = mutation(offspring_crossover,xUpper)


    # Creating the new population based on the parents and offspring.
    newPopulation[0:parents.shape[0], :] = parents
    newPopulation[parents.shape[0]:, :] = offspring_mutation

fitness = calPopFitness(newPopulation)
maxFitnessIndex = np.where(fitness == np.max(fitness))
print("Averaged solution: ", newPopulation[maxFitnessIndex][0])
