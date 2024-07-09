import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-500 mt-10 md:mt-0">
        About SafePass
      </h1>

      <section className="mb-8">
        <p className="mb-4">
          Welcome to SafePass, a platform dedicated to offe ring innovative
          solutions for password management. Whether you&apos;re an individual,
          a small business owner, <br /> or part of a large organization,
          SafePass provides the tools you need to keep your accounts safe and
          secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h2>
        <p>
          At SafePass, our mission is to empower users by providing a
          user-friendly platform for managing passwords and securing their
          digital identities. We believe in the importance of security and
          privacy, and our goal is to make it easy for everyone to protect their
          accounts.
        </p>
      </section>

      <section className="mb-8 md:mb-5">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">How It Works</h2>
        <div className=" flex flex-col md:flex-row">
          <ol className="list-decimal ml-6 md:w-[50%]">
            <li className="mb-2 ">
              <strong className="text-violet-700">Sign Up:</strong>
              <ul className="list-disc ml-6">
                <li>Create an account on SafePass and set up your profile.</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong className="text-violet-700">Add Your Credentials:</strong>
              <ul className="list-disc ml-6">
                <li>Fill in the website URL, login username, and password.</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong className="text-violet-700">Access Your Accounts:</strong>
              <ul className="list-disc ml-6">
                <li>
                  Access your accounts with one click from any part of the
                  world.
                </li>
              </ul>
            </li>
          </ol>
          <div
            className="w-full md:w-auto h-[210px] border-4 border-blue-900"
            style={{
              borderImage:
                "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
              borderImageSlice: 1,
            }}
          >
            <video
              autoPlay
              muted
              loop
              controls
              className="w-full h-[200px] p-1 "
            >
              <source src="/Video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Why SafePass?</h2>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            <strong className="text-violet-700">Secure and Reliable:</strong>
            We prioritize the security of your passwords and personal
            information. Our platform uses industry-standard encryption to
            protect your data.
          </li>
          <li className="mb-2">
            <strong className="text-violet-700">
              User-Friendly Interface:
            </strong>
            Our intuitive design makes it easy for users to navigate the
            platform and manage their passwords.
          </li>
          <li className="mb-2">
            <strong className="text-violet-700">Community Focused:</strong>
            SafePass is built with a focus on security and privacy. We strive to
            build a community that values and upholds these principles.
          </li>
          <li className="mb-2">
            <strong className="text-violet-700">Transparent Policies:</strong>
            We believe in transparency. Our policies are straightforward, with
            no hidden charges or conditions.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Join Our Community
        </h2>
        <p>
          SafePass is more than just a password management platform; it&apos;s a
          community that values security and privacy. Join us today and be a
          part of a movement that prioritizes the protection of digital
          identities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Contact Us</h2>
        <p>
          Have questions or need assistance? Our support team is here to help!
          Contact us at
          <a
            href="mailto:support@SafePass.com"
            className="text-blue-600 underline"
          >
            support@SafePass.com
          </a>
          or visit our
          <a href="#" className="text-blue-600 underline">
            Help Center
          </a>
          for more information.
        </p>
        <p>
          Thank you for choosing SafePass. Together, we can ensure your digital
          safety and security!
        </p>
      </section>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - SafePass",
};
