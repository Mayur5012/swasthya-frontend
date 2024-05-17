import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import landingPage from "./Pages/landingpage";
import plasmadonor from "./Pages/plasmadonor";
import hospitalbeds from "./Pages/hospitalbeds";
import oxygensuppliers from "./Pages/oxygensuppliers";
import medssuppliers from "./Pages/medssuppliers";
import Ambulanceprovider from "./Pages/ambulanceproviders";
import allresourcespage from "./Pages/allresourcespages";
import helplines from "./Pages/helplines";
import instagramresources from "./Pages/instagramresources";
import volunteerpage from "./Pages/volunteerpage";
import plasmadonorcontact from "./Pages/plasmadonorcontact";
import hospitalbedcontact from "./Pages/hospitalbedcontact";
import oxygensupplycontact from "./Pages/oxygensupplycontact";
import medssuppliercontact from "./Pages/medssuppliercontact";
import ambulanceprovidercontact from "./Pages/ambulanceprovidercontact";
import termsandcondition from "./Pages/termsandcondition";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={landingPage} />
        <Route path="/plasma" exact component={plasmadonor} />
        <Route path="/hospitalbeds" exact component={hospitalbeds} />
        <Route path="/oxygensupply" exact component={oxygensuppliers} />
        <Route path="/medssupply" exact component={medssuppliers} />
        <Route path="/ambulanceprovider" exact component={Ambulanceprovider} />
        <Route path="/resourcespage" exact component={allresourcespage} />
        <Route path="/helplines" exact component={helplines} />
        <Route
          path="/instagramresources"
          exact
          component={instagramresources}
        />

        <Route path="/volunteerpage" exact component={volunteerpage} />
        <Route
          path="/plasmadonorcontact"
          exact
          component={plasmadonorcontact}
        />
        <Route
          path="/hospitalbedcontact"
          exact
          component={hospitalbedcontact}
        />
        <Route
          path="/oxygensupplycontact"
          exact
          component={oxygensupplycontact}
        />
        <Route
          path="/medssupplycontact"
          exact
          component={medssuppliercontact}
        />
        <Route
          path="/ambulanceprovidercontact"
          exact
          component={ambulanceprovidercontact}
        />
        <Route path="/termsandcondition" exact component={termsandcondition} />
      </Switch>
    </Router>
  );
}

export default App;
