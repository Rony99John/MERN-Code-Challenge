import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Item({
  srcURL = "https://via.placeholder.com/150",
  foodName,
  foodPrice,
  foodDescription,
}) {
  return (
    <div className="Item">
      <List sx={{ width: "100%", maxWidth: 850, bgcolor: "rgb(88, 4, 4)" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src={srcURL} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="White"
              >
                {foodName}
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="rgb(41, 255, 76)"
                >
                  {foodPrice}L.L
                </Typography>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="White"
                >
                  — {foodDescription}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" color="White" />
      </List>
    </div>
  );
}
