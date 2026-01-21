import '../App.css';
import EnergyHealingInfo from '../info/EnergyHealingInfo';
import Topbar from './topbar';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
import PageWithTOC from '../Components/PageWithTOC';

export function EnergyHealing({ t }) {

    return (
        <div>
                <Helmet>  {/* Add Helmet component */}
                    <title>{t("Energy Healing")}</title>
                    <meta name="description" 
                      content={t("Energy Healing: Learn about healing your back pain, emotions, and mindsets.")} />
                </Helmet>
                <header>
                    <Topbar />
                </header>
                <PageWithTOC containerId="energy-healing-wrapper">
                    <EnergyHealingInfo />
                </PageWithTOC>
                <footer>
                    <Footer />
                </footer>
        </div>
    )
}

export default EnergyHealing;
