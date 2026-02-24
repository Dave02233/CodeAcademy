def get_gradient_at_b(x, y, m, b):
  # Create a variable called diff
  diff = 0
  for i in range(0, len(x)):
    y_val = y[i]
    x_val = x[i]
    diff += (y_val - ((m * x_val) + b))
    b_gradient = -2/len(x) * diff
  return b_gradient

