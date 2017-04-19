import React, { Component } from 'react'; //eslint-disable-line
import './App.css';
import ListColor from './components/ListColor/ListColor.js';
import Header from './components/Header/Header.js';
import InputColor from './components/InputColor/InputColor';
import { SketchPicker } from 'react-color';

class App extends Component {

 state = {
      styleCss : {
          backgroundColor : 'green'
      },
      colors : [
          {id:1, name:'violet', color:'#f5aafb'},
          {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
          {id:3, name:'pale green', color:'#aafbde'},
          {id:4, name:'vermillon', color:'#fe532e'},
          {id:5, name:'sky blue', color:'#82c4fa'},
          {id:6, name:'salmon', color:'#fb8b8b'},
        ],
      background: '#fff',
        name:"",
        color: ""
    }


changeColor = (color) => {
  this.setState ({
    styleCss : {backgroundColor : color}
  });
}


// methode push

addColor = (e) =>{
  e.preventDefault();
  this.setState( (state) =>{
    this.state.colors.push({name : this.state.nameColor, color: this.state.background})
  })
}

// méthode fetch

// addColor = (e) =>{
//   e.preventDefault();
//   // e.stopPropagation();
//   this.setState({
//     colors: [...this.state.colors, {name: this.state.nameColor, color: this.state.background, id: this.state.colors.length + 1}]
//   });
// }



  
// control Component

handleChangeName = (e) => 
this.setState({
  [e.target.name] : e.target.value
});


 handleChangeComplete = (color, e) => {
    this.setState({ 
      background: color.hex
  });
  };



  render() {
    return (
      <div className="App">
       <Header styleCss={this.state.styleCss}/>
        <div className="transformContainer">
         <ListColor colors={this.state.colors} changeColor={this.changeColor}/>
          <div className="formColor">
          <form onSubmit={this.addColor}>
            <legend>Ajoute une couleur</legend>
            <label htmlFor="">Nom </label>
            <InputColor handleChangeName={this.handleChangeName}/>
            <SketchPicker className="pickerColor" 
            color={ this.state.background }
            name="color"
            onChangeComplete={ this.handleChangeComplete } 
            />
            <button type="submit" >GO</button>
          </form>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
