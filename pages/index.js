import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/YouTube";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Chip } from '@mui/material';


export default function Home () {
  const projectCard = {
    background: "#222a3b",
    color: "white"
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <Image
          priority
          src="/images/christian.jpg"
          height={320}
          width={320}
          alt=""
          style={{ borderRadius: "50%" }}
        />

        <h1 style={{ fontSize: "50pt", textAlign: "center" }}>
          Hi, I&apos;m Christian
        </h1>

        <h2 style={{ textAlign: "center", marginTop: "-4vh" }}>
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
            className="socialButton"
            size="large"
            variant="contained"
            style={{
              background: "linear-gradient(to right, #6AADCF 7%, #516ACF 66%",
              marginRight: "15px"
            }}
            href="https://github.com/scoogii"
            target="_blank"
          >
            <GitHubIcon />
          </Button>

          <Button
            className="socialButton"
            size="large"
            variant="contained"
            style={{
              background: "linear-gradient(to right, #6AADCF 7%, #516ACF 66%",
              marginLeft: "15px",
              marginRight: "15px"
            }}
            href="https://linkedin.com/in/christianngu"
            target="_blank"
          >
            <LinkedInIcon />
          </Button>

          <Button
            className="socialButton"
            size="large"
            variant="contained"
            style={{
              background: "linear-gradient(to right, #6AADCF 7%, #516ACF 66%",
              marginLeft: "15px",
            }}
            href="https://www.youtube.com/watch?v=xfeys7Jfnx8&ab_channel=nigahiga"
            target="_blank"
          >
            <YoutubeIcon />
          </Button>
        </div>

      </div >

      <hr
        style={{
          height: "3px",
          border: "none",
          borderRadius: "6px",
          background: "linear-gradient(to right, #6AADCF 7%, #516ACF 66%"
        }}
      />

      <div>
        <h1 style={{ textAlign: "center" }}>
          About Me
        </h1>

        <p style={{ textAlign: "center" }}>
          I&apos;m an aspiring software engineer in my final year looking to find ways to continually
          challenge myself while having fun. My dream is to work on real-world problems that
          can have a lasting positive impact in the world. So far I&apos;ve only completed a couple projects but I&apos;m
          looking to expand my horizons and build a full-stack app for movie recommendations.
        </p>

        <p style={{ textAlign: "center" }}>
          (I have a dog too 😃)
        </p>
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
        <h1 style={{ textAlign: "center" }}>
          My Projects
        </h1>

        <div
          style={{
            display: "grid",
            gridGap: "30px",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Card style={projectCard} sx={{ width: "70vw", height: "40vh", position: "relative" }}>
            <CardMedia
              component="img"
              height="250px"
              image="/images/airbrb.jpeg"
            />
            <CardContent>
              <Typography gutterbottom variant="h5" component="div">
                Airbrb
              </Typography>
              <Typography variant="body1" color="#d2d2d4">
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

          <Card style={projectCard} sx={{ width: "70vw", height: "40vh", position: "relative" }}>
            <CardMedia
              component="img"
              height="250px"
              image="/images/flockr.jpeg"
            />
            <CardContent>
              <Typography gutterbottom variant="h5" component="div">
                Flockr
              </Typography>
              <Typography variant="body1" color="#d2d2d4">
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

          <Card style={projectCard} sx={{ width: "70vw", height: "40vh", position: "relative" }}>
            <CardMedia
              component="img"
              height="250px"
              image="/images/loopmania.jpeg"
            />
            <CardContent>
              <Typography gutterbottom variant="h5" component="div">
                Loop Mania
              </Typography>
              <Typography variant="body1" color="#d2d2d4">
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
