import { useEffect, useState } from "react";
import Header from "../../pages/Header/Header";
import Card from "../../pages/Card/Card";
import Servise from "../../pages/Header/Servise";
import Footer from "../../pages/Footer/Footer";


const Home = () => {
    const [card, setCard] = useState();
    useEffect(() => {
    fetch('health.json')
    .then(res => res.json())
    .then(data => setCard(data))
    },[])
    return (
        <div  >
        <Header/>
        <Servise/>
        <Card data={card}/>
        <Footer/>
        </div>
    );
};

export default Home;