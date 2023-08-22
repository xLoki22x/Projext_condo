import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Topbar = () => {


  const navigate = useNavigate();

  function Back() {

    Swal.fire({
      icon: "warning",
      title: "แจ้งเตือน",
      text: "Are you sure?",
      confirmButtonText: "ตกลง",
    }).then((e: any) => {
      if (e.isConfirmed) {
        sessionStorage.clear()
        navigate('/', { replace: true })
        //window.location.href = "/";
      }
    })
  }





  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '30px' }}>
          Rocket
        </Typography>
        <Typography variant="h6">

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: 'white' }}
            onClick={() => { Back() }}
          >
            Exit
          </Button>

        </Typography>
      </Toolbar>


    </AppBar>
  );
};

export default Topbar;