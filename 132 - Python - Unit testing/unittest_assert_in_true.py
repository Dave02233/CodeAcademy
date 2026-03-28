# Checkpoint 1
import unittest
import entertainment

class EntertainmentSystemTests(unittest.TestCase):

  def test_movie_license(self):
    daily_movie = entertainment.get_daily_movie()
    licensed_movies = entertainment.get_licensed_movies()
    # Checkpoint 2
    self.assertIn(daily_movie, licensed_movies)


  def test_wifi_status(self):
    wifi_enabled = entertainment.get_wifi_status()
    # Checkpoint 3
    self.assertTrue(wifi_enabled)

unittest.main()
