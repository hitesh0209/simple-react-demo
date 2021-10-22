import React, { useState } from "react";
const SliderData = [
    {
      image:
        'http://127.0.0.1:8887/a.jpg'
    },
    {
      image:
        'http://127.0.0.1:8887/b.jpg'
    },
    {
      image:
        'http://127.0.0.1:8887/c.jpg'
    },
    {
      image:
        'http://127.0.0.1:8887/d.jpg'
    },
    {
      image:
        'http://127.0.0.1:8887/e.jpg'
    }
  ];
  
const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//       return null;
//   }

  return (
    <section className='slider'>
         <button className='left-arrow' onClick={prevSlide}>prev</button>
      <button className='right-arrow' onClick={nextSlide}>next</button>
           {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='pic' className='image' />
            )}
          </div>
        );
      })}
      
    </section>
  );
};

export default Carousel;


// var none = "none";
// var block = "block";

// class Carousel extends Component {
//   constructor() {
//     super();

//     this.state = { display: none };
//     console.log(this.state);
//   }

//   change = (e) => {
//     var res = e.target.name;
//     console.log(res);
//     console.log(this.state);

//     if (res === "next") {
//       this.setState({
//         display: block,
//       });
//     } else {
//       this.setState({
//         display: none,
//       });
//     }
//   };
//   render() {
//     return (
//       <div>
//         <div id="carousel">
//           <img src="http://127.0.0.1:8887/a.jpg" alt="a" id="1"/>
//           <br />
//           <br />
//           <img src="http://127.0.0.1:8887/b.jpg" alt="b" id="2" style={this.state} />
//           <br />
//           <br />
//           <img src="http://127.0.0.1:8887/c.jpg" alt="c" id="3" style={this.state} />
//           <br />
//           <br />
//           <img src="http://127.0.0.1:8887/d.jpg" alt="d" id="4" style={this.state} />
//           <br />
//           <br />
//           <img src="http://127.0.0.1:8887/e.jpg" alt="e" id="5" style={this.state} />
//         </div>

//         <button id="prev" name="prev" onClick={this.change}>
//           {" "}
//           prev{" "}
//         </button>
//         <button id="next" name="next" onClick={this.change}>
//           {" "}
//           next{" "}
//         </button>
//       </div>
//     );
//   }
// }

// export default Carousel;
