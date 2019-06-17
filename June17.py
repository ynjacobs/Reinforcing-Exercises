"""
Create a Location class with a name.

Create a Trip class with a list of Location instances (called stops or destinations or something similar).
 Define a method that lets you add locations to the trip's list of destinations.

Make several instances of Locations and add them to an instance of Trip.

Define a method in the Trip class that iterates through the list of locations and prints something 
similar to the following:

"Began trip."
"Travelled from Toronto to Ottawa."
"Travelled from Ottawa to Montreal."
"Travelled from Montreal to Quebec City."
"Travelled from Quebec City to Halifax."
"Travelled from Halifax to St. John's."
"Ended trip."
"""
class Location:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return self.name

class Trip:
    def __init__(self):
        self.stops = []

    def addStop(self, location):
        self.stops.append(location)

    def __str__(self):
        return f"{self.stops}"

    def printSchedule(self):
        print('------------------')

        # counter = 0
        for index in range(len(self.stops)):
            if index == 0:
                print('began trip')    
            else:
                print(f'travelled from {self.stops[index-1]} to {self.stops[index]}')
            # counter += 1
        print('ended trip')

# ============================================
location1 = Location('Toronto')
location2 = Location('Ottawa')
location3 = Location('Montreal')
location4 = Location('Quebec City')
location5 = Location('Halifax')
location6 = Location('St. John\'s')

trip = Trip()

trip.addStop(location1)
trip.addStop(location2)
trip.addStop(location3)
trip.addStop(location4)
trip.addStop(location5)
trip.addStop(location6)

# print(trip)

trip.printSchedule()