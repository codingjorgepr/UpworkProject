import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

export default function JobList({ jobs }) {
  console.log({ jobs });

  return (
    <Paper>
      {jobs.map((job) => {
        return (
          <Box key={job.id}>
            <Box sx={{ padding: "15px" }}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/job/${job.id}`}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: "15px" }}
                >
                  {job.title}
                </Typography>
              </Link>
              <Typography variant="subtitle2" gutterBottom component="div">
                Hourly ${job.hourlyUSD}
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                {job.postedTime}
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                <img
                  alt="location"
                  src="https://assets.codepen.io/6060109/location-icon.png"
                  style={{ height: "13px", marginRight: "5px" }}
                />
                {job.remote ? "Remote, " : ""}
                {job.location}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "15px" }}>
                {job.description}
              </Typography>
            </Box>
            <Divider />
          </Box>
        );
      })}
    </Paper>
  );
}
