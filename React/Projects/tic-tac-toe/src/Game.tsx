import React from 'react';

type SquareProps = {
  value: string;
  onClick: () => void;
};

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

type BoardProps = {
  squares: Array<string>;
  onClick: (i: number) => void;
};

class Board extends React.Component<BoardProps> {
  renderSquare(i: number) {
    return (
      <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)} />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares: Array<string>): string {
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }

  return '';
}

type GameState = {
  history: Array<{ squares: Array<string> }>;
  stepNumber: number;
  xIsNext: boolean;
}
class Game extends React.Component<{}, GameState> {
  state: GameState = {
    history: [{
      squares: Array(9).fill(''),
    }],
    stepNumber: 0,
    xIsNext: true,
  };

  handleClick(i: number) {
    let history = this.state.history.slice(0, this.state.stepNumber+1);
    let current = history[history.length - 1]; 
    let squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i])
      return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    let history = this.state.history;
    let current = history[this.state.stepNumber];
    let winner = calculateWinner(current.squares);

    let moves = history.map((step, move) => {
      let desc = move ? `Go to move ${move}`: 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = (winner) ? ('Winner ' + winner) :
      ('Next player: ' + (this.state.xIsNext ? 'X' : 'O'));

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game