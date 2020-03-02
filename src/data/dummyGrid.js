import { dummyData } from './dummyData';

const dummyGrid = [];

const yMax = 31;
const xMax = 26;

for (let i = 0; i <= yMax; i++) {
	dummyGrid.push(Array(xMax).fill(0));
}

for (const room of Object.values(dummyData)) {
	const coordinates = room.coordinates.slice(1, -1).split(',');
	const xCoordinate = coordinates[0];
	const yCoordinate = coordinates[1];
	dummyGrid[yCoordinate][xCoordinate] = room;
}

export { dummyGrid };
