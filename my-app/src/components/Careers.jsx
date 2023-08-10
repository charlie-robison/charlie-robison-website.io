import { Container, Row, Col } from 'react-bootstrap';

/** Displays the career section of the page. */
export const Careers = () => {
  const careers = [
    {
      title: 'Web Developer',
      company: 'Hawaii Digital Health',
      jobType: 'Internship',
      start: 'May 2023',
      end: 'August 2023',
      description: 'Desc...',
      link: 'link'
    }
  ];
  return (
    <Container>
      <h2>Careers</h2>
      {careers.map(career =>
        <Row>
          <Col>
            <h2>{`${career.title} (${career.jobType})`}</h2>
            <h3>{`${career.company} | ${career.link}`}</h3>
            <h5>{`${career.start} - ${career.end}`}</h5>
            <p>{career.description}</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};
