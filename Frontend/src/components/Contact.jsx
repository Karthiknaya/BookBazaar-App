import React from "react";
import banner from "../../public/contact.jpg";
function Contact() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-4">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
               Welcome,{" "}
              <span className="text-pink-500">Get in Touch with Us</span>
            </h1>
            <p className="text-sm md:text-xl">
            We’d love to hear from you! Whether you have a question, need help, or just want to give us feedback, reach out anytime.
            </p>
            <h5 className="text-2x md:text-4xl font-bold text-pink-500">Need Help?</h5>
            <p className="text-sm md:text-xl">Our customer support team is here to assist you with any questions or issues about our products or services.</p>
            <h1 className="text-sm md:text-xl font-bold text-pink-500">Send Us an Email</h1>
            <p className="text-sm md:text-xl">Drop us an email at <span className="text-pink-500">Support@BookBazaar.com</span> for general questions, support, or feedback.</p>
            <h1 className="text-sm md:text-xl font-bold text-pink-500">Give Us a Call</h1>
            <p className="text-sm md:text-xl">You can call us at <span className="text-pink-500">+91 xxxxxxxxxx</span> </p>
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