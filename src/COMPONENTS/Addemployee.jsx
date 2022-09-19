import { Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Avatar } from "@mui/material";

export const Addemployee = () => {
  const rcvd = useLocation();
  const [data, setdata] = useState([]);
  // const[text,setText]=useState("")
  // const[utext,setUtext]=useState("");
  const [empdata, setEmpdata] = useState({});
  // const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const local = localStorage.getItem(data);
  console.log("===>", local);

  const handlesave = () => {
    setdata([empdata, ...data]);
  };
  const handleremove = (item) => {
    const Filtered = data.filter((elem) => elem !== item);
    setdata([...Filtered]);
  };

  const handleGoHome = () => {
    navigate("/Home");
  };
  return (
    <div>
      <Button variant="contained" onClick={handleGoHome}>
        Home
      </Button>
      <div style={{ margin: "30px", paddingLeft: "40%", fontSize: "30px" }}>
        <input
          type="number"
          placeholder="Id"
          onChange={(e) => setEmpdata({ id: e.target.value })}
        ></input>{" "}
        <br />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setEmpdata({ ...empdata, name: e.target.value })}
        ></input>
        <br />
        <input
          type="password"
          placeholder="password "
          onChange={(e) => setEmpdata({ ...empdata, password: e.target.value })}
        ></input>
        <br />
        {/* {isEdit?<input type="text" value={utext} onChange={(e)=>setUtext(e.target.value)}/>:
        <input type="text" value={text}  />} */}
        <Button
          variant="contained"
          onClick={handlesave}
          // disabled={}
        >
          Add
        </Button>
      </div>

      <div>
        <Grid container spacing={3}>
          {data.map((item) => {
            return (
              <Grid item xs={4}>
                <Card sx={{ bgcolor: "blueviolet" }}>
                  <CardContent>
                    <p>
                      <b> ID:</b>
                      {item.id}
                    </p>
                    <p>
                      <b> Name: </b> {item.name}
                    </p>
                    <p>
                      <b> Password: </b>
                      {item.password}
                    </p>
                    <Button
                      variant="contained"
                      onClick={() => handleremove(item)}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};
