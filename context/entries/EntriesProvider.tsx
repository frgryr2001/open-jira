import { FC, useReducer, PropsWithChildren } from "react";
import { v4 as uuidv4 } from "uuid";
import { Entry } from "../../interfaces";
import { entriesReducer, EntriesContext } from "./";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createAt: Date.now(),
    };

    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] ENTRY-UPDATED", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
