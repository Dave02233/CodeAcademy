# create dictionary of label:values in order
rating_dict = {'Excellent':5, 'New':4, 'Like New':3, 'Good':2, 'Fair':1}

#create a new column 
cars['condition_rating'] = cars['condition'].map(rating_dict)