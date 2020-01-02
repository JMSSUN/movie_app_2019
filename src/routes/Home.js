import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  
  getMovies = async () =>{
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  
    // this.setState({movies: movies}); // state의 movies : axios의 movies
    this.setState({ movies, isLoading: false }); // movies만 써도 됨
  }

  componentDidMount() {
     this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        { isLoading 
            ? ( <div className="loader">
                <span className="loader_text">Loading...</span>
              </div>
            ) : ( 
              <div className="movies">
                {movies.map(movie => (
              <Movie key={movie.id} 
                      id={movie.id} 
                      year={movie.year} 
                      title={movie.title} 
                      summary={movie.summary} 
                      poster={movie.medium_cover_image} 
                      genres={movie.genres}/>
            ))}
          </div>             
        )}
      </section>
    );
  }
}

export default Home;


// function component 강의01

// function Food({name, picture, rating}){
//   return ( <div>
//       <h1>I like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//     );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }; 

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "potato",
//     image: "https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/01/05/Others/Images/2017-01-05/iStock-184387501.JPG",
//     rating: 4.1
//   },
//   {
//     id: 3,
//     name: "fried chicken",
//     image: "https://www.tasteofhome.com/wp-content/uploads/2018/04/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS-1.jpg",
//     rating: 2.8
//   }

// ];

// function renderFood(dish){
//   return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
// }

// function App() { // function component
//   return (
//     <div>
//       {
//         /* {foodILike.map(dish => (// dish는 object
//           <Food name={dish.name} picture={dish.image}/>
//         ))}  */
//       foodILike.map(renderFood)
//       }

//     </div>
//   );
// }


  // class component 강의02

  //class App extends React.Component { // class component
  //   constructor(props) {
  //     super(props);
  //     console.log("hello");
  //   }
  //   componentDidMount(){
  //     console.log("component rendered");
  //   }
  //   componentDidUpdate(){
  //     console.log("I just updated");
  //   }
  //   componentWillUnmount(){
  //     console.log("Goodbye, world");
  //   }
  //   state = {
  //     count: 0
  //   };
  //   add = () => {
  //     this.setState( current => ({count: current.count + 1}));    // setState는 react는 state를 refresh하고 render function을 호출 / current = this.state
  //   };
  //   minus = () => {
  //     this.setState({count: this.state.count - 1});   
  //   };
  //   render(){
  //     console.log("I'm rendering");
  //     return (
  //     <div>
  //       <h1>The number is: {this.state.count}</h1>
  //       <button onClick={this.add}>Add</button>
  //       <button onClick={this.minus}>Minus</button>
  //     </div>
  //     );
  //   }
  // }




  // 강의03

  // class App extends React.Component {
  //   state = {
  //     isLoading: true,
  //     movies: []
  //   };
  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({isLoading: false});
  //     }, 2000);
  
  //   }
  //   render() {
  //     const { isLoading } = this.state;
  //     return <div>{isLoading? "Loading..." : "We are ready"}</div>;
  //   }
  // }