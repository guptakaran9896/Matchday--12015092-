import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import './App.css';
import Card from './Card';
import Video from './Video';
const Appwrapper= () => {
  let routes = useRoutes([
    { path: "/", element: <Card /> },
    { path: "/second", element: <Video/> },
    // ...
  ]);
  return routes;
};
const App =()=> {
return(
  <div className="App">
     <Router>
      <Appwrapper />
    </Router>
</div>
);
}
export default App;
