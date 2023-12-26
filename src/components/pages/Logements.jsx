// import { useParams } from "react-router-dom";
// import Header from "../Header"
// import Footer from "../Footer"
// import Dropdown from "../Dropdown"
// import Carousel from "../logementspage/Caroussel"
// import data from '../logements.json';



// function Logements({useParams}) {
   

//     return (
//         <div>
//             <Header />
//             <Carousel />
//             <Dropdown />
//             <Footer />
//         </div>
//     )
// }
// export default Logements
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Dropdown from "../Dropdown";
import Carousel from "../logementspage/Caroussel";
import data from '../logements.json';
import Title from '../logementspage/Title';
import Localisation from "../logementspage/Localisation";

function Logements() {
    const { id } = useParams(); // Utilisez useParams pour obtenir les paramètres d'URL



    return (
        <div>
            <Header />
            <Carousel />
            <Title />
            <Localisation />
            <Dropdown />
            <Footer />
        </div>
    );
}

export default Logements;
