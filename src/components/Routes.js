import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import Home from "./Home";
import CarYard from "./CarYard";
import CarDetail from "./CarDetail";
import CarForm from "./CarForm";
import ManufacturerYard from "./manufacturer/ManufacturerYard";
import ManufacturerDetail from "./manufacturer/ManufacturerDetail";
import ManufacturerForm from "./manufacturer/ManufacturerForm";
import Signup from "./Signup";
import SignIn from "./SignIn";

const Routes = () => {
  const cars = useSelector((state) => state.cars.cars);
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/signin">
        <SignIn />
      </Route>

      <Route path="/manufacturers/:manufacturerSlug">
        <ManufacturerDetail />
      </Route>

      <Route path="/manufacturers/new">
        <ManufacturerForm />
      </Route>

      <Route
        path={[
          "/manufacturers/:manufacturerId/cars/new",
          "/cars/:carSlug/edit",
        ]}
      >
        <CarForm />
      </Route>

      <Route path="/manufacturers">
        <ManufacturerYard />
      </Route>

      <Route path="/cars/:carSlug">
        <CarDetail />
      </Route>

      <Route path="/cars">
        <CarYard cars={cars} />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
