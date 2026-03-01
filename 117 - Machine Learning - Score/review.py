import seaborn
import pandas as pd
import numpy as np
import codecademylib3
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import codecademylib3

# Load the data
tr = pd.read_csv('transactions_modified.csv')
print(tr.head())
print(tr.info())

# How many fraudulent transactions?

# Summary statistics on amount column
stats = tr['amount'].describe()
print(stats)

# Create isPayment field
print(tr['type'].unique())
tr['isPayment'] = tr['type'].apply(lambda x: 1 if x in ['PAYMENT', 'DEBIT'] else 0)

# Create isMovement field
tr['isMovement'] = tr['type'].apply(lambda x: 1 if x in ['CASH_OUT', 'TRANSFER'] else 0)

# Create accountDiff field
tr['accountDiff'] = tr['oldbalanceOrg'] - tr['oldbalanceDest']

# Create features and label variables
features = tr[['amount', 'isPayment', 'isMovement', 'accountDiff']]
label = tr['isFraud']
# Split dataset
X_train, X_test, y_train, y_test = train_test_split(features, label, test_size = 0.3)

# Normalize the features variables
scaler = StandardScaler()
scaler.fit_transform(X_train)
scaler.transform(X_test)

# Fit the model to the training data
model = LogisticRegression()
model.fit(X_train, y_train)

# Score the model on the training data
print(model.score(X_train, y_train))

# Score the model on the test data
print(model.score(X_test, y_test))

# Print the model coefficients
print(model.coef_)

# New transaction data
transaction1 = np.array([123456.78, 0.0, 1.0, 54670.1])
transaction2 = np.array([98765.43, 1.0, 0.0, 8524.75])
transaction3 = np.array([543678.31, 1.0, 0.0, 510025.5])

# Create a new transaction
your_transaction = np.array([1200.0, 1.0, 0.0, 56000.0])

# Combine new transactions into a single array
sample_transactions = np.stack([transaction1, transaction2, transaction3, your_transaction])

# Normalize the new transactions
sample_transactions = scaler.transform(sample_transactions)

# Predict fraud on the new transactions
pred = model.predict_proba(sample_transactions)[:, 1]

# Show probabilities on the new transactions
print(pred)