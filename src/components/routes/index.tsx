import HomePage from "./homePage";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import AngebotePage from "./angebotePage";
import Kontakt from "./kontakt";
import ImpressumPage from "./impressumPage";
import PropertiesPage from "./propertiesPage";
import PropertiesDetails from "./propertiesDetails";
import { useEffect, useState } from "react";
import Loader from "../loader";
import Abgs from "./abgs";
import Cookies from "../cookies";
import Datenschutz from "./datenschutz";
import ScrollUp from "../scrollUp";
import Referenzen from "./Referenzen";

const DefaultLayoutLoader = ({ children, match }: any) => {
  const [loaderStart, setLoaderStart] = useState(false);
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);
  useEffect(() => {
    setLoaderStart(true);
    let timer = setTimeout(() => {
      setLoaderStart(false);
    }, 2300);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Cookies
        show={show}
        setShow={setShow}
        cancel={cancel}
        setCancel={setCancel}
      />
      {loaderStart ? (
        <Loader />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

const DefaultLayout = ({ children, match }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <RouteWrapper
            exact={true}
            path="/"
            component={HomePage}
            layout={DefaultLayoutLoader}
          />
          <RouteWrapper
            exact={true}
            path="/angebote-page"
            component={AngebotePage}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/datenschutz"
            component={Datenschutz}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/agbs"
            component={Abgs}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/kontakt"
            component={Kontakt}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/impressum-page"
            component={ImpressumPage}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/properties-page"
            component={PropertiesPage}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/properties-details"
            component={PropertiesDetails}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/properties-details/:id"
            component={PropertiesDetails}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/referenzen"
            component={Referenzen}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/properties-details/:id/:imagepreview"
            component={PropertiesDetails}
            layout={DefaultLayout}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

function RouteWrapper({
  component: Component,
  layout: Layout,
  auth,
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
