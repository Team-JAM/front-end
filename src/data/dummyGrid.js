import { dummyData } from './dummyData';

const dummyGrid = [];

const dimension = 30;

for (let i = 0; i <= dimension; i++) {
	dummyGrid.push(Array(dimension).fill(0));
}

for (const room of Object.values(dummyData)) {
	console.log(room.room_id);
	const coordinates = room.coordinates.slice(1, -1).split(',');
	const xCoordinate = coordinates[0];
	const yCoordinate = coordinates[1];
	console.log(xCoordinate, yCoordinate);
	dummyGrid[yCoordinate][xCoordinate] = room;
}

export { dummyGrid };
