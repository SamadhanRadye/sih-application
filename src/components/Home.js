import React from 'react';
import Aside from './Aside'; // Import the new Aside component

function Cards() {
  const layoutStyle = {
    display: 'flex',
    marginTop: '56px' // To avoid overlapping with the fixed navbar
  };

  const myStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    boxShadow: "0 4px 8px 0 #0bf1f1, 0 6px 20px 0 #0bf1f1",
    alignItems: "center",
    marginLeft: "200px", // Leave space for aside
    padding: "20px"
  };

  return (
    <div style={layoutStyle}>
      <Aside />
      <div style={myStyle}>
        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" className="card-img-top" alt="AI"/>
          <div className="card-body">
            <h5 className="card-title">Artificial Intelligence</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E" className="card-img-top" alt="Web development"/>
          <div className="card-body">
            <h5 className="card-title">Web development</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1WklZKoexVDmh41RmxlHVfe3svNv9y6lh1w&s" className="card-img-top" alt="Data Science"/>
          <div className="card-body">
            <h5 className="card-title">Data Science</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>        

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGL8TDkYh9Jqz3OHFpgmmqX3um5KeI8tBopw&s" className="card-img-top" alt="App Development"/>
          <div className="card-body">
            <h5 className="card-title">App Development</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" className="card-img-top" alt="AI"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>   

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" className="card-img-top" alt="AI"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>     

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" className="card-img-top" alt="AI"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>  

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" className="card-img-top" alt="AI"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>  

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" className="card-img-top" alt="AI"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>  

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" className="card-img-top" alt="AI"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>  
      
        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" className="card-img-top" alt="AI"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>  

        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" className="card-img-top" alt="AI"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Cards;