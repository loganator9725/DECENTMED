import { Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Mindset } from '../pages/Thoughts';
import { Prevent } from '../pages/Prevent';
import { HealPract } from '../pages/HealPract';
import { Soundhealing } from '../pages/soundhealing';
import { Func } from '../pages/Func';
import {Summit} from '../pages/Summit';
import MassPract from '../pages/Mass';
import { Trauma } from '../pages/Trauma';
import { PTSD } from '../pages/PTSD';
import { Nutrigenomics } from '../pages/Nutrigenomics';
import { FuncMed } from '../pages/funcmed';
import Meditation from '../pages/Meditation';
import { ReviewPage } from '../pages/reviewpage';
import HerbalMedicine from '../pages/HerbalMedicine';
import { HolisticHealers } from '../pages/holistichealers';
import { AppliedKinesiology } from '../pages/AK';
import { AKPract } from '../pages/kin';
import { Transformational } from '../pages/transform';
import { Detox } from '../pages/Detox';
import { StemCell } from '../pages/Stemcell';
import { NotFound } from '../pages/NotFound';
import { Shop } from '../pages/products';
import { Nutrition } from '../pages/Nutrition';
import BlogPage from '../pages/Blog';
import { Hypnotherapy } from '../pages/Hypnotherapy';
import { About } from '../pages/About';
import { Homeopathy } from '../pages/Homeopathy';
import { Acupuncture } from '../pages/Acupuncture';
import { Ayurveda } from '../pages/Ayurveda';
import { Marketing } from '../pages/DigitalMarketing';
import { Chiropractic } from '../pages/Chiropractic';
import { Chelation } from '../pages/Chelation';
import { Telehealth } from '../pages/Telehealth';
import { Apoth } from '../pages/Apoth';
import { Chiro } from '../pages/ChiroPRACT';
import { Breathwork } from '../pages/breathworkers';
import { Hypnopract } from '../pages/hypnopract';
import { AYPract } from '../pages/AYPRACT';
import { Nutritionpract } from '../pages/nutritionpract';
import { Coaching } from '../pages/coach';
import { HomeopathyPract } from '../pages/HOMEOPATHYPRACT';
import { Acupract } from '../pages/acupract';
import { Breathworkk } from '../pages/Breathwork';
import { Natpract } from '../pages/naturopathics';
import { Naturopathy } from '../pages/Naturopathy';
import { StemPract } from '../pages/STEMPRACT';
import FileUploadDownload from '../pages/landingpage';

export const MainRoutes = ({ t }) => (
  <>
    <Route exact path="/" element={<Home t={t} />} />
    <Route path="/soundhealing" element={<Soundhealing />} />
    <Route path="/soundhealers" element={<HealPract />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="/naturopathylane" element={<FileUploadDownload t={t} />} />
    <Route path="/stemcell" element={<StemCell t={t} />} />
    <Route path="/ayurveda" element={<Ayurveda t={t} />} />
    <Route path="/ptsd" element={<PTSD t={t} />} />
    <Route path="/nutrigenomics" element={<Nutrigenomics t={t} />} />
    <Route path="/mindset" element={<Mindset t={t} />} />
    <Route path="/funcmed" element={<Func t={t} />} />
    <Route path="/trauma" element={<Trauma t={t} />} />
    <Route path="/reviews" element={<ReviewPage t={t} />} />
    <Route path="/breathwork" element={<Breathworkk t={t} />} />
    <Route path="/coaching" element={<Coaching t={t} />} />
    <Route path="/stemcellproviders" element={<StemPract t={t} />} />
    <Route path="/summit" element={<Summit t={t} />} />
    <Route path="/akpract" element={<AKPract t={t} />} />
    <Route path="/holisticbusinessplan" element={<FileUploadDownload t={t} />} />
    <Route path="/acupuncturists" element={<Acupract t={t} />} />
    <Route path="/blog" element={<BlogPage t={t} />} />
    <Route path="/applied-kinesiology" element={<AppliedKinesiology t={t} />} />
    <Route path="/breathworkers" element={<Breathwork providerEmail="samueljuansalgado@gmail.com" t={t} />} />
    <Route path="/functionalmedicine" element={<FuncMed t={t} />} />
    <Route path="/naturopathy" element={<Naturopathy t={t} />} />
    <Route path="/naturopathicproviders" element={<Natpract t={t} />} />
    <Route path="/nutritionpract" element={<Nutritionpract t={t} />} />
    <Route path="/transformationalcoaching" element={<Transformational t={t} />} />
    <Route path="/apoth" element={<Apoth t={t} />} />
    <Route path="/shop" element={<Shop t={t} />} />
    <Route path="/massagetherapy" element={<MassPract t={t} />} />
    <Route path="/herbalmedicine" element={<HerbalMedicine t={t} />} />
    <Route path='/hypnopract' element={<Hypnopract t={t} />} />
    <Route path='/homeopract' element={<HomeopathyPract t={t} />} />
    <Route path='/chiropract' element={<Chiro t={t} />} />
    <Route path='/emotionaleatingcoach' element={<HolisticHealers t={t} />} />
    <Route path='/meditation' element={<Meditation t={t} />} />
    <Route path='/ayurvedicmedicine' element={<AYPract t={t} />} />
    <Route path="/detox" element={<Detox t={t} />} />
    <Route path="/hypnotherapy" element={<Hypnotherapy t={t} />} />
    <Route path="/nutrition" element={<Nutrition t={t} />} />
    <Route path="/chiropractic" element={<Chiropractic t={t} />} />
    <Route path="/acupuncture" element={<Acupuncture t={t} />} />
    <Route path="/chelation" element={<Chelation t={t} />} />
    <Route path="/digitalmarketing" element={<Marketing t={t} />} />
    <Route path="/homeopathy" element={<Homeopathy t={t} />} />
    <Route path="/telehealth" element={<Telehealth t={t} />} />
    <Route path="/about" element={<About t={t} />} />
  </>
);