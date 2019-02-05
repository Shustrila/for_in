import sortByObjectOnArray from './sortByObjectOnArray.js';

describe("TEST: sort by object on array", () => {

	test("full job verification", () => {
		let arrKeys = ["name", "level"];

		let obj = {
			name: 'мечник',
			health: 10,
			level: 2,
			attack: 80,
			defence: 40
		};

		let result = [
			{key: "name", value: "мечник"},
			{key: "level", value: 2},
			{key: "attack", value: 80},
			{key: "defence", value: 40},
			{key: "health", value: 10}
		];

		expect(sortByObjectOnArray(obj, arrKeys)).toEqual(result);
	});

	test("Dummy key", () => {
		let arrKeys = ["attack", "levels"];

		let obj = {
			name: 'мечник',
			health: 10,
			level: 2,
			attack: 80,
			defence: 40
		};

		let result = [
			{key: "attack", value: 80},
			{key: "defence", value: 40},
			{key: "health", value: 10},
			{key: "level", value: 2},
			{key: "name", value: "мечник"}
		];

		expect(sortByObjectOnArray(obj, arrKeys)).toEqual(result);
	})

});
