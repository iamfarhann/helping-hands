import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { useData, useDispatchUser } from "../../../../lib/userData";

import Text from "../Text";
import { GET_PORTFOLIOS } from "../../../../lib/queries";
import { DELETE_PORTFOLIO } from "../../../../lib/mutations";

import { useQuery, useMutation } from "@apollo/react-hooks";
import moment from "moment";

import Skeleton from "@material-ui/lab/Skeleton";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    overflow: "auto",
    maxHeight: "460px",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const donor = useData();
  const dispatch = useDispatchUser();
  const { data, loading, error, refetch } = useQuery(GET_PORTFOLIOS, {
    variables: {
      where: { donor: donor ? donor.id : "" },
      sort: "createdAt:desc",
      start: 0,
      limit: null,
    },
    fetchPolicy: "cache-and-network",
    //skip: !project,
  });
  const [deletePortfolio] = useMutation(DELETE_PORTFOLIO, {
    onCompleted: (data) => {
      console.log(data, "on complete deletion");
      dispatch({
        type: "UPDATE",
        payload: {
          ...donor,
          portfolios: donor.portfolios.filter(
            (portfolio) => portfolio.id != data.deletePortfolio.portfolio.id
          ),
        },
      });
      refetch();
    },
    onError: (error) => {
      console.log(error, "Error @ delete portfolio");
    },
  });

  const handleDeletePortfolio = (pID) => {
    console.log("Handle Delete Portfolio", pID);
    deletePortfolio({
      variables: {
        fields: {
          where: {
            id: pID,
          },
        },
      },
    });
  };
  return (
    <List className={classes.root}>
      {data ? (
        data.portfolios.map((portfolio) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={portfolio.organization.organizationName}
                    src={
                      portfolio.organization.profilePicture
                        ? `${process.env.PLAIN_URL}${portfolio.organization.profilePicture.url}`
                        : null
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={portfolio.organization.organizationName}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {`Rs. ${portfolio.paymentSize}`}
                      </Typography>
                      {` — ${portfolio.period}`}
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeletePortfolio(portfolio.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
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
