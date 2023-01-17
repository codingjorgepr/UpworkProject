import TopNav from "./TopNav";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Link from "@mui/material/Link";

import {
  MainBody,
  PRIMARY_GREEN,
  PrimaryButton,
  SecondaryButton
} from "./StyledComponents";

export const SpacerBox = styled(Box)(() => ({
  padding: "20px"
}));

export default function JobDetail({ allJobs }) {
  let { id: idFromURL } = useParams();

  const selectedJob = allJobs.find((job) => {
    return job.id === Number(idFromURL);
  });

  return (
    <>
      <TopNav />
      <MainBody>
        <Box sx={{ width: "60%" }}>
          <Typography
            bottomGutter
            variant="h5"
            component="div"
            sx={{ marginBottom: "30px" }}
          >
            {selectedJob.title}
          </Typography>
          <Divider />
          <Box sx={{ padding: "20px 0" }}>
            <Typography
              sx={{ color: PRIMARY_GREEN }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              {selectedJob.category}
            </Typography>
            <Typography
              sx={{ fontWeight: 400 }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              Posted {selectedJob.postedTime}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              <img
                alt="location"
                src="https://assets.codepen.io/6060109/location-icon.png"
                style={{ height: "13px", marginRight: "5px" }}
              />
              {selectedJob.remote ? "Remote, " : ""}
              {selectedJob.location}
            </Typography>
          </Box>
          <Divider />
          <Typography
            variant="body2"
            sx={{ margin: "20px 0", color: "#8B8B8B" }}
          >
            {selectedJob.description}
          </Typography>
          <Divider />
        </Box>
        <Box
          sx={{
            background: "white",
            borderRadius: "5px",
            width: "35%",
            height: "400px"
          }}
        >
          <SpacerBox>
            <PrimaryButton
              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontSize: "12px",
                width: "100%"
              }}
            >
              Submit a Proposal
            </PrimaryButton>
            <SecondaryButton
              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontSize: "12px",
                width: "100%",
                marginTop: "10px"
              }}
            >
              <FavoriteBorderIcon sx={{ marginRight: "3px" }} />
              Save a Job
            </SecondaryButton>
          </SpacerBox>
          <Divider />
          <SpacerBox>
            <Typography variant="subtitle2" gutterBottom component="div">
              About the client
            </Typography>
            <Typography
              variant="body2"
              sx={{ margin: "15px 0", fontSize: "12px", color: "#8B8B8B" }}
            >
              {selectedJob.paymentVerified ? (
                <>
                  <CheckCircleOutlineIcon
                    fontSize="inherit"
                    sx={{ color: PRIMARY_GREEN, marginRight: "3px" }}
                  />
                  Payment Verified
                </>
              ) : (
                <>Payment Not Verified</>
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ margin: "15px 0", fontSize: "12px", color: "#8B8B8B" }}
            >
              <PinDropIcon
                fontSize="inherit"
                sx={{ color: PRIMARY_GREEN, marginRight: "3px" }}
              />
              {selectedJob.location}
            </Typography>
          </SpacerBox>
          <Divider />
          <SpacerBox>
            <Typography variant="subtitle2" gutterBottom component="div">
              Job Link
            </Typography>
            <TextField
              disabled
              id="standard-disabled"
              defaultValue="https://joburl"
              variant="standard"
            />
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                fontWeight: 600,
                marginTop: "10px",
                display: "block",
                fontSize: "12px"
              }}
              color={PRIMARY_GREEN}
            >
              Copy Link
            </Link>
          </SpacerBox>
        </Box>
      </MainBody>
    </>
  );
}
