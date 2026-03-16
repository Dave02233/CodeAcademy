import numpy as np
from matplotlib import pyplot as plt
from sklearn.datasets import load_digits
from sklearn.cluster import KMeans
from sklearn.metrics import confusion_matrix, accuracy_score
from scipy.optimize import linear_sum_assignment

digits = load_digits()

print(digits.DESCR)
print(digits.data)
print(digits.target)

plt.gray()
plt.matshow(digits.images[100])
plt.show()
plt.close()

model = KMeans(n_clusters=10, random_state=42)
model.fit(digits.data)

# --- Cluster centers ---
fig = plt.figure(figsize=(8, 3))
fig.suptitle('Cluster Center Images', fontsize=14, fontweight='bold')

for i in range(10):
    ax = fig.add_subplot(2, 5, 1 + i)
    ax.imshow(model.cluster_centers_[i].reshape((8, 8)), cmap=plt.cm.binary)

plt.show()
plt.close()

# --- Remap ottimale ---
all_predicted = model.predict(digits.data)
all_labels = digits.target

cm = confusion_matrix(all_labels, all_predicted)
row_ind, col_ind = linear_sum_assignment(-cm)
cluster_to_label = {col_ind[i]: row_ind[i] for i in range(len(row_ind))}

print("Remap cluster → cifra reale:")
for cluster, label in sorted(cluster_to_label.items()):
    print(f"  Cluster {cluster} → Cifra {label}")

remapped = np.array([cluster_to_label[c] for c in all_predicted])
acc = accuracy_score(all_labels, remapped)
print(f"\nAccuracy dopo remap: {acc:.4f} ({acc*100:.2f}%)")

# --- Campioni per valutazione visiva ---
sample_indices = [np.where(digits.target == d)[0][0] for d in range(10)]
sample_indices += [np.where(digits.target == d)[0][1] for d in range(10)]

sample_data = digits.data[sample_indices]
sample_labels = digits.target[sample_indices]

predicted_clusters_remapped = np.array([cluster_to_label[c] for c in model.predict(sample_data)])

fig, axes = plt.subplots(4, 5, figsize=(10, 8))
fig.suptitle('Singole immagini: label reale vs cluster predetto (con remap)', fontsize=13, fontweight='bold')

for i, ax in enumerate(axes.flat):
    ax.imshow(sample_data[i].reshape((8, 8)), cmap=plt.cm.binary)
    ax.set_title(
        f'Reale: {sample_labels[i]}\nCluster: {predicted_clusters_remapped[i]}',
        fontsize=8,
        color='green' if sample_labels[i] == predicted_clusters_remapped[i] else 'red'
    )
    ax.axis('off')

plt.tight_layout()
plt.show()
plt.close()