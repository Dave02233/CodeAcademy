import codecademylib3
import seaborn as sns
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from sklearn.tree import DecisionTreeClassifier
from sklearn import tree

#https://archive.ics.uci.edu/ml/machine-learning-databases/flags/flag.data
cols = ['name','landmass','zone', 'area', 'population', 'language','religion','bars','stripes','colours',
'red','green','blue','gold','white','black','orange','mainhue','circles',
'crosses','saltires','quarters','sunstars','crescent','triangle','icon','animate','text','topleft','botright']
df= pd.read_csv("https://archive.ics.uci.edu/ml/machine-learning-databases/flags/flag.data", names = cols)

#variable names to use as predictors
var = [ 'red', 'green', 'blue','gold', 'white', 'black', 'orange', 'mainhue','bars','stripes', 'circles','crosses', 'saltires','quarters','sunstars','triangle','animate']

#Print number of countries by landmass, or continent
print(df.groupby('landmass')[var].mean())

#Create a new dataframe with only flags from Europe and Oceania
df_36 = df[df['landmass'].isin([3, 6])]

#Print the average vales of the predictors for Europe and Oceania
print(df_36.groupby('landmass')[var].mean())

#Create labels for only Europe and Oceania

labels = (df_36['landmass'] == 3).astype(int)

#Print the variable types for the predictors
print(df_36[var].dtypes)

#Create dummy variables for categorical predictors
data = pd.get_dummies(df_36[var])

#Split data into a train and test set
x_train, x_test, y_train, y_test = train_test_split(data, labels, random_state=42, test_size=0.3)

#Fit a decision tree for max_depth values 1-20; save the accuracy score in acc_depth
depths = range(1, 21)
acc_depth = []
for i in depths:
  dtc = DecisionTreeClassifier(max_depth=i)
  dtc.fit(x_train, y_train)
  acc_depth.append(dtc.score(x_test, y_test))

#Plot the accuracy vs depth
plt.scatter(depths, acc_depth, alpha=0.4)
plt.xticks(depths)
plt.yticks(np.arange(0.0, 1.1, 0.05))
plt.show()
plt.close()
#Find the largest accuracy and the depth this occurs
best = max(acc_depth)
best_depth = acc_depth.index(best)
#Refit decision tree model with the highest accuracy and plot the decision tree
dtc = DecisionTreeClassifier(max_depth=depths[best_depth], random_state=42)
dtc.fit(x_train, y_train)
print(dtc.score(x_test, y_test))

plt.figure(figsize=(27,12))
tree.plot_tree(dtc, feature_names = x_train.columns,  
            class_names = ['Oceania', 'Europe'],filled=True)
plt.tight_layout()
plt.show()
plt.close()

#Create a new list for the accuracy values of a pruned decision tree.  Loop through
#the values of ccp and append the scores to the list
# ---------------------------
# ccp_alpha controlla la potatura dell'albero decisionale
# Cost complexity pruning calcola un costo di complessità per ogni ramo
# Se la riduzione dell'impurità di un ramo è minore di ccp_alpha, quel ramo viene tagliato
# Più è alto ccp_alpha, più l'albero viene potato e diventa semplice
# ----------------------------
ccp_alphas = dtc.cost_complexity_pruning_path(x_train, y_train)['ccp_alphas']
acc_pruned = []
for i in ccp_alphas:
  new_tree = DecisionTreeClassifier(ccp_alpha=i)
  new_tree.fit(x_train, y_train)
  acc_pruned.append(new_tree.score(x_test, y_test))

#Plot the accuracy vs ccp_alpha
plt.plot(ccp_alphas, acc_pruned, marker='o', alpha=.5)
plt.yticks(np.arange(0.0, 1.0, 0.05))
plt.xticks(ccp_alphas)
plt.axvline(x=ccp_alphas[acc_pruned.index(max(acc_pruned))])
plt.title('Pruned')
plt.xlabel('ccp_alpha')
plt.ylabel('Accuracy')
plt.show()
plt.close()

#Find the largest accuracy and the ccp value this occurs
best_ccp = ccp_alphas[acc_pruned.index(max(acc_pruned))]

#Fit a decision tree model with the values for max_depth and ccp_alpha found above
best_model = DecisionTreeClassifier(ccp_alpha = best_ccp, max_depth = best_depth, random_state=42)

best_model.fit(x_train, y_train)
print(best_model.score(x_test, y_test))

#Plot the final decision tree
plt.figure(figsize=(27,12))
tree.plot_tree(best_model, feature_names = x_train.columns,  
            class_names = ['Oceania', 'Europe'],filled=True)
plt.tight_layout()
plt.show()
plt.close()


# Risultato finale, stesso score fra con e senza l'aggiunta del miglior ccp, 
# ma al tree è stato potato un nodo e reso più semplice a parità di score
