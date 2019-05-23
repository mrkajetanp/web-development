import React from 'react';
import Board from './Board';

function calculateWinner(squares: any) {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0 ; i < lines.length ; i++) {
        let [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

class Game extends React.Component {
    state: {history: Array<{ squares: Array<string | null> }>, xIsNext: boolean};

    constructor(props: any) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }

    handleClick = (i: number) => {
        let history = this.state.history;
        let current = history[history.length-1];
        let squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }

    render() {
        let history = this.state.history;
        let current = history[history.length - 1];
        let winner = calculateWinner(current.squares);

        let moves = history.map((step, move) => {
            let desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i: number) => this.handleClick(i)}
                    />
                    </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div>{moves}</div>
                </div>
            </div>
        );
    }
}

export default Game;
