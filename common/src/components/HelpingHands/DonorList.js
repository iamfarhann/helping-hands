import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { GET_PROJECT_DONATIONS } from "../../../../lib/queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import moment from "moment";

import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: "36ch",
    overflow: "auto",
    maxHeight: "360px",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList({ project }) {
  const classes = useStyles();
  const { data, loading, error, refetch } = useQuery(GET_PROJECT_DONATIONS, {
    variables: {
      where: { project: project ? project.id : "" },
      sort: "createdAt:desc",
      start: 0,
      limit: null,
    },
    skip: !project,
  });
  useEffect(() => {
    if (data) {
      console.log(data, "Donations");
    }
  }, [data]);
  return (
    <List className={classes.root}>
      {data ? (
        data.donations.map((donation) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={donation.donor.fullName}
                    src={
                      donation.donor.profilePicture
                        ? `${process.env.PLAIN_URL}${donation.donor.profilePicture.url}`
                        : null
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={donation.donor.fullName}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {`Rs. ${donation.amount}`}
                      </Typography>
                      {` — ${moment(donation.createdAt).fromNow()}`}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })
      ) : (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={<Skeleton animation="wave" height={10} width="80%" />}
              secondary={<Skeleton animation="wave" height={10} width="60%" />}
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={<Skeleton animation="wave" height={10} width="80%" />}
              secondary={<Skeleton animation="wave" height={10} width="60%" />}
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={<Skeleton animation="wave" height={10} width="80%" />}
              secondary={<Skeleton animation="wave" height={10} width="60%" />}
            />
          </ListItem>
        </>
      )}
    </List>
  );
}
