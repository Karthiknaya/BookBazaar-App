import React from "react";
import banner from "../../public/about.png";
function Contact() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-1">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold text-pink-500">About Us</h1>
            <p className="text-sm md:text-xl">
            Welcome to BookBazaar, your go-to app for all things books! We are passionate about connecting book lovers with their next great read. Whether you're into fiction, non-fiction, mystery, or romance, we have something for everyone.
            </p>
            <p className="text-sm md:text-xl">Our mission is to make finding and buying books easy and enjoyable. With our user-friendly interface, you can browse through a wide selection of titles, read reviews, and get personalized recommendations.</p>
            <p className="text-sm md:text-xl">At BookBazaar, we believe in the power of stories to inspire, educate, and entertain. We are committed to providing a platform where readers can discover new authors and share their favorite books with a community of fellow book enthusiasts. </p>
            <h5 className="text-2x md:text-4x font-bold text-pink-500">Thank you for choosing BookBazaar. Happy reading!</h5>
          </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[460px] md:h-[460px] md:ml-12 rounded-lg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Contact;