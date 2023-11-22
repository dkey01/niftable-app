import Header from "./header/header";
import CreonPass from "./creonPass/creonPass";
import ProfitingThrough from "./profiting/profitingThrough";
import OurVision from "./vision/ourVision";
import CreonList from "./creonItem/creonList";
import InfoList from "./footer/footerList";


const CreonLandingPage = () => {
   
    return (
        <>
          <Header />
          <CreonPass />
          <ProfitingThrough />
          <OurVision />
          <CreonList />
          <InfoList />
        </>
    )
}

export default CreonLandingPage;