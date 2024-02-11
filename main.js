const projects = [
    {
        projectName: 'Social Plai Website',
        image: './images/Social-Plai-Demo.mp4',
        link: '',
        summary: 'A real-time web application which utilizes social interactions in video games to diagnose developmental delays.',
        date: 'May 2023 - August 2023',
        skills: 'Javascript, React JS, Meteor JS, MongoDB Atlas, AWS EC2, Bootstrap, Git Version Control',
        description: 'As part of an internship with the Hawaii Digital Health Lab, I worked in a team of multiple people to develop a web application that diagnoses developmental delays in children by playing multiplayer video games with one another and interacting with one another. The website needed to incorporate the interaction between users whether it be through recording the users while playing the video or through chat messages. My responsibility was to build a fully-functioning message system which allows users to communicate with one another, invite each other to play games on the platform and hold multiple conversations in a neat manner which does not impact the user experience negatively. I was also in charge of deploying the web application on AWS using an EC2 instance and connected MongoDB atlas, a cloud database server, to the deployed application. I also built an online video game on the platform which helps monitor visual motor skills to help diagnose users with potential developmental delays. The frontend of this project was developed with ReactJS and plain HTML, CSS, and Javascript while the backend was developed using MeteorJS as well as MongoDB and AWS S3 bucket. The entire application was deployed on an AWS EC2 instance.',
    },
    {
        projectName: 'Hurricane Simulator',
        image: './images/Hurricane-Simulator-Demo.mp4',
        link: 'https://github.com/Karamperidou-Research-Group-UHM/hurricane-path-game',
        summary: 'A web application which utilizes NOAA wind and sea surface temperature data to predict hurricane paths based on pressure system position.',
        date: 'January 2023 - June 2023',
        skills: 'Python, Javascript, React JS, Django Rest Framework, Docker, Bootstrap CSS, Conda Environments, HTML, CSS',
        description: 'As part of the Karamperidou Research Group, I was tasked to develop a hurricane simulator for the pacific ocean which predicts where a hurricane will go based on the winds, the sea surface temperature, and the location of pressure systems. The pressure systems can be moved around which influence the directions of the wind arrows which in turn affects the path of a hurricane. I was tasked to build the frontend which allows users to control the pressure systems, choose seasons, etc. to effect hurricane paths. I was also tasked to build a REST API using Django rest framework which reads in 50 years of NOAA data for sea surface temperature and winds and outputs averages for both for each longitude and latitude point. The frontend takes this data and projects it on the screen for the viewer to view. The frontend was built with plain Javascript, HTML, and CSS and the backend was built using Django Rest Framework. The application is put into two docker containers, one for the frontend and one for the frontend which condenses the dependencies for both and allows the application to be easily deployed in the future.',
    },
    {
        projectName: 'HI DOE Bill Tracker',
        image: './images/HI-DOE-View-Bills.png',
        link: 'https://github.com/hi-doe-tracker/hi-doe-tracker',
        summary: `A real-time web application which manages and tracks the Hawaii Department of Education's bills, testimonies, and hearing notices.`,
        date: 'August 2022 - December 2022',
        skills: 'JavaScript, React JS, Meteor JS, MongoDB, Bootstrap, Html, CSS, Agile Project Management, Git Version Control, Issue Drivin Project Management',
        description: 'For my Software enginerring course I was tasked along with a ten person to build an application for the department of education which tracks their bills, creates testimonies, and sends hearing notices related to education in Hawaii. This application is a real-time full stack application which is built with Javascript, React JS, Meteor JS, and MongoDB. My responsibilities for this project was to build the bill tracking system and well as creating the testimony approval system which tracks the steps needed for the user to approve a testimony.',
    },
    {
        projectName: 'Reciept Analytics',
        image: './images/receipt-analytics-summary.png',
        link: 'https://github.com/charlie-robison/reciept-analytics',
        summary: 'A big data analytics application which categorizes receipts and products by categories based on a Machine Learning model trained to classfiy receipts and products using word embeddings.',
        date: 'November 2023 - December 2023',
        skills: 'Python, Jupyter Notebook, Big Data Analytics, Machine Learning Models, Visualization, Prompt Engineering, Classification, Data Science',
        description: 'For my Big Data Analytics course my partner and I were tasked to create an application that parses unstructured receipt texts into structured JSON text using a prompt we engineered for ChatGPT. This structured JSON is then used to identify products which are classfied into specufic categories based on a machine learning model we trained and tested which uses classification of word embeddings. Receipts would be categorized based on the average word embeddings from the product classifications. We then identified statistics and visualized them with MatplotLib.',
    },
];

// Adds each project to the web page.
projects.map(project => {
    console.log(project.projectName);
    const projectList = document.querySelector('#project-list');
    const entry = document.createElement('li');
    entry.className = 'project';

    const content = project.image.substring(project.image.length - 3, project.image.length) === 'mp4' ? `
    <video controls autoplay muted>
        <source src="${project.image}" type="video/mp4">
    </video>` : `<img src="${project.image}" alt="${project.image}">`;

    // Checks if there is a project link.
    if (project.link === '') {
        entry.innerHTML = 
        `<h2>${project.projectName}</h2>
        <h3>${project.date}</h3>
        <h4>${project.summary}</h4>
        ${content}
        <h3>Skills: ${project.skills}</h3>
        <h4>Description</h4>
        <p>${project.description}</p>`;
    } else {
        entry.innerHTML = 
        `<a href="${project.link}"><h2>${project.projectName}</h2></a>
        <h3>${project.date}</h3>
        <h4>${project.summary}</h4>
        ${content}
        <h3>Skills: ${project.skills}</h3>
        <h4>Description</h4>
        <p>${project.description}</p>`;
    }

    projectList.appendChild(entry);

});