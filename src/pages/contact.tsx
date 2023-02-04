import { NextPage } from 'next/types';
import Layout from '@layouts/Layout';

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <div className="contact-map mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2903230307306!2d105.85067081543156!3d21.021066393415627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8424ba85b7%3A0x8387015666848c0c!2sThe%20Cricket%20Project!5e0!3m2!1sen!2s!4v1673451988009!5m2!1sen!2s"
          width="100%"
          height="500px"
        ></iframe>
      </div>

      <section className="contact-info flex flex-col my-8">
        <h1 className="mb-4 text-center font-bold text-4xl">GET IN TOUCH</h1>
        <form className="flex flex-col w-4/5 md:w-2/4 mx-auto gap-4">
          <div className="form-control">
            <input id="name" type="text" placeholder="Name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <input id="email" type="email" placeholder="Email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              id="message"
              placeholder="Type your message here..."
              className="textarea textarea-bordered"
            />
          </div>
          <button type="button" className="btn uppercase mx-auto mt-3">
            Send email
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default ContactPage;
