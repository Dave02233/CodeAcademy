const team = {
    _players: [{
      firstName: 'Pippo', 
      lastName: 'Coca', 
      age: 57
    },{
      firstName: 'Schneider', 
      lastName: 'Bradley', 
      age: 32
    },{
      firstName: 'Pippavo', 
      lastName: 'Coca', 
      age: 78
    }],
    _games: [{
      opponent: 'Mirabello FC', 
      teamPoints: 10,
      opponentPoints: 0
    },{
      opponent: 'Villaggio Snia', 
      teamPoints: 3,
      opponentPoints: 4
    },{
      opponent: 'Frattamaggiore FC', 
      teamPoints: 1,
      opponentPoints: 14
    }], 
      get players() {
        return this._players;
    },
      get games() {
        return this.games;
    },
      addPlayer(newFirstName, newLastName, newAge) {
        const player = {
          firstName: newFirstName,
          lastName: newLastName, 
          age: newAge
        }
        this._players.push(player);
      }, 
      addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
          opponent: newOpponent, 
          teamPoints: newTeamPoints, 
          opponentPoints: newOpponentPoints
        }
      this._games.push(game);
      }
  };
  
  team.addPlayer('Pippo', 'Cianuro', 22)
  team.addGame('Avellino FC', 0, 0);
  console.log(team)
  
  
  
  
  
  
  
  
  
  
  
  