import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sanityClient } from "../helpers/client";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

async function getProducts() {
  const productsQuery = '*[_type == "product"]';
  const products = await sanityClient.fetch(productsQuery);
  
  return products;
}

export default function ReturnProduct() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        sx={{ width: "300px", marginTop: "10px", marginBottom: "10px" }}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        error={!firstName}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        sx={{ width: "300px", marginTop: "10px", marginBottom: "10px" }}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        error={!lastName}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ width: "300px", marginTop: "10px", marginBottom: "10px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!email}
      />
      <FormControl
        sx={{ width: "300px", marginTop: "10px", marginBottom: "10px" }}
      >
        <InputLabel id="demo-simple-select-label" error={!product}>
          Product
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product}
          label="Product"
          onChange={handleChange}
          error={!product}
        >
          {products.map((product) => (
            <MenuItem value={product.name}>{product.name}</MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          sx={{
            width: "300px",
            marginTop: "10px",
            marginBottom: "10px",
            backgroundColor: "red",
            borderRadius: "90px",
          }}
          onClick={() => {
            if (firstName && lastName && email && product) {
              navigate("/success");
            }
          }}
        >
          Return Product
        </Button>
      </FormControl>
    </div>
  );
}
