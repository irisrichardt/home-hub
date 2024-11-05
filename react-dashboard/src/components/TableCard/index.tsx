import { Card, CardContent, Box, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#cf9676",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  temperatura: number,
  funcionamento: string,
  status: boolean
) {
  return { name, temperatura, funcionamento, status };
}

const rows = [
  createData("Sala de TV", 23, "Revisado", true),
  createData("Quarto 1", 20, "Revisado", false),
  createData("Suíte 1", 0, "Estragado", false),
  createData("Cozinha", 16, "Revisado", true),
];

const TableCard = () => {
  return (
    <Card sx={{ background: "#F5F5F5" }}>
      <CardContent>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Cômodo</StyledTableCell>
                  <StyledTableCell align="center">Temperatura&nbsp;(ºC)</StyledTableCell>
                  <StyledTableCell align="center">Funcionamento</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.temperatura.toFixed(1)}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.funcionamento}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.status ? (
                        <Tooltip title="Funcionando">
                          <CheckIcon sx={{ color: "green" }} />
                        </Tooltip>
                      ) : (
                        <Tooltip title="Estragado">
                          <CloseIcon sx={{ color: "red" }} />
                        </Tooltip>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TableCard;
