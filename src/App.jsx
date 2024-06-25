import React, { useState } from "react";
import { Link, Element } from "react-scroll";

import Logo from "../src/assets/image.png";
import linked from "../src/assets/LinkedIn.svg";
import twitter from "../src/assets/Twitter.svg";
import behance from "../src/assets/Behance.svg";
import arrow from "../src/assets/Vector.svg";
import caseStudy from "../src/assets/casestudy.png";
import caseStudy2 from "../src/assets/casestudy2.png";
import caseStudy3 from "../src/assets/casestudy3.png";

import fintech from "../src/assets/fintech.svg";
import edtech from "../src/assets/edtech.svg";

import pharmacy from "../src/assets/pharmacy.svg";
import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";

import client3 from "../src/assets/client3.png";
import client4 from "../src/assets/client4.png";

import work1 from "../src/assets/work1.png";
import work2 from "../src/assets/word2.png";
import '../src/App.css'



const App = () => {
  const [hover, setHover] = useState(false);
  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <body style={{margin:'0px', padding:"0px"}}>
      <div style={{margin:"0px", padding:"0px"}}>
      <div style={{ backgroundColor: "#080808" }}>
        <header
          style={{
            width: "1110px",
            height: "70px",
            border: "2px soloid grey",
            borderRadius: "0px 0px 8px 8px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "1110px",
              height: "70px",
              borderRadius: "0px 0px 8px 8px",
              backgroundColor: "#1B1B1B",
              alignItems: "center",
              marginLeft: "85px",
              marginTop: "-8px",
            }}
          >
            <div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "95px",
                  listStyle: "none",
                  columnGap: "70px",
                }}
              >
                <li >
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li >
                  <Link to="case-studies" smooth={true} duration={500}>
                    Case Studies
                  </Link>
                </li>
                <li >
                  <Link to="testimonials" smooth={true} duration={500}>
                    Testimonials
                  </Link>
                </li>
                <li >
                  <Link to="recent-work" smooth={true} duration={500}>
                    Recent Work
                  </Link>
                </li>
                <li >
                  <Link to="get-in-touch" smooth={true} duration={500}>
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>

            <div
              style={{
                marginLeft: "95px",

                display: "flex",
                flexDirection: "row",
                columnGap: "25px",
              }}
            >
              <img src={linked} />
              <img src={twitter} />
              <img src={behance} />
            </div>
          </div>
        </header>

        <Element name="home" >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ width: "538px", marginLeft: "180px", marginTop: "131px" }}
          >
            {/* for text  */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <h2
                style={{ fontSize: "44px", fontWeight: "bold", color: "white" }}
              >
                Your Name Here
                <p
                  style={{
                    fontSize: "14px",
                    color: "#9C9C9C",
                    lineHeight: "24px",
                  }}
                >
                  Intro text: Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor incididunt ut <br />
                  labore et dolore magna aliqua.{" "}
                </p>
              </h2>
            </div>
            <button

             
              type="submit"
              style={{
                width: "307px",
                height: "63px",
                borderRadius: "4px 4px 4px 4px",
                backgroundColor: "#3F8E00",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                boxShadow: "0px 0px 10px 2px grey",
                marginTop: "30px",
                cursor: "pointer",

              }}
            >
              {" "}
              Let’s get started{" "}
              <img src={arrow} style={{ marginLeft: "5px" }} />{" "}
            </button>
           
          </div>

          <div style={{ marginTop: "132px" }}>
            <img src={Logo} />
          </div>
        </div>

        <div>
          <h6
            style={{ marginTop: "105px", marginLeft: "180px", color: "white" }}
          >
            Worked With
          </h6>
          <div
            style={{
              marginTop: "20px",
              width: "920px",
              height: "80px",
              marginLeft: "180px",
              display: "flex ",
              flexDirection: "row",
              columnGap: "30px",
              marginBottom: "45px",
            }}
          >
            <button
             
              type="click"
              className="button"
              // style={{
              //   border: "1px solid #FFFFFF",
              //   width: "160px",
              //   height: "60px",
              //   borderRadius: "5px 5px",
              //   background: "none",
              //   color: "#FFFFFF",
              //   marginBottom: "45px",
              //   cursor: "pointer",
              //   boxShadow: "0px 0px 10px 0px grey",
                
                
              // }}
            >
              {" "}
              Click Up{" "}
            </button>

            <button
            className="button"
              type="click"
              // style={{
              //   border: "1px solid #FFFFFF",
              //   width: "160px",
              //   height: "60px",
              //   borderRadius: "5px 5px",
              //   background: "none",
              //   color: "#FFFFFF",
              //   cursor: "pointer",
              //   boxShadow: "0px 0px 10px 0px grey",
              // }}
            >
              {" "}
              Drop Box{" "}
            </button>

            <button
            className="button"
              type="click"
              // style={{
              //   border: "1px solid #FFFFFF",
              //   width: "160px",
              //   height: "60px",
              //   borderRadius: "5px 5px",
              //   background: "none",
              //   color: "#FFFFFF",
              //   cursor: "pointer",
              //   boxShadow: "0px 0px 10px 0px grey",
              // }}
            >
              {" "}
              PAYGHEX{" "}
            </button>

            <button
            className="button"
              type="click"
              // style={{
              //   border: "1px solid #FFFFFF",
              //   width: "160px",
              //   height: "60px",
              //   borderRadius: "5px 5px",
              //   background: "none",
              //   color: "#FFFFFF",
              //   cursor: "pointer",
              //   boxShadow: "0px 0px 10px 0px grey",
              // }}
            >
              {" "}
              Elastic{" "}
            </button>

            <button
            className="button"
              type="click"
              // style={{
              //   border: "1px solid #FFFFFF",
              //   width: "160px",
              //   height: "60px",
              //   borderRadius: "5px 5px",
              //   background: "none",
              //   color: "#FFFFFF",
              //   cursor: "pointer",
              //   boxShadow: "0px 0px 10px 0px grey",
              // }}
            >
              {" "}
              Stripe{" "}
            </button>
          </div>
        </div>

        </Element>
        
        

       
      </div>

      {/* for case study */}

      <Element  name="case-studies" >
      <div>
        <div
          style={{
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"10px"
          }}
        >
          <h1
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: "34px",
              fontWeight: "bolder",
              textAlign: "center",
              padding:"30px"
            }}
          >
            Case Study
          </h1>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "lBM Plex Mono",
              textAlign: "center",
              color: "#9C9C9C",
              lineHeight: "20px",
            }}
          >
            Solving user & business problems since last 15+ years.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "24px",
          marginTop: "60px",
        }}
      >
        <div style={{ width: "421px" }}>
          <img src={fintech} />
          <h1>Work name here</h1>
          <p style={{ color: "#9C9C9C", fontSize: "14px", lineHeight: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button
            type="submit"
            style={{
              width: "307px",
              height: "63px",
              borderRadius: "4px 4px 4px 4px",
              backgroundColor: "#FFA217",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              boxShadow: "0px 0px 10px 2px grey",
              marginTop: "30px",
            }}
          >
            {" "}
            View Case Study <img
              src={arrow}
              style={{ marginLeft: "5px" }}
            />{" "}
          </button>
        </div>

        <div>
          <img src={caseStudy} style={{ borderRadius: "8px 8px" }} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "34px",
          marginTop: "60px",
        }}
      >
        <div>
          <img src={caseStudy2} style={{ borderRadius: "8px 8px" }} />
        </div>
        <div style={{ width: "421px" }}>
          <img src={edtech} />
          <h1>Work name here</h1>
          <p style={{ color: "#9C9C9C", fontSize: "14px", lineHeight: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button
            type="submit"
            style={{
              width: "307px",
              height: "63px",
              borderRadius: "4px 4px 4px 4px",
              backgroundColor: "#000AFF",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              boxShadow: "0px 0px 10px 2px grey",
              marginTop: "30px",
            }}
          >
            {" "}
            View Case Study <img
              src={arrow}
              style={{ marginLeft: "5px" }}
            />{" "}
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "24px",
          marginTop: "60px",
        }}
      >
        <div style={{ width: "421px" }}>
          <img src={pharmacy} />
          <h1>Work name here</h1>
          <p style={{ color: "#9C9C9C", fontSize: "14px", lineHeight: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button
            type="submit"
            style={{
              width: "307px",
              height: "63px",
              borderRadius: "4px 4px 4px 4px",
              backgroundColor: "#2AB090",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              boxShadow: "0px 0px 10px 2px grey",
              marginTop: "30px",
            }}
          >
            {" "}
            View Case Study <img
              src={arrow}
              style={{ marginLeft: "5px" }}
            />{" "}
          </button>
        </div>

        <div>
          <img src={caseStudy3} style={{ borderRadius: "8px 8px" }} />
        </div>
      </div>

      </Element>

      

      {/* testimonals */}
      
      <Element name="testimonials">
      <div style={{ backgroundColor: "#080808" }}>
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            rowGap: "-5",
            marginTop: "20px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "34px",
              fontWeight: "bolder",
              color: "#FFFFFF",
              marginTop: "80px",
            }}
          >
            Testimonials
            <p
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#9C9C9C",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "455px",
              border: "1px solid #9C9C9C",
              borderRadius: "5px 5px 5px 5px",
              borderRightWidth: "0px",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#9C9C9C",
                lineHeight: "24px",
                marginLeft: "30px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "19px",
                marginLeft: "30px",
              }}
            >
              <img src={client1} width={66} height={59} />
              <h2 style={{ color: "#FFFFFF" }}>Client Name</h2>
            </div>
          </div>

          <div
            style={{
              width: "455px",
              border: "1px solid #9C9C9C",
              borderRadius: "5px 5px 5px 5px",
              borderRightWidth: "0px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#9C9C9C",
                lineHeight: "24px",
                marginLeft: "30px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "19px",
                marginLeft: "30px",
              }}
            >
              <img src={client2} width={66} height={59} />
              <h2 style={{ color: "#FFFFFF" }}>Client Name</h2>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "50px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "62px",
          }}
        >
          <div
            style={{
              width: "455px",
              border: "1px solid #9C9C9C",
              borderRadius: "5px 5px 5px 5px",
              borderRightWidth: "0px",
              justifyContent: "center",
              marginBottom: "50px",

            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#9C9C9C",
                lineHeight: "24px",
                marginLeft: "30px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "19px",
                marginLeft: "30px",
              }}
            >
              <img src={client3} width={66} height={59} />
              <h2 style={{ color: "#FFFFFF" }}>Client Name</h2>
            </div>
          </div>

          <div
            style={{
              width: "455px",
              border: "1px solid #9C9C9C",
              borderRadius: "5px 5px 5px 5px",
              borderRightWidth: "0px",
              marginBottom: "50px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#9C9C9C",
                lineHeight: "24px",
                marginLeft: "30px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "19px",
                marginLeft: "30px",
              }}
            >
              <img src={client4} width={66} height={59} />
              <h2 style={{ color: "#FFFFFF" }}>Client Name</h2>
            </div>
          </div>
        </div>
      </div>

      </Element>

     

      {/* recent word  */}

      <Element name="recent-work">
      <div>
        <div style={{ margin: "auto", marginTop: "50px" }}>
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            Recent Work
          </h1>
          <p
            style={{
              color: "#9C9C9C",
              fontSize: "14px",
              lineHeight: "24px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Solving user & business problems since last 15+ years.<br />            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "30px",
            justifyContent: "center",
            marginTop: "45px",
          }}
        >
          <div style={{ marginBottom: "30px" }}>
            <img src={work1} />

            <div>
              <h2>Work name here</h2>
              <p style={{ color: "#9C9C9C" }}>
                Labore et dolore magna aliqua. sed do eiusmod <br /> tempor
                incididunt ut labore et dolore magna.
              </p>

              <button
                type="submit"
                style={{
                  width: "139.8px",
                  height: "38px",
                  borderRadius: "4px 4px 4px 4px",
                  backgroundColor: "#3F8E00",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  border: "none",
                  boxShadow: "0px 0px 10px 2px grey",
                  marginTop: "0px",
                  cursor: "pointer",
                }}
              >
                {" "}
                Know more <img src={arrow} style={{ marginLeft: "5px" }} />{" "}
              </button>
            </div>
          </div>

          <div>
            <img src={work2} />

            <div>
              <h2>Work name here</h2>
              <p style={{ color: "#9C9C9C" }}>
                Labore et dolore magna aliqua. sed do eiusmod <br /> tempor
                incididunt ut labore et dolore magna.
              </p>

              <button
                type="submit"
                style={{
                  width: "139.8px",
                  height: "38px",
                  borderRadius: "4px 4px 4px 4px",
                  backgroundColor: "#3F8E00",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  border: "none",
                  boxShadow: "0px 0px 10px 2px grey",
                  marginTop: "0px",
                  cursor: "pointer",
                }}
              >
                {" "}
                Know more <img src={arrow} style={{ marginLeft: "5px" }} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
        
      </Element>

     

      {/* get in touch */}

      <Element name="get-in-touch" >
      <div style={{ backgroundColor: "#080808", marginTop: "50px" }}>
        <div style={{ margin: "auto", paddingTop: "50px" }}>
          <h1
            style={{ textAlign: "center", color: "#FFFFFF", marginTop: "50px" }}
          >
            Get In Touch
          </h1>
          <p style={{ color: "#9C9C9C", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            display: "flex",
            rowGap: "5px",
            flexDirection: "column",
          }}
        >
          <form
            action="/"
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              rowGap: "15px",
            }}
          >
            <label style={{ color: "white" }}>
              Email <br />
              <input
                style={{
                  width: "350px",
                  height: "40px",
                  borderRadius: "4px 4px 4px 4px ",
                  border: "1px solid ",
                  backgroundColor: "#D8D8D8",
                }}
                type="text"
                name="email"
                placeholder="Enter Your Email"
              />
              <br />
            </label>
            <label style={{ color: "white" }}>
              Number <br />
              <input
                style={{
                  width: "350px",
                  height: "40px",
                  borderRadius: "4px 4px 4px 4px ",
                  border: "1px solid ",
                  backgroundColor: "#D8D8D8",
                }}
                type="phonenumber"
                name="number"
                placeholder="Enter Your Number"
              />
              <br />
            </label>

            <label style={{ color: "white" }}>
              Message <br />
              <textarea
                style={{
                  width: "350px",
                  height: "150px",
                  borderRadius: "4px 4px 4px 4px ",
                  border: "1px solid ",
                  backgroundColor: "#D8D8D8",
                }}
                type="text"
                name="text"
                placeholder="Enter Your Message"
              />
              <br />
            </label>
            <input
              type="submit"
              style={{
                width: "350px",
                height: "50px",
                borderRadius: "4px 4px 4px 4px",
                backgroundColor: "#3F8E00",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                boxShadow: "0px 0px 10px 1px white",
                marginTop: "10px",
                cursor: "pointer",
              }}
            />
            <br />
          </form>
        </div>
      </div>

      </Element>

     
    </div>
      

    </body>
    
  );
};

export default App;
