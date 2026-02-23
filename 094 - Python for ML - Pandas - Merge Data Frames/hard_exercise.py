import codecademylib3
import pandas as pd

ad_clicks = pd.read_csv('ad_clicks.csv')

#print(ad_clicks.head())

ad_clicks_sources = ad_clicks.groupby('utm_source').ad_click_timestamp.count().reset_index()

#print(ad_clicks_sources)

ad_clicks['is_click'] = ad_clicks.ad_click_timestamp.apply(lambda x: not pd.isnull(x))

#print(ad_clicks)

clicks_pivot = ad_clicks.groupby(['utm_source', 'is_click']).user_id.count().reset_index().pivot(
  values='user_id',
  columns='is_click',
  index='utm_source'
)

clicks_pivot['percent_clicked'] = clicks_pivot[True] / (clicks_pivot[True] + clicks_pivot[False])

#print(clicks_pivot)

exp_group_diff = ad_clicks.groupby('experimental_group').count().reset_index()

#print(exp_group_diff)

diff_by_group = ad_clicks.groupby(['experimental_group', 'is_click']).user_id.count().reset_index().pivot(
  values='user_id',
  columns='is_click',
  index='experimental_group'
)

#print(diff_by_group)

a_clicks = ad_clicks[ad_clicks.experimental_group == 'A']
b_clicks = ad_clicks[ad_clicks.experimental_group == 'B']

a_click_by_day = a_clicks.groupby(['day', 'is_click']).user_id.count().reset_index().pivot(
  values='user_id',
  columns='is_click',
  index='day'
)
a_click_by_day['percent_clicked'] = a_click_by_day[True] / (a_click_by_day[True] + a_click_by_day[False])

print(a_click_by_day)

b_click_by_day = b_clicks.groupby(['day', 'is_click']).user_id.count().reset_index().pivot(
  values='user_id',
  columns='is_click',
  index='day'
)
b_click_by_day['percent_clicked'] = b_click_by_day[True] / (b_click_by_day[True] + b_click_by_day[False])

print(b_click_by_day)


















