(this.webpackJsonpreacttictoe=this.webpackJsonpreacttictoe||[]).push([[0],{17:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(1),a=r.n(n),i=r(9),c=r.n(i),u=r(10),o=r(11),l=r(4),h=r(5),d=r(7),j=r(6),b=function(e){return Object(s.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},O=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(s.jsx)(b,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(a.a.Component),v=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var s;return Object(l.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},s}return Object(h.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1],s=Object(o.a)(r.squares);m(s)||s[e]||(s[e]=this.state.isXNext?"X":"O",this.setState({history:t.concat([{squares:s}]),stepNumber:t.length,isXNext:!this.state.isXNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,isXNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],a=m(n.squares);e=a?"Winner is: ".concat(a):n.squares.includes(null)?this.state.isXNext?"Next player: X":"Next player: O":"GAME OVER!",console.log(r);var i=r.map((function(e,r){var n=r?"Go to move #"+r:"Go to Game Start";return Object(s.jsx)("li",{children:Object(s.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:n})},r)}));return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsx)("div",{className:"game-board",children:Object(s.jsx)(O,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})}),Object(s.jsxs)("div",{className:"game-info",children:[Object(s.jsx)("div",{children:e}),Object(s.jsx)("ol",{children:i})]})]})}}]),r}(a.a.Component);function m(e){for(var t=[[0,1,2],[0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(u.a)(t[r],3),n=s[0],a=s[1],i=s[2];if(e[n]&&e[n]===e[a]&&e[n]===e[i])return e[n]}return null}r(17);c.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ab4ca042.chunk.js.map