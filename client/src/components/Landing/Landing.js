import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import Jumbotron from "../layout/Jumbotron";

const Landing = () => {
  return (
    <div>
      <Jumbotron
        title="GRADUATE HIRING. MADE SIMPLE."
        subtitle="recruitme is an inclusive marketplace for hiring top-rated graduate talent."
        button="Search Jobs"
        to="search-jobs"
      />
      <Container
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h3>BENEFITS</h3>
      </Container>
      <Container
        style={{
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "20rem", margin: "25px" }}>
          <Card.Header>Post</Card.Header>
          <Card.Body>
            <Card.Text>
              One place to post grad jobs, receive applications and screen
              profiles.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", margin: "25px" }}>
          <Card.Header>Search</Card.Header>
          <Card.Body>
            <Card.Text>
              Widen the search and use deep dive search tools to help you
              discover uncovered talent.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", margin: "25px" }}>
          <Card.Header>Video Profiles</Card.Header>
          <Card.Body>
            <Card.Text>
              Use video profiles to screen candidates and improve efficiency in
              your hiring process.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", margin: "25px" }}>
          <Card.Header>Engagement</Card.Header>
          <Card.Body>
            <Card.Text>
              Create hiring campaigns that engage generation Z more effectively
              than traditional job boards.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", margin: "25px" }}>
          <Card.Header>Diverse Hiring Tools</Card.Header>
          <Card.Body>
            <Card.Text>
              Create a diverse selection of candidates for each job and ensure
              hiring bias is removed from your campaign.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", margin: "25px" }}>
          <Card.Header>Insight</Card.Header>
          <Card.Body>
            <Card.Text>
              Use live data driven inisght to learn how to reach your hiring
              targets more effectively.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container
        style={{
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h3>HOW IT WORKS</h3>
      </Container>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Card style={{ width: "25rem", margin: "25px" }}>
          <Card.Header>FOR GRADUATES</Card.Header>
          <Card.Body>
            <Card.Text>
              For Graduates GradBay is an inclusive market place for graduates
              to find and apply to jobs specifically aimed at the internship,
              entry and graduate level. We cater for graduates and students from
              all backgrounds, academic achievement and varying levels of work
              experience. We understand the challenegs of the post graduation
              job hunt and have built GradBay to make this process an effective
              and positive one for your career by focusing on you as an
              individual and not just another CV.
            </Card.Text>
            <Card.Text>
              <h5>NEXT STEPS</h5>
              <ol>
                <li>Sign up</li>
                <li>Complete your profile</li>
                <li> Search jobs and apply</li>
                <li> Start interviewing and get hired</li>
              </ol>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "25px" }}>
          <Card.Header>FOR BUSINESSES</Card.Header>
          <Card.Body>
            <Card.Text>
              For businesses looking to engage and retain graduate talent we
              offer new forms of hiring solutions focused on quality of service,
              speed of delivery and highly targeted results. GradBay is built on
              data driven insight and years of graduate hiring experience to
              help your business access the next generation of talent with a
              product built this decade, not the last one.
            </Card.Text>
            <Card.Text>
              <h5>NEXT STEPS</h5>
              <ol>
                <li>Sign up</li>
                <li>Select a service</li>
                <li>Submit job info and review applications</li>
                <li>Interview candidates and start hiring</li>
              </ol>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Landing;
