import Image from "next/image";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/YouTube";


export default function Home () {
  return (
    <>
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

        <h1 style={{ textAlign: "center" }}>
          Hi, I&apos;m Christian
        </h1>

        <h2 style={{ textAlign: "center", marginTop: "-2vh" }}>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu libero et sem iaculis ullamcorper id in ipsum. Proin bibendum, lectus non eleifend elementum, nisi tellus ornare lectus, eget porta ligula tellus quis odio. Morbi convallis justo vehicula egestas rutrum. Integer venenatis, ex eu vestibulum fringilla, nunc metus ullamcorper diam, vel malesuada justo nulla non urna. Pellentesque magna leo, rhoncus ut dui nec, vehicula vehicula purus. Praesent porttitor finibus metus, lacinia sodales lorem efficitur quis.
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

        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu libero et sem iaculis ullamcorper id in ipsum. Proin bibendum, lectus non eleifend elementum, nisi tellus ornare lectus, eget porta ligula tellus quis odio. Morbi convallis justo vehicula egestas rutrum. Integer venenatis, ex eu vestibulum fringilla, nunc metus ullamcorper diam, vel malesuada justo nulla non urna. Pellentesque magna leo, rhoncus ut dui nec, vehicula vehicula purus. Praesent porttitor finibus metus, lacinia sodales lorem efficitur quis.
        </p>
      </div>
    </>
  )
}
