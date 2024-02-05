import hurricane_pic from '../images/hurricane-project-test.png';
import { Carousel } from 'react-bootstrap';

export const Projects = () => {
  const projects = [
    {
      name: 'Hurricane Interactive Predictor',
      image: 'hurricane_pic',
      desc: 'Predicts hurricane paths based on real wind and sea surface temperature data.',
      stack: 'Javascript, Python, React, Django Rest Framework, Docker, Bootstrap, pandas, xarray, numpy, HTML, CSS',
    }
  ];

  return (
    <div>
    <h1>Projects</h1>
      <Carousel>
        {projects.map(project => (
          <Carousel.Item key={project.name}>
            <img src={hurricane_pic} />
            <Carousel.Caption>
              <h3>{project.name}</h3>
              <h4>{project.stack}</h4>
              <p>{project.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
