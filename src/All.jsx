// import React from 'react';
// import ReactDOM from 'react-dom';
// import Game from './Game'
// import './index.css';

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

//---------------CONVERT TO FUNCTIONAL COMPONENT--------------
// const Square = (props) => {
//     return(
//         <button className="square" 
//             onClick = {props.onClick}>
//             {props.value}
//         </button>
//     )
// }


//   class Board extends React.Component {
//     // constructor(props){
//     //     super(props)
//     //     this.state = {
//     //         squares: Array(9).fill(null),
//     //         isXNext: true
//     //     }
//     // }

//     // handleClick(i){
//     //     const squaresCopy = [...this.state.squares]

//     //     //if there is a winner or if that box has alrdy been used(x or o) - make it unclickable
//     //     if(calculateWinner(squaresCopy) || squaresCopy[i]){
//     //         return;
//     //     }

//     //     squaresCopy[i] = this.state.isXNext ? "X" : "O"
//     //     this.setState({
//     //         squares: squaresCopy,
//     //         isXNext: !this.state.isXNext
//     //     })
//     // }


//     renderSquare(i) {
//       return <Square 
//         value={this.props.squares[i]}
//         onClick={()=>this.props.onClick(i)} 
//       />;
//     }

  
//     render() {
//     //   console.log(this.state.squares)

//     //   const winner = calculateWinner(this.state.squares)
//     //   let status;
//     //   if(winner){
//     //       status = `Winner is: ${winner}`
//     //   } else if(!this.state.squares.includes(null)) {
//     //     status = 'GAME OVER!'
//     //   } else {
//     //     status = this.state.isXNext ? 'Next player: X' : 'Next player: O'
//     //   }
  
//       return (
//         <div>
//           {/* <div className="status">{status}</div> */}
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  

//   //to implement game-info time travel, need to lift up the state from board to Game
//   class Game extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             history:[{
//                 squares: Array(9).fill(null)
//             }],
//             xIsNext: true,
//             stepNumber: 0,
//         }
//     }

//     handleClick(i){
//         // const history = this.state.history
//         //so that when user goes back to a certain point in history and clicks a new move, the previous 'future' history removed and this.state.history begins collection from this move onwards
//         const history = this.state.history.slice(0, this.state.stepNumber + 1)
//         const current = history[history.length-1]
//         const squaresCopy = [...current.squares]

//         //if there is a winner or if that box has alrdy been used(x or o) - make it unclickable
//         if(calculateWinner(squaresCopy) || squaresCopy[i]){
//             return;
//         }

//         squaresCopy[i] = this.state.isXNext ? "X" : "O"
//         this.setState({
//             history: history.concat([{
//                 squares: squaresCopy
//             }]),
//             stepNumber: history.length,
//             isXNext: !this.state.isXNext
//         })
//     }


//     jumpTo(step){
//         this.setState({
//             stepNumber: step,
//             //reset whose turn when player goes back in time
//             isXNext: (step % 2) === 0
//         })

//     }

//     render() {
//         const history = this.state.history
//         // const current = history[history.length - 1]
//         //current changed to history[at which step number] so that when user jump to a previous step, react will render the view/current state of that step
//         const current = history[this.state.stepNumber]
//         const winner = calculateWinner(current.squares)

//         let status;
//         if(winner){
//             status = `Winner is: ${winner}`
//         } else if(!current.squares.includes(null)) {
//             status = 'GAME OVER!'
//         } else {
//             status = this.state.isXNext ? 'Next player: X' : 'Next player: O'
//         }

//         console.log(history)

//         const moves = history.map((step, move) => {
//             const desc = move ?
//                 'Go to move #' + move :
//                 'Go to Game Start'
//                 return (
//                     <li key={move}>
//                         <button onClick={()=> this.jumpTo(move)}>{desc}</button>
//                     </li>
//                 )
//         })

//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board 
//                 squares={current.squares}
//                 onClick={(i) => this.handleClick(i)}/>
//           </div>
//           <div className="game-info">
//             <div>{status}</div>
//             <ol>{moves}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
  // ================REACT DOM RENDER========================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
  

//   //-------- HELPER FUNCTION -----------

//   function calculateWinner(squares){
//     const winningLines = [
//         [0,1,2],
//         [0,3,6],
//         [2,5,8],
//         [6,7,8],
//         [3,4,5],
//         [1,4,7],
//         [0,4,8],
//         [2,4,6],
//     ]

//     for(let i = 0; i < winningLines.length; i++){
//         const [a, b, c] = winningLines[i]
//         //first squares[a] ensure that there is a value either x or o, not null
//         if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//             return squares[a]
//         }
//     }
//     return null;
    
//   }