from reviews import counter, training_counts
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import numpy as np

review = "This crib was a shithole full of rats"
review_counts = counter.transform([review])

classifier = MultinomialNB()

training_labels = np.concatenate([np.zeros(1000).astype(int), np.ones(1000).astype(int)]).tolist()

classifier.fit(training_counts, training_labels)

print(classifier.predict(review_counts))
print(classifier.predict_proba(review_counts))