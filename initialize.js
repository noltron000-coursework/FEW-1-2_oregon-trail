const boat = {
	name: 'Salvation',
	crew: 12,
	food: 90,
	fuel: 40,
	gold: 50,
	cannons: 3,
	plating: 3,
	weightMax: 1000000,
	speedMax: 90,
};

const Salvation = new Galleon(
	boat.name,
	boat.crew,
	boat.food,
	boat.fuel,
	boat.gold,
	boat.cannons,
	boat.plating,
	boat.weightMax,
	boat.speedMax
);

console.log(Salvation)