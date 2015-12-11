


var airport = {};

airport.flights = ['lh', "am"];
print(JSON.stringify(airport));
delete airport.flights;
print("after");
print(JSON.stringify(airport));

