import codecademylib3_seaborn
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# load and investigate the data here:
df = pd.read_csv('tennis_stats.csv')
print(df.info())

def plotLR(df, x_feature, y_feature):
  x_train, x_test, y_train, y_test = train_test_split(df[x_feature].values.reshape(-1, 1), df[y_feature], train_size=0.7, test_size=0.3)
  mlr = LinearRegression()
  mlr.fit(x_train, y_train)
  y_prev = mlr.predict(x_test)
  plt.scatter(df[x_feature],df[y_feature], alpha=0.4)
  plt.plot(x_test, y_prev, 'r')
  plt.title(x_feature)
  plt.show()
  plt.close()
  print(round(mlr.score(x_test, y_test), 2), x_feature)

for f in df.columns:
  if df[f].dtype != 'object' and f != 'Winnings':
    plotLR(df, f, 'Winnings')

X = df[['Aces', 'BreakPointsFaced', 'BreakPointsOpportunities', 'DoubleFaults', 'ReturnGamesPlayed', 'ServiceGamesPlayed', 'Wins', 'Losses']]
y = df['Winnings']

x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.7)

mlr = LinearRegression()
mlr.fit(x_train, y_train)
print(mlr.score(x_test, y_test))
# Score finale 0.855