export default (obj, keys) => {
	let objNew = {};

	const object = (prop) => {
		let arr = [];

		for (let i in prop){
			arr.push({key: i, value: prop[i]})
		}

		return arr
	};

	keys.forEach((item) => {
		if (obj[item] !== undefined) {
			objNew[item] = obj[item];
			delete obj[item];
		}
	});

	return [
		...object(objNew),
		...object(obj).sort((a, b) => a.key[0] > b.key[0])
	]
}
