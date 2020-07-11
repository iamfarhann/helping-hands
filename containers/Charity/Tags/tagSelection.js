import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Heading from "../../../common/src/components/Heading";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Chip from "@material-ui/core/Chip";
import { GET_TAGS } from "../../../lib/queries";
import { Divider } from "@material-ui/core";
//import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({}));

export default function TagSelection({ values, setFieldValue }) {
  const classes = useStyles();
  const [addTags, setAddTags] = useState([]);
  const { data, loading, error } = useQuery(GET_TAGS);

  useEffect(() => {
    if (data["tags"]) {
      setAddTags(data.tags);
    }
  }, [data]);

  const handleAddTag = (tag) => {
    console.log(tag);
    setAddTags((item) => item.filter((fet) => fet.id != tag.id));
    setFieldValue("tags", values.tags.concat(tag));
  };

  const handleDeleteTag = (tag) => {
    console.log(tag);
    setFieldValue(
      "tags",
      values.tags.filter((fet) => fet.id != tag.id)
    );
    setAddTags((addTags) => addTags.concat(tag));
  };

  return (
    <>
      <Heading content="Tags" as="h4" style={{ marginTop: "1rem" }} />
      {!values.tags.length && (
        <Heading as="h6" content="No Additional Tag Selected" />
      )}

      {values.tags.map((tag) => {
        return (
          <Chip
            key={tag.id}
            size="small"
            color="secondary"
            label={tag.name}
            style={{ margin: "3px" }}
            onDelete={() => handleDeleteTag(tag)}
          />
        );
      })}
      <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
      {!addTags.length ? (
        <Heading as="h6" content="No Additional Tags Left" />
      ) : (
        <Heading as="h6" content="Click to add tags" />
      )}
      {addTags.map((tag) => {
        return (
          <Chip
            key={tag.id}
            size="small"
            variant="outlined"
            color="secondary"
            label={tag.name}
            style={{ margin: "3px" }}
            onClick={() => handleAddTag(tag)}
          />
        );
      })}
    </>
  );
}
