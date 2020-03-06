import React from 'react';

import Shrine1 from './Shrine1';
import Shrine2 from './Shrine2';
import Death from './Death';
import Library from './Library';
import Well2 from './Well2';
import Baker from './Baker';
import Skull from './Skull';
import PirateShip from './PirateShip';
import Goal from './Goal';
import CrystalBall from './CrystalBall';
import Church1 from './Church1';
import Scores from './Scores';
import Market from './Market';
import AllisonJAM from './AllisonJAM';
import MatthewJAM from './MatthewJAM';
import JonathanJAM from './JonathanJAM';
import Grass from './Grass';
import Cave from './Cave';
import Hole from './Hole';
import BlackHole from './BlackHole';

const Icon = props => {
	switch (props.name) {
		case "Linh's Shrine":
			return <Shrine1 {...props} />;
		case "Glasowyn's Grave":
			return <Death {...props} />;
		case 'Fully Shrine':
			return <Shrine2 {...props} />;
		case "Arron's Athenaeum":
			return <Library {...props} />;
		case 'Wishing Well':
			return <Well2 {...props} />;
		case 'JKMT Donuts':
			return <Baker {...props} />;
		case 'trap':
			return <Skull {...props} />;
		case "Pirate Ry's":
			return <PirateShip {...props} />;
		case 'The Peak of Mt. Holloway':
			return <Goal {...props} />;
		case 'The Transmogriphier':
			return <CrystalBall {...props} />;
		case "Sandofsky's Sanctum":
			return <Church1 {...props} />;
		case 'Snitch Board':
			return <Scores {...props} />;
		case 'Shop':
			return <Market {...props} />;
		case 'allisonJAM':
			return <AllisonJAM {...props} />;
		case 'JonathanJAM':
			return <JonathanJAM {...props} />;
		case 'matthewJAM':
			return <MatthewJAM {...props} />;
		case 'normal':
			return <Grass {...props} />;
		case 'cave':
			return <Cave {...props} />;
		case 'hole':
			return <Hole {...props} />;
		// case 'hole':
		// 	return <BlackHole {...props} />;
		default:
			return <div />;
	}
};

export default Icon;
