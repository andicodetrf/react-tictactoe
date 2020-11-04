import React, {Component} from 'react'
import Square from './Square'


class Board extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         isXNext: true
    //     }
    // }

    // handleClick(i){
    //     const squaresCopy = [...this.state.squares]
    //     //if there is a winner or if that box has alrdy been used(x or o) - make it unclickable
    //     if(calculateWinner(squaresCopy) || squaresCopy[i]){
    //         return;
    //     }

    //     squaresCopy[i] = this.state.isXNext ? "X" : "O"
    //     this.setState({
    //         squares: squaresCopy,
    //         isXNext: !this.state.isXNext
    //     })
    // }


    renderSquare(i) {
      return <Square 
        value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)} 
      />;
    }

  
    render() {
    //   console.log(this.state.squares)

    //   const winner = calculateWinner(this.state.squares)
    //   let status;
    //   if(winner){
    //       status = `Winner is: ${winner}`
    //   } else if(!this.state.squares.includes(null)) {
    //     status = 'GAME OVER!'
    //   } else {
    //     status = this.state.isXNext ? 'Next player: X' : 'Next player: O'
    //   }
  
      return (
        <div>
          {/* <div className="status">{status}</div> */}
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

  export default Board