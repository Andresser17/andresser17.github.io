import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";
// Components
import { Button, Input, Textarea } from "@andresser17/aleron-ui";
import ModalContainer from "modals/ModalContainer";
// Icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
// Validations
import validate from "helpers/validations";
// Envs
import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  WHATSAPP_PROFILE,
  EMAIL,
  RESUME,
} from "app.config";
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

function Form() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm();
  const onSubmit = async (data) => {
    // send message
    const response = await send(SERVICE_ID, TEMPLATE_ID, data, USER_ID);

    if (response.status === 200) {
      toast.success("Email sent successfully");
      return;
    }

    toast.error("Error");
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-[26rem]">
      <div className="flex flex-wrap justify-between mb-4">
        <span className="block w-full">Details</span>
        <div className="w-full sm:w-[48%]">
          <Input
            name="name"
            placeholder="Name"
            {...{ control }}
            rules={{
              required: true,
              pattern: {
                value: validate.onlyLetters,
                message: "Only letters are accepted",
              },
              minLength: {
                value: 3,
                message: "A minimum of 3 characters is required",
              },
              maxLength: {
                value: 20,
                message: "A maximum of 20 characters is permitted",
              },
            }}
          />
        </div>
        <div className="w-full sm:w-[48%]">
          <Input
            name="lastName"
            placeholder="Last Name"
            {...{ control }}
            rules={{
              required: true,
              pattern: {
                value: validate.onlyLetters,
                message: "Only letters are accepted",
              },
              minLength: {
                value: 3,
                message: "A minimum of 3 characters is required",
              },
              maxLength: {
                value: 20,
                message: "A maximum of 20 characters is permitted",
              },
            }}
          />
        </div>
        <div className="w-full">
          <Input
            name="email"
            placeholder="Email Address"
            {...{ control }}
            rules={{
              required: true,
              pattern: {
                value: validate.email,
                message: "A valid email is required",
              },
            }}
          />
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
            rules={{
              pattern: {
                value: validate.onlyLetters,
                message: "Only letters are accepted",
              },
              minLength: {
                value: 3,
                message: "A minimum of 3 characters is required",
              },
              maxLength: {
                value: 20,
                message: "A maximum of 20 characters is permitted",
              },
            }}
          />
        </div>
        <div className="w-full sm:w-[48%]">
          <Input
            name="companyWebsite"
            placeholder="Company Website"
            description="Not Required"
            {...{ control }}
            rules={{
              pattern: {
                value: validate.url,
                message: "A valid url is required",
              },
            }}
          />
        </div>
      </div>
      <div className="mb-4">
        <span className="block">Message</span>
        <Textarea
          name="message"
          placeholder="Send me a message..."
          {...{ control }}
          rules={{
            required: true,
            minLength: {
              value: 20,
              message: "A minimum of 20 characters is required",
            },
            maxLength: {
              value: 500,
              message: "A maximum of 500 characters is permitted",
            },
          }}
        />
      </div>
      <Button className="w-full" text="Submit" icon bold>
        <RiSendPlaneFill className="w-4 h-4 mb-[2px] mr-1" />
      </Button>
    </form>
  );
}

function WhatsappQR() {
  const [show, setShow] = useState(false);
  const modal = (
    <ModalContainer palette="dark" show={show} onShow={setShow}>
      <div className="flex flex-col items-center p-12">
        <QRCode value={WHATSAPP_PROFILE} />
        <span className="mt-4">Copy URL:</span>
        <a
          href={WHATSAPP_PROFILE}
          className="block mt-1 font-semibold cursor-pointer hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {WHATSAPP_PROFILE}
        </a>
      </div>
    </ModalContainer>
  );

  return (
    <>
      <AiOutlineWhatsApp
        onClick={() => setShow(true)}
        className="w-8 h-8 mr-4 cursor-pointer"
      />
      {modal}
    </>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-8 px-6 lg:flex lg:justify-between lg:px-16"
    >
      <div>
        <h2 className="text-4xl font-semibold block w-72 sm:text-5xl sm:w-[28rem] xl:text-6xl xl:w-[38rem]">
          Let's work together, send me a message.
        </h2>
        <span className="block text-xl leading-2 mt-4 w-72">
          Download my{" "}
          {/* Reach out filling the form bellow or send me an{" "} */}
          <a
            className="underline underline-offset-2 font-semibold text-bg primary"
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME!
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
          <WhatsappQR />
          <a
            className="mr-4"
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail className="w-8 h-8" />
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
