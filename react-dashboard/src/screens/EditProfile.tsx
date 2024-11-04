import { Box } from "@mui/material";
import EditProfile from "../components/EditProfile";

const EditProfileScreen: React.FC = () => {
  return (
    <Box
      width={"auto"}
      maxWidth={"md"}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ margin: "auto" }}
    >
      <EditProfile />
    </Box>
  );
};

export default EditProfileScreen;
