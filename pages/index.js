import Head from "next/head";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import { Chip } from '@mui/material';
import { Button } from '@mantine/core';
import { Fade } from "react-awesome-reveal";

import { motion } from 'framer-motion';


export default function Home () {

  const projectCard = {
    background: "#1c2230"
  }

  const chipStyle = {
    background: "#516ACF",
    marginLeft: "5px",
    marginRight: "5px"
  }

  const chipContainerStyle = {
    position: "absolute",
    bottom: 0,
    right: 0,
    paddingRight: "10px",
    paddingBottom: "10px",
  }

  return (
    <>
      <Head>
        <title>Christian&apos;s Portfolio</title>
      </Head>

      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <Fade
        direction="up"
        duration="1100"
        triggerOnce="true"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <Image
              priority
              className="profileBox"
              src="/images/christian.jpg"
              height={320}
              width={320}
              alt=""
            />
          </motion.div>

          <h1 style={{ fontSize: "50pt", textAlign: "center" }}>
            Hi, I&apos;m Christian
          </h1>

          <h2
            style={{ textAlign: "center", marginTop: "-50px" }}
            sx={{
              marginTop: { md: -200, lg: -200 }
            }}
          >
            UNSW Computer Science
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              size="md"
              className="socialButton"
              variant="gradient"
              style={{
                marginRight: "15px"
              }}
              component="a"
              href="https://github.com/scoogii"
              target="_blank"
            >
              <GitHubIcon />
            </Button>

            <Button
              size="md"
              className="socialButton"
              variant="gradient"
              style={{
                marginLeft: "15px",
                marginRight: "15px"
              }}
              component="a"
              href="https://linkedin.com/in/christianngu"
              target="_blank"
            >
              <LinkedInIcon />
            </Button>


            <Button
              size="md"
              className="socialButton"
              variant="gradient"
              style={{
                marginLeft: "15px",
                marginRight: "15px",
              }}
              component="a"
              href="mailto:christian.nguyen6@outlook.com"
            >
              <EmailIcon />
            </Button>

            <Button
              size="md"
              className="socialButton"
              variant="gradient"
              style={{
                marginLeft: "15px",
              }}
              component="a"
              href="https://www.youtube.com/watch?v=xfeys7Jfnx8&ab_channel=nigahiga"
              target="_blank"
            >
              <YoutubeIcon />
            </Button>
          </div>

        </div >
      </Fade >

      <hr
        style={{
          height: "2px",
          border: "none",
          borderRadius: "6px",
          background: "linear-gradient(to right, #6AADCF 7%, #516ACF 66%"
        }}
      />

      <div>
        <Fade
          direction="up"
          duration="1100"
          triggerOnce="true"
        >
          <h1 style={{ textAlign: "center" }}>
            About Me
          </h1>
        </Fade>

        <p style={{ textAlign: "center" }}>
          I&apos;m an aspiring software engineer in my final year who loves to find ways to continually
          challenge myself. My dream is to work on real-world problems that
          can have a lasting positive impact in the world. In my spare time I&apos;ve started getting into long-distance running as well as playing SUPER AUTO PETS 😂
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Tooltip title="meow">
            <Image
              priority
              className="gloriousOllie"
              src="/images/ollitoes.jpg"
              height={100}
              width={100}
              alt=""
            />
          </Tooltip>
        </div>
      </div>

      <hr
        style={{
          height: "3px",
          border: "none",
          borderRadius: "6px",
          background: "linear-gradient(to right, #6AADCF 7%, #516ACF 66%"
        }}
      />

      <div>
        <Fade
          direction="up"
          duration="1100"
          triggerOnce="true"
        >
          <h1 style={{ textAlign: "center" }}>
            My Projects
          </h1>
        </Fade>

        <div
          style={{
            display: "flex",
            gridGap: "50px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Card
            style={projectCard}
            className="projectBox"
            sx={{
              width: { xs: "80vw", sm: "55vw" },
              height: { xs: 600, sm: "85vh", md: 550, lg: 550 },
              position: "relative"
            }}
          >
            <CardMedia
              component="img"
              height="250px"
              image="/images/airbrb.jpeg"
            />
            <CardContent>
              <Typography gutterbottom="true" variant="h5" component="div" color="white">
                Airbrb
              </Typography>
              <Typography
                variant="body1"
                color="#d2d2d4"
                sx={{
                  fontSize: { xs: 15, sm: 16, md: 16, lg: 18 },
                }}
              >
                A clone of the popular renting platform Airbnb which had features including:
                <br />
                - Logins and signups
                <br />
                - Viewing and making Listings
                <br />
                - Making and cancelling Bookings
                <br />
                - Searching through listings with filters
              </Typography>

              <div style={chipContainerStyle}>
                <Chip
                  label="React"
                  style={chipStyle}
                  color="primary"
                />
                <Chip
                  label="Material UI"
                  style={chipStyle}
                  color="primary"
                />
                <Chip
                  label="HTML/CSS/JS"
                  style={chipStyle}
                  color="primary"
                />
              </div>
            </CardContent>
          </Card>

          <Card
            style={projectCard}
            className="projectBox"
            sx={{
              width: { xs: "80vw", sm: "55vw" },
              height: { xs: 600, sm: "85vh", md: 550, lg: 550 },
              position: "relative"
            }}
          >
            <CardMedia
              component="img"
              height="250px"
              image="/images/flocks.gif"
            />
            <CardContent>
              <Typography gutterbottom="true" variant="h5" component="div" color="white">
                Flockr
              </Typography>
              <Typography
                variant="body1"
                color="#d2d2d4"
                sx={{
                  fontSize: { xs: 15, sm: 16, md: 16, lg: 18 },
                }}
              >
                A clone of an online collaboration platform called Flock. Implemented features such as:
                <br />
                - Logins and signups WITH authentication
                <br />
                - Joining and creating channels
                <br />
                - Role management of users in the channel
                <br />
                - Sending and removing messages, including additional features such as standup and pinning messages
              </Typography>
              <div style={chipContainerStyle}>
                <Chip
                  label="Python"
                  style={chipStyle}
                  color="primary"
                />
                <Chip
                  label="Flask"
                  style={chipStyle}
                  color="primary"
                />
                <Chip
                  label="REST APIs"
                  style={chipStyle}
                  color="primary"
                />
                <Chip
                  label="pytest"
                  style={chipStyle}
                  color="primary"
                />
              </div>
            </CardContent>
          </Card>

          <Card
            style={projectCard}
            className="projectBox"
            sx={{
              width: { xs: "80vw", sm: "55vw" },
              height: { xs: 600, sm: "85vh", md: 550, lg: 550 },
              position: "relative"
            }}
          >
            <CardMedia
              component="img"
              height="250px"
              image="/images/loopest.gif"
            />
            <CardContent>
              <Typography gutterbottom="true" variant="h5" component="div" color="white">
                Loop Mania
              </Typography>
              <Typography
                variant="body1"
                color="#d2d2d4"
                sx={{
                  fontSize: { xs: 15, sm: 16, md: 16, lg: 18 },
                }}
              >
                A clone of an endless RPG game similar to the likes of Loop Hero.
                Heavy focus on implementing various design patterns and following OOP principles throughout the project. Also wrote JUnit tests to ensure the game performed as expected. Our hero was Drake.
              </Typography>
              <div style={chipContainerStyle}>
                <Chip
                  label="Java"
                  style={chipStyle}
                  color="primary"
                />
                <Chip
                  label="OOP"
                  style={chipStyle}
                  color="primary"
                />
                <Chip
                  label="JUnit Testing"
                  style={chipStyle}
                  color="primary"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div >
    </>
  )
}
