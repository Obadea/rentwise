import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import blogimage from "../../assets/frame.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import blogphoto from "../../assets/blogphoto.png";
import ForumIcon from "@mui/icons-material/Forum";
import Pagination from "@mui/material/Pagination";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Footer from "../../components/Footer";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Calculate current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  //   if (loading) {
  //     return <h1>Loading....</h1>;
  //   }
  return (
    <div className="bg-textcolor">
      <Header newclassName="sticky" className="bg-textcolor" />
      <div className="px-20 ">
        <div className={` flex flex-col lg:w-full`}>
          <img src={blogimage} alt="" className="w-full h-[400px]" />
          <div className="p-2 flex flex-col lg:px-10 mb-9 gap-3 border-b-2">
            <div className="flex gap-3 "></div>
            <h4 className="font-bold text-3xl text-customNameBlack">
              Skills That You Can Learn In The Real Estate Market{" "}
            </h4>
            <p className="font-normal text-lg text-customStreetcolor ">
              Whether you are a real estate agent looking to build a website for
              your company or a web developer seeking a perfect WordPress theme
              for your next project, you are certain to appreciate the numerous
              features and benefits that our theme provides Whether you are a
              real estate agent looking to build a website for your company or a
              web developer seeking a perfect WordPress theme for your next
              project, you are certain to appreciate the numerous features and
              benefits that our theme provides
            </p>
          </div>
          {/* add animation author */}
          <div className=" font-normal   gap-6 text-lg text-customStreetcolor flex items-center">
            <div className="flex gap-2 lg:px-10 items-center">
              <img src={blogphoto} alt="" />
              <p>by Mike Moore</p>
            </div>
            <div className="flex gap-2 items-center">
              <CalendarMonthIcon
                sx={{ fontSize: "16px" }}
                className="text-customBlackShade"
              />
              <h5 className="font-normal text-base text-customNameBlack">
                {" "}
                March 9, 2024
              </h5>
            </div>
            <div className="flex gap-2 items-center">
              <LocalOfferIcon
                sx={{ fontSize: "16px" }}
                className="text-customBlackShade"
              />
              <p className="font-normal text-base text-customNameBlack">
                Business
              </p>
            </div>{" "}
            <div className="flex gap-2 items-center">
              <ForumIcon className="text-customBlackShade" />
              12
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 flex justify-center">
        <Pagination
          count={10}
          count={Math.ceil(posts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
