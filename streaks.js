let numPlayers = 100;
let numMatches = 100;
let concurrentMatches = numPlayers/10;
let players = [];
let matches = [];

// initalize arrays
for (let i=0; i<numPlayers; i++) {
	if (i%10===0) { 
		matches.push([]);
	}
	players.push([]);
}

// run multiple sets of matches
for (let k=0; k<numMatches; k++) {
	// place each player in random match
	let randomMatch = concurrentMatches;
	for (let i=0; i<numPlayers; i++) {
		randomMatch = Math.floor(Math.random() * concurrentMatches);
		// if match full choose again
		if (matches[randomMatch].length >= 10) {
			i--;
		}
		else {
			matches[randomMatch].push(i);
		}
	}

	// shuffle teams
	let randomPlayer = 10;
	let temp;
	for (let i=0; i<concurrentMatches; i++) {
		for (let j=0; j< 10; j++) {
			randomPlayer = Math.floor(Math.random() * 10);
			temp = matches[i][j];
			matches[i][j] = matches[i][randomPlayer];
			matches[i][randomPlayer] = temp;
		}
	}

	// determine winning team and update player match history
	let winner = 2;
	for (let i=0; i<concurrentMatches; i++) {
		winner = Math.floor(Math.random() * 2);

		for (let j=0; j<10; j++) {
			if (winner === 0) {
				if (j<5) {
					players[matches[i][j]].push('O');
				}
				else {
					players[matches[i][j]].push('X');
				}
			}
			else {
				if (j<5) {
					players[matches[i][j]].push('X');
				}
				else {
					players[matches[i][j]].push('O');
				}
			}
		}
	}

	for (let i=0; i < concurrentMatches; i++) {
		matches[i] = [];
	}
}

// export as json
console.log(players);

// count number of matches each player won
for (let i=0; i < numPlayers; i++) {
	players[i].push(0);
	for (let j=0; j < numMatches; j++) {
		if (players[i][j] === 'O') {
			players[i][numMatches]++;
		}
	}
	console.log(players[i][numMatches]);
}

// for each player count the number of matches in 3+



