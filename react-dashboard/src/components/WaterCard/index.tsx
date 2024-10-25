import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PieChart } from "@mui/x-charts";
import WaterIcon from "../../assets/water.png";

const WaterCard = () => {
  return (
    <Card sx={{ background: "#F5F5F5" }}>
      <CardContent>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <img
            src={WaterIcon}
            alt="Water Icon"
            width={60}
            style={{
              border: "2px solid #E65100",
              borderRadius: "12px",
              marginBottom: "10px",
            }}
          />
          <Typography color={"#E65100"}>Consumo de Água</Typography>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Chuveiros" },
                  { id: 1, value: 15, label: "Piscina" },
                  { id: 2, value: 20, label: "Lave e seca" },
                ],
              },
            ]}
            sx={{ marginTop: 2 }}
            width={320}
            height={122}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
export default WaterCard;
