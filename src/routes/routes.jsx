
import config from '../config';

import Home from "../pages/Home";
import About from "../pages/About"
import DiversityAndInclusion from "../pages/DiversityAndInclusion"
import SocialImpact from "../pages/SocialImpact"
import News from "../pages/News"
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { AboutLayout, DefaultLayout, NewsLayout, LoginLayout, SignupLayout } from '../layouts';


const publicRoutes = [
    {path:config.routes.home, component: Home, layout:DefaultLayout},
    {path:config.routes.about, component: About, layout: AboutLayout},
    {path: config.routes.diversity_and_inclusion, component: DiversityAndInclusion},
    {path: config.routes.social_impact, component: SocialImpact},
    {path: config.routes.news, component: News, layout: NewsLayout},
    {path: config.routes.login, component: Login, layout: LoginLayout},
    {path: config.routes.signup, component: Signup, layout: SignupLayout}
]

const privateRoutes = [];


export { publicRoutes, privateRoutes };