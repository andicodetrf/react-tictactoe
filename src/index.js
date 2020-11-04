import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class Square extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         value: null
    //     }
    // }
//     render() {
//       return (
//         <button className="square" 
//         onClick = {this.props.onClick}>
//           {this.props.value}
//         </button>
//       );
//     }
//   }

//CONVERT TO FUNCTIONAL COMPONENTS
const Square = (props) => {
    return(
        <button className="square" 
            onClick = {props.onClick}>
            {props.value}
        </button>
    )
}


  class Board extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true
        }
    }

    handleClick(i){
        const squaresCopy = [...this.state.squares]

        //if there is a winner or if that box has alrdy been used(x or o) - make it unclickable
        if(calculateWinner(squaresCopy) || squaresCopy[i]){
            return;
        }

        squaresCopy[i] = this.state.isXNext ? "X" : "O"
        this.setState({
            squares: squaresCopy,
            isXNext: !this.state.isXNext
        })
    }


    renderSquare(i) {
      return <Square 
        value={this.state.squares[i]}
        onClick={()=>this.handleClick(i)} 
      />;
    }

  
    render() {
      console.log(this.state.squares)

      const winner = calculateWinner(this.state.squares)
      let status;
      if(winner){
          status = `Winner is: ${winner}`
      } else if(!this.state.squares.includes(null)) {
        status = 'GAME OVER!'
      } else {
        status = this.state.isXNext ? 'Next player: X' : 'Next player: O'
      }
  
      return (
        <div>
          <div className="status">{status}</div>
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
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  

  function calculateWinner(squares){
    const winningLines = [
        [0,1,2],
        [0,3,6],
        [2,5,8],
        [6,7,8],
        [3,4,5],
        [1,4,7],
        [0,4,8],
        [2,4,6],
    ]

    for(let i = 0; i < winningLines.length; i++){
        const [a, b, c] = winningLines[i]
        //first squares[a] ensure that there is a value either x or o, not null
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
    
  }