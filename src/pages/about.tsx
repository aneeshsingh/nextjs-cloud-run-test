import React from 'react';

const About = (props:any) => {

    console.log(props);
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page of our Next.js app.</p>
        </div>
    );
};

export const getServerSideProps = async () => {
    // Fetch data from an API or perform any server-side operations
    console.log('vinay dddddd');
      const response = await fetch('http://127.0.0.1:8000/api/article/');
      const data = await response.json();
    return {
      props: {
        data
      },
    };
  }

export default About;
