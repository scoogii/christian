import Image from "next/image";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YoutubeIcon from '@mui/icons-material/YouTube';


export default function Home () {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5vh"
        }}
      >
        <div>
          <Image
            priority
            src="/images/christian.jpg"
            height={320}
            width={320}
            alt=""
            style={{ borderRadius: "50%" }}
          />

          <h1 style={{ textAlign: "center" }}>
            Hi, I"m Christian
          </h1>

          <p style={{ textAlign: "center", marginTop: "-2vh" }}>
            (No, I"m not Christian though 😬)
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              className="socialButton"
              size="large"
              variant="contained"
              style={{
                background: 'linear-gradient(to right, #6AADCF 7%, #516ACF 66%',
                marginRight: '10px'
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
                background: 'linear-gradient(to right, #6AADCF 7%, #516ACF 66%',
                marginLeft: '10px',
                marginRight: '10px'
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
                background: 'linear-gradient(to right, #6AADCF 7%, #516ACF 66%',
                marginLeft: '10px',
              }}
              href="https://www.youtube.com/watch?v=xfeys7Jfnx8&ab_channel=nigahiga"
              target="_blank"
            >
              <YoutubeIcon />
            </Button>
          </div>

        </div>

      </div >

      <div>
        <h1 style={{ textAlign: "center" }}>
          About Me
        </h1>
      </div>

      <div>
        <h1 style={{ textAlign: "center" }}>
          My Projects
        </h1>
      </div>
    </>
  )
}
