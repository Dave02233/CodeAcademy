from data import points, labels
"""
Il kernel RBF mappa i dati in uno spazio a dimensione infinita e consente confini di decisione
non lineari. Rispetto ai kernel lineare o polinomiale, il RBF è più adatto a catturare pattern
complessi e non lineari nei dati.

Parametri SVM:
- gamma: controlla la portata di influenza di ogni esempio di addestramento. Valori bassi significano
  che ogni punto ha una portata ampia, mentre valori alti significano una portata ristretta (il modello
  si affida principalmente agli esempi vicini). Gamma = 0.1 è un valore moderato.
- C: parametro di regolarizzazione che controlla il compromesso tra maximizzare il margin e minimizzare
  gli errori di classificazione. Valori bassi di C permettono un margin più ampio (più tolleranza agli errori),
  mentre valori alti di C cercano di classificare correttamente tutti gli esempi di addestramento.
  C = 1.0 è il valore di default.
"""
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC

training_data, validation_data, training_labels, validation_labels = train_test_split(points, labels, train_size = 0.8, test_size = 0.2, random_state = 100)

classifier = SVC(kernel="rbf", gamma=0.1, C=1.0)
classifier.fit(training_data, training_labels)

print(classifier.score(validation_data, validation_labels))
