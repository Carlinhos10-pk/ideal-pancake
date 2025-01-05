import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/players')
            .then(response => setPlayers(response.data))
            .catch(error => console.error('Erro ao obter dados dos jogadores:', error));
    }, []);

    return (
        <div>
            <h1>Estatísticas dos Jogadores</h1>
            <ul>
                {players.map(player => (
                    <li key={player.id}>{player.name}: {player.stats}</li>
                ))}
            </ul>
        </div>
    );
}

export default Players;