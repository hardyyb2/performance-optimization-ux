import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import BackgroundOriginal from "./assets/images/background-original.webp";
import BackgroundSmall from "./assets/images/background-small.webp";
import BackgroundMedium from "./assets/images/background-medium.webp";
import BackgroundLarge from "./assets/images/background-large.webp";

const Card = ({ image, title }) => {
  return (
    <div className="Card-root">
      <div className="Image-container">
        <img
          src={image}
          alt={title}
          className="Card-img"
          width={300}
          height={225}
        />
      </div>
      <div className="Image-title">{title}</div>
    </div>
  );
};

function App() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const url = `https://picsum.photos/v2/list?limit=100`;
    axios.get(url).then((res) => {
      setImages(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <img
          src={BackgroundOriginal}
          alt="wooden background"
          className="Header-img"
          width={500}
          height={400}
          srcSet={`
            ${BackgroundSmall} 640w,
            ${BackgroundMedium} 1920w, 
            ${BackgroundLarge} 2400w
          `}
        />
      </div>
      {/* <div className="Cards">
        {images?.map(({ download_url, author }, index) => (
          <Card image={download_url} title={author} key={index} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
