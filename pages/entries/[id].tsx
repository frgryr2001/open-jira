import React from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Button,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
const EntryPage: NextPage = () => {
  return (
    <Layout title="...">
      <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title="Entry Title"
              subheader={`Created by ${"User Name"} on ${"Date"}`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Enter entry"
                autoFocus
                multiline
                label="Task"
              />
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default EntryPage;
