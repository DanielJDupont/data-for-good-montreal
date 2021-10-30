import { Button } from "@mui/material";
import { Map } from "../map/Map";
import { Toolbar } from "../toolbar/Toolbar";

export const Home = () => {
  return (
    <div>
      <Toolbar />
      <Button>Report Pothole</Button>
      <Button>View Potholes</Button>
      <Map />
    </div>
  );
};
