import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";

const Topbar = () => {

  useEffect(() => {

    setuserid(sessionStorage.getItem('userid') as any)

  }, [])

  const navigate = useNavigate();

  const [userid, setuserid] = useState("");

  function Back() {

    Swal.fire({
      icon: "warning",
      title: "Exit",
      text: "Are you sure Exit?",
      showCancelButton: true,
      cancelButtonText: 'No',
      cancelButtonColor: 'red',
      confirmButtonText: "Sure",
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
        <p style={{ fontSize: '15px' }}><span style={{fontWeight:'bold'}}>Welcome user:</span>{userid}</p>
        <Typography variant="h6">



          <Button
            type="submit"

            variant="contained"
            sx={{ mt: 3, mb: 2, color: 'white', bgcolor: "red" }}
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