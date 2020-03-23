import React, { Component } from 'react'
import MovieList from './MovieList';
import './App.css'
import AddMovie from './AddMovie';
import Spinnerr from './Spinnerr';
import HOC from './hoc';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      input : "" , 
      rating :"", 
      img:"" , 
      name:"" , 
      searchStar : 5 ,
      MovieList:[{name: "FILM1" , img : "https://fr.web.img6.acsta.net/pictures/16/12/21/16/47/286492.jpg" ,rating :3},{name: "Jumanji" , img : "https://wvv.wiflix.net/img/7f8e-0452-85c1-4ed8.jpg" ,rating :5}] , 
      dispaly : false,
     isLoading :  false
         

     }
  }

  addMovie=(newMovie)=> {
    this.setState({
      MovieList:[...this.state.MovieList , newMovie]
    })
  }


  render() { 
 
    return ( <div>
      
        <div className="header">
       
          <input type="text" placeholder="Search" onChange={(e)=>this.setState({input:e.target.value})}/>
           <span onClick={()=>this.setState({searchStar:1})}>⭐</span>
           <span onClick={()=>this.setState({searchStar:2})}>⭐</span>
           <span onClick={()=>this.setState({searchStar:3})}>⭐</span>
           <span onClick={()=>this.setState({searchStar:4})}>⭐</span>
           <span onClick={()=>this.setState({searchStar:5})}>⭐</span>
           {console.log(this.state.searchStar)}
        </div>
     
        <h3 onClick={()=>this.setState({display:!this.state.display})}>+</h3>
        <MovieList searchInput={this.state.input} searchStar={this.state.searchStar} MovieList={this.state.MovieList} />
        <AddMovie newMovie={this.addMovie} display ={this.state.display}  />

       
    </div> );
  }
}
 
export default HOC(App);