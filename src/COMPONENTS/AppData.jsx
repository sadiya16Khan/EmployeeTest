import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const AppData = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [typ, setTyp] = useState("");
  // const [admn, setAdmn] = useState("");
  const [logn, setLogn] = useState("");
  const [idn, setIdn] = useState("");
  // const [utext, setUtext] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const result = await axios.get("https://api.github.com/users");
    console.log(result.data);
    JSON.stringify(sessionStorage.setItem("employeelist", result.data));
    setData(result.data);
  };

  // function getData() {
  //   fetch("https://api.github.com/users").then((result) => {
  //     result.json().then((resp) => {
  //       console.log(result.data);
  //       setData(resp);
  //     });
  //   });

  const handledelete = (ind) => {
    const result = data.filter((item, i) => i !== ind);
    setData(result);
  };

  const handlenext = () => {
    navigate("/addemployee", {
      state: { data },
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [isEdit]);
  console.log("data", data);

  const handleLogout = () => {
    navigate("/");
  };

  const handleEmployeeUpdate = (item) => {
    console.log(item);
    setIdn(item.id);
    setTyp(item.type);
    setLogn(item.login);
    setIsEdit(true);
  };
  const handleUpdate = (ind) => {
    const result = data.slice(ind, ind + 1);
    console.log(result);
    result[0].id = idn;
    result[0].type = typ;
    result[0].login = logn;
    console.log(result);

    setData([...data, result[0]]);
    // data.splice(ind, 1, result[0]);
    // setIsEdit(true);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <b className="bold">
            <u>
              <i>EMPLOYEES LIST</i>
            </u>
          </b>
        </Grid>
        <Grid item xs={3}>
          <button className="addemp" onClick={handlenext}>
            Add New Employee
          </button>
        </Grid>
        <Grid item xs={3}>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </Grid>
      </Grid>

      <input
        type="text"
        placeholder="type"
        value={typ}
        onChange={(e) => setTyp(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="login"
        value={logn}
        onChange={(e) => setLogn(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="id"
        value={idn}
        onChange={(e) => setIdn(e.target.value)}
      />
      <br />
      <Button variant="contained" onClick={handleUpdate}>
        Update
      </Button>
      {/* </Grid> */}
      {/* // <br /> */}
      {/* </Grid> */}
      <br />
      <br />

      <Grid container spacing={3}>
        {data.map((item, ind) => (
          <Grid item xs={4}>
            <Card sx={{ bgcolor: "blueviolet" }}>
              <CardContent>
                {/* <h2>{item.events_url}</h2> */}
                <img src={item.avatar_url} height="120px" width="120px" />

                <h1 onClick={() => handleEmployeeUpdate(item)}>ID:{item.id}</h1>
                <h2>TYPE:{item.type}</h2>

                {/* <h2>ADMIN:{item.site_admin}</h2> */}
                <h2>LOGIN: {item.login}</h2>
                <Button variant="contained" onClick={() => handledelete(ind)}>
                  Delete
                </Button>
                <Button variant="contained" onClick={() => handleUpdate(ind)}>
                  Update
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
