import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div>
      <div>
        <div>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent nunc.
            Sed aliquam mi at urna. Condimentum mi lorem aliquam mattis.
            Consequat est phasellus velit nisl justo dui. Faucibus dictum
            habitasse sed vel at nisl non. Nisi placerat purus sed varius
            euismod. Risus etiam purus donec neque. Non id mi maecenas quam
            convallis ut varius feugiat iaculis. Quis porttitor urna malesuada
            mattis in quam. Quictum habitasse sed vel at nisl non. Nisi placerat
            purus sed varius euismod.{" "}
          </p>
        </div>
        <div>
          <a href="">Blog</a>
          <a href="">Faqs</a>
          <a href="">Careers</a>
          <a href="">Our Team</a>
          <a href="">Partners</a>
          <a href="">Events</a>
          <a href="">Blog</a>
          <a href="">Blog</a>
        </div>
      </div>
      <div>
        <h2>
          rent <span className="text-yellow-500">w</span>ise
          <span className="text-yellow-500">.</span>
        </h2>
        <div>{/* social icons */}</div>
      </div>
    </div>
  );
}

export default Footer;
