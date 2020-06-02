import React, { useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Container, Grid, Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PetsIcon from "@material-ui/icons/Pets";
import LinearSlider from "./LinearSlider";
import RankingDescription from "./RankingDescription";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const data = [
  {
    id: 123,
    name: "Akhuwat Foundation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "https://source.unsplash.com/random",
    points: 84,
  },
  {
    id: 124,
    name: "Edhi Foundation",
    description: "Edhi Description",
    img: "https://source.unsplash.com/random",
    points: 24,
  },
  {
    id: 127,
    name: "Edhi Foundation",
    description: "Edhi Description",
    img: "https://source.unsplash.com/random",
    points: 72,
  },
  {
    id: 197,
    name: "FIF Foundation",
    description: "FIF Description",
    img: "https://source.unsplash.com/random",
    points: 55,
  },
];

export default function RankingCard() {
  const classes = useStyles();
  const [selected, setSelected] = useState(data[0]);

  return (
    <Paper>
      <Grid container style={{ paddingLeft: 16, paddingRight: 16 }} spacing={4}>
        <Grid item md={4}>
          <List>
            {data.map((item) => {
              return (
                <Grid container alignItems="center" spacing={1} key={item.id}>
                  <Grid item md={2} align="center">
                    <Link
                      href="/organizations/[organization]"
                      as={`/organizations/${item.name}`}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={item.img}
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                  </Grid>
                  <Grid item md={10}>
                    <ListItem
                      button
                      onClick={() => setSelected(item)}
                      selected={selected == item ? true : false}
                    >
                      <ListItemText disableTypography>
                        <Grid container alignItems="center" spacing={2}>
                          <Grid item md={10}>
                            <Box width={1}>
                              <Typography variant="body1" gutterBottom>
                                {item.name}
                              </Typography>
                              <LinearSlider />
                            </Box>
                          </Grid>
                          <Grid item md={2}>
                            <Box
                              height={40}
                              width={40}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              border={1}
                              borderRadius={4}
                              borderColor="red"
                            >
                              <Typography variant="h6">
                                {item.points}
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </ListItemText>
                    </ListItem>
                  </Grid>
                </Grid>
              );
            })}
          </List>
        </Grid>
        <Grid item md={8}>
          <Paper elevation={0}>
            <RankingDescription data={selected} />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
