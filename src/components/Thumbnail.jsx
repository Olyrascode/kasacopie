import Card from "./Card"
import data from './logements.json';

function Thumbnail() {
    return (
      <div className="thumbnail">
        {data.map((item, index) => (
          <Card key={index} title={item.title} cover={item.cover} />
        ))}
      </div>
    );
  }
  
  export default Thumbnail;
