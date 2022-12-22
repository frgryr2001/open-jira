import { List, Paper } from "@mui/material";
import React, { DragEvent, FC, useMemo } from "react";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from "../../interfaces/entry";
import { useContext } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesStatus = useMemo(() => {
    return entries.filter((entry) => entry.status === status);
  }, [entries]);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text/plain");

    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          padding: "3px 5px",
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.3 : 1,
            transition: "opacity 0.3s ease",
            height: "calc(100vh - 100px)",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "3px",
              bgcolor: "#454545",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#4a148c",
              border: "7px none #fffff",
              borderRadius: "10px",
            },
          }}
        >
          {entriesStatus.map((entry) => {
            return <EntryCard key={entry._id} entry={entry} />;
          })}
        </List>
      </Paper>
    </div>
  );
};
