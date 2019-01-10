from simanneal import Annealer
import random
import numpy as np

def calculateTotalOrder(numOfOrderedLots, lotSizes):
    return np.sum(numOfOrderedLots * lotSizes)

def constraint1(numOfOrderedLots, lotSizes, totalOrder):
    return calculateTotalOrder(numOfOrderedLots, lotSizes) <= totalOrder

def generateDesiredOrderLots(lotSizes, maxQuantities):
    maxNumOfOrderLots = maxQuantities // lotSizes
    tempNumOfOrderLots = maxNumOfOrderLots
    
    while not constraint1(tempNumOfOrderLots, lotSizes, 800):
        for i in range(maxNumOfOrderLots.size):
            tempNumOfOrderLots[i] = random.randint(0, maxNumOfOrderLots[i])
        
    return tempNumOfOrderLots
    
class SupplierSelection(Annealer):
    
    def __init__(self, state, finalScores, lotSizes, maxQuantities):
        self.finalScores = finalScores
        self.lotSizes = lotSizes
        self.maxQuantities = maxQuantities
        super(SupplierSelection, self).__init__(state)
        
    def move(self):
        maxOrderLots = self.maxQuantities // self.lotSizes
        if not constraint1(self.state, self.lotSizes, 800):
            self.state = generateDesiredOrderLots(lotSizes, maxQuantities)
        else:
            indexA = random.randint(0, self.state.size - 1)
            indexB = random.randint(0, self.state.size - 1)
            while indexA == indexB:
                indexA = random.randint(0, self.state.size - 1)
                indexB = random.randint(0, self.state.size - 1)
            self.state[indexA] -= 1
            self.state[indexB] += 1
            if self.state[indexA] < 0:
                self.state[indexA] += 1
            if self.state[indexB] > maxOrderLots[indexB]:
                self.state[indexB] -= 1
            if not constraint1(self.state, self.lotSizes, 800):
                self.state = generateDesiredOrderLots(lotSizes, maxQuantities)
        
    def energy(self):
        return -np.sum(self.state * self.finalScores * self.lotSizes)
    
if __name__ == '__main__':
    lotSizes = np.array([40, 20, 100, 50, 30])
    maxQuantities = np.array([400, 400, 600, 300, 600])
    finalScores = np.array([0.2186, 0.4046, 0.1921, 0.1885, 0.0])
    
    for _ in range(10):
        initState = generateDesiredOrderLots(lotSizes, maxQuantities)
        supplierSelection = SupplierSelection(initState, finalScores, lotSizes, maxQuantities)
        supplierSelection.steps = 100000
        
        state, energy = supplierSelection.anneal()
        
        print(state)
        print(energy)