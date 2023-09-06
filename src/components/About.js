import React from "react";
import profile from "../img/profile.jpeg";

const About = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-purple-300">
      <div className="relative w-96 h-auto  bg-purple-400 rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
        <div className="rounded-full bg-black w-32 h-32 overflow-hidden">
          <div
            className="bg-image"
            style={{
              backgroundImage: `url(${profile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <label className="font-bold text-gray-100 text-lg">Fajr Naveed</label>
        <p className="text-center text-gray-200 mt-2 leading-relaxed">
          I'm a passionate entrepreneur with a love for all things fashion and
          style. My journey into the world of ecommerce started with a simple
          idea - to curate a collection of high-quality products that not only
          reflect the latest trends but also showcase timeless elegance.
        </p>
        <ul className="flex flex-row gap-2 mt-4">
          {/* <!-- instagram --> */}
          <a
            href="https://instagram.com/fajr_naveed0__0?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="h-10 w-10 text-gray-300 hover:text-gray-100 transition"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.7 56.7"
            >
              <circle cx="28.1" cy="30" r="4.4"></circle>
              <path d="M33.6,19.2h-11c-1.6,0-3,0.5-3.9,1.4c-0.9,0.9-1.4,2.3-1.4,3.9v11c0,1.6,0.5,3,1.5,4c1,0.9,2.3,1.4,3.9,1.4h10.9c1.6,0,3-0.5,3.9-1.4c1-0.9,1.5-2.3,1.5-3.9v-11c0-1.6-0.5-2.9-1.4-3.9C36.6,19.7,35.3,19.2,33.6,19.2z M28.1,36.8c-3.8,0-6.8-3.1-6.8-6.8c0-3.8,3.1-6.8,6.8-6.8S35,26.2,35,30C35,33.8,31.9,36.8,28.1,36.8z M35.2,24.5c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6S36.1,24.5,35.2,24.5z"></path>
            </svg>
          </a>
          {/* <!-- linkedin --> */}
          <a
          
            href="https://www.linkedin.com/in/fajr-naveed-675b91239/"

            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="h-10 w-10 text-gray-300 hover:text-gray-100 transition"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.693 56.693"
            >
              <path d="M28.347,5.155c-13.6,0-24.625,11.025-24.625,24.625c0,13.602,11.025,24.625,24.625,24.625c13.598,0,24.623-11.023,24.623-24.625C52.97,16.181,41.944,5.155,28.347,5.155z M42.062,41.741c0,1.096-0.91,1.982-2.031,1.982H16.613c-1.123,0-2.031-0.887-2.031-1.982V18.052c0-1.094,0.908-1.982,2.031-1.982H40.03c1.121,0,2.031,0.889,2.031,1.982V41.741z"></path>
              <path d="M33.099,26.441c-2.201,0-3.188,1.209-3.74,2.061v0.041h-0.027c0.01-0.012,0.02-0.027,0.027-0.041v-1.768h-4.15c0.055,1.17,0,12.484,0,12.484h4.15v-6.973c0-0.375,0.027-0.744,0.137-1.012c0.301-0.744,0.984-1.52,2.129-1.52c1.504,0,2.104,1.146,2.104,2.824v6.68h4.15V32.06C37.878,28.224,35.829,26.441,33.099,26.441z"></path>
              <path d="M20.864,20.712c-1.419,0-2.349,0.934-2.349,2.159c0,1.197,0.9,2.158,2.294,2.158h0.027c1.447,0,2.348-0.961,2.348-2.158C23.157,21.646,22.284,20.712,20.864,20.712z"></path>
              <circle cx="25.843" cy="21.644" r="1.262"></circle>
            </svg>
          </a>
          {/* <!-- github --> */}
          <a href="https://github.com/your-github-username" target="_blank">
            <svg
              className="h-10 w-10 text-gray-300 hover:text-gray-100 transition"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.261.82-.581 0-.288-.01-1.047-.015-2.057-3.338.724-4.042-1.34-4.042-1.34-.547-1.387-1.333-1.755-1.333-1.755-1.088-.743.082-.727.082-.727 1.205.085 1.84 1.24 1.84 1.24 1.07 1.839 2.805 1.308 3.49.998.107-.767.418-1.294.76-1.591-2.665-.296-5.466-1.336-5.466-5.93 0-1.313.465-2.38 1.236-3.22-.124-.297-.54-1.524.12-3.176 0 0 1.007-.322 3.3 1.23a11.562 11.562 0 013.017-.41 11.58 11.58 0 013.016.41c2.292-1.552 3.298-1.23 3.298-1.23.662 1.652.245 2.88.12 3.176.77.84 1.236 1.907 1.236 3.22 0 4.606-2.804 5.63-5.473 5.922.43.372.813 1.1.813 2.213 0 1.601-.015 2.889-.015 3.288 0 .322.215.696.825.58C20.566 21.797 24 17.3 24 12c0-6.628-5.372-12-12-12z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default About;
