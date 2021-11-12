import { Container, Typography, Box } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import bgImage from "../../images/AOL-BG.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Series from "../shared/Series/Series";
import Footer from "../Footer/Footer";
const Faq = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold", my: 5 }}
          >
            Frequently Asked Questions
          </Typography>
          <div style={{ margin: "50px 0" }}>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>1. How to contact support?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  With most issues you encounter in the course of using Google,
                  be it a problem with your Gmail, your Google Chrome browser,
                  or Google Maps, other people have likely encountered and
                  documented the same issues a dozen times over.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  2. Do you have any online documentation?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>3. Do you have any premium plan?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>3. Do you have any premium plan?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>4. How to setup the contact form?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>5. Can you support via email?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  6. How can I purchase the extended plan?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Container>
        <Box sx={{ mb: 10 }}>
          {" "}
          <Series />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Faq;
