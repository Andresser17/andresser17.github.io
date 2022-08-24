import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
// Components
import { Button, Input, Textarea } from "@andresser17/aleron-ui";
// Icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
// Envs
import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  WHATSAPP_PROFILE,
  EMAIL,
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID,
} from "app.config";

function Form() {
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log("hello world");
    // send message
    // await send(SERVICE_ID, TEMPLATE_ID, data, USER_ID);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-[24rem]">
      <div className="flex flex-wrap justify-between mb-4">
        <span className="block w-full">Details</span>
        <div className="w-full sm:w-[48%]">
          <Input name="name" placeholder="Name" {...{ control }} />
        </div>
        <div className="w-full sm:w-[48%]">
          <Input name="lastName" placeholder="Last Name" {...{ control }} />
        </div>
        <div className="w-full">
          <Input name="email" placeholder="Email Address" {...{ control }} />
        </div>
      </div>
      <div className="flex flex-wrap justify-between mb-4">
        <span className="block w-full">Company Details</span>
        <div className="w-full sm:w-[48%]">
          <Input
            name="companyName"
            description="Not Required"
            placeholder="Company Name"
            {...{ control }}
          />
        </div>
        <div className="w-full sm:w-[48%]">
          <Input
            name="companyWebsite"
            placeholder="Company Website"
            description="Not Required"
            {...{ control }}
          />
        </div>
      </div>
      <div className="mb-4">
        <span className="block">Message</span>
        <Textarea
          name="message"
          placeholder="Send me a message..."
          {...{ control }}
        />
      </div>
      <Button className="w-full" text="Submit" icon bold>
        <RiSendPlaneFill className="w-4 h-4 mb-[2px] mr-1" />
      </Button>
    </form>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-8 px-6 lg:flex lg:justify-between lg:px-16"
    >
      <div>
        <h2 className="text-4xl font-semibold block w-72 sm:font-normal sm:text-6xl sm:w-[28rem]">
          Let's talk about your project
        </h2>
        <span className="block mt-4 w-72">
          Reach out filling the form bellow or send me an{" "}
          <a
            className="underline underline-offset-2 font-semibold text-bg primary"
            href={`mailto:${EMAIL}`}
          >
            EMAIL!
          </a>
        </span>
        {/* social media */}
        <div className="flex mt-4">
          <a
            className="mr-4"
            href={LINKEDIN_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="w-8 h-8" />
          </a>
          <a
            className="mr-4"
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="w-8 h-8" />
          </a>
          <a
            className="mr-4"
            href={WHATSAPP_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineWhatsApp className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <Form />
      </div>
    </section>
  );
}

export default Contact;
