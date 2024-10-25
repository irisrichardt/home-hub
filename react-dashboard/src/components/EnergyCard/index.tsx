import { Box, Typography, Paper } from "@mui/material";
import EnergyIcon from "@mui/icons-material/FlashOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const EnergyCard = ({ currentMonthUsage, lastMonthUsage }) => {
  const usageDifference = currentMonthUsage - lastMonthUsage;
  const isIncreased = usageDifference > 0;

  return (
    <Paper elevation={2} sx={{ padding: 2, backgroundColor: "#E3F2FD" }}>
      <Box display="flex" alignItems="center" flexDirection={"column"}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            borderRadius: "12px",
            border: "2px solid #E65100",
            backgroundColor: "#FFF3E0",
            marginBottom: "10px",
          }}
        >
          <EnergyIcon
            sx={{
              color: "#f4cb00",
              fontSize: 45,
              filter: "drop-shadow(2px 2px 2px #E65100)",
            }}
          />
        </Box>
        <Typography color="#E65100">Consumo de Energia</Typography>
      </Box>
      <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
        {currentMonthUsage} kWh
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        {isIncreased ? (
          <ArrowUpwardIcon color="error" />
        ) : (
          <ArrowDownwardIcon color="success" />
        )}
        <Typography color={isIncreased ? "error" : "success"}>
          {Math.abs(usageDifference)} kWh {isIncreased ? "mais" : "menos"} que o
          mês passado
        </Typography>
      </Box>
    </Paper>
  );
};

export default EnergyCard;
