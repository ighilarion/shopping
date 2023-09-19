import { Route, Routes } from "react-router";
import Home from "./components/routes/home/home.component";
import Authentication from "./components/routes/authentication/authentication";
import Navigation from "./components/routes/navigation/navigation.component";

const App = () => {

  const Shop = () => {
    return <h1>I am the shop page</h1>
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />

      </Route>


    </Routes>
  );
}

export default App;
