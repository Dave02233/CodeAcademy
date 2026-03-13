import codecademylib3_seaborn
import matplotlib.pyplot as plt

from sklearn.datasets import load_iris

iris = load_iris()

print(iris.data)

print(iris.target)

print(iris.data[0, :], iris.target[0])

print(iris.DESCR)