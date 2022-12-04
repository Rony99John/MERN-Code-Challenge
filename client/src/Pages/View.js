import "../App.css";
import { Categories } from "../Components/mockdata";
import { useState, useEffect } from "react";
import Item from "../Components/item";
import axios from "axios";
import { Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function View() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = async () => {
    const response = await axios.get("http://localhost:3001/getCategories");
    setMenuData([...response.data]);
  };
  console.log(menuData);
  return (
    <div className="App">
      <header className="App-header">
        <p className="Web-title">DISTIN-GUI MENU</p>

        {Categories.map((Cat) => (
          <p key={Cat.Order}>{Cat.Name}</p>
        ))}
        <Item
          srcURL={
            "https://www.shutterstock.com/image-vector/man-eating-burger-avatar-modern-260nw-1729214581.jpg"
          }
          foodName={"Chicken Platter "}
          foodDescription={
            " 4 chicken pieces with our special sauce served with bbq dip and wedges"
          }
          foodPrice={"160,000"}
        ></Item>
        <Item
          srcURL={
            "https://www.shutterstock.com/image-vector/man-eating-burger-avatar-modern-260nw-1729214581.jpg"
          }
          foodName={"Crispy Chicken Wings"}
          foodDescription={"( 8 pcs )"}
          foodPrice={"180,000"}
        ></Item>
      </header>
    </div>
  );
}

export default View;
