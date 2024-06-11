import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="bg-radial-gradient text-gray-300 py-12 p-4">
      <div className="container mx-auto flex flex-wrap justify-between text-center">
        <div className="w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white hover:shadow-md hover:shadow-gray-200 group transition-all duration-300">
            <svg
              className="transition-all duration-300 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                fill="black"
              />
            </svg>
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              className="rounded-md transition-all duration-300 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z"
                fill="#006699"
              />
            </svg>
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              className="rounded-md transition-all duration-300 group-hover:scale-110"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0065 56.1236H21.4893V35.5227L9.37109 26.4341V52.4881C9.37109 54.4997 11.001 56.1236 13.0065 56.1236Z"
                fill="#4285F4"
              />
              <path
                d="M50.5732 56.1236H59.056C61.0676 56.1236 62.6914 54.4937 62.6914 52.4881V26.4341L50.5732 35.5227"
                fill="#34A853"
              />
              <path
                d="M50.5732 19.7693V35.5229L62.6914 26.4343V21.587C62.6914 17.0912 57.5594 14.5282 53.9663 17.2245"
                fill="#FBBC04"
              />
              <path
                d="M21.4893 35.5227V19.769L36.0311 30.6754L50.5729 19.769V35.5227L36.0311 46.429"
                fill="#EA4335"
              />
              <path
                d="M9.37109 21.587V26.4343L21.4893 35.5229V19.7693L18.0962 17.2245C14.4971 14.5282 9.37109 17.0912 9.37109 21.587Z"
                fill="#C5221F"
              />
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              className="octicon octicon-mark-github"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              height="28"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </button>
        </div>

        {/* <div className="w-full lg:w-1/2 xl:w-1/3 mb-8 lg:mb-0">
                    <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
                    <p>We are a team of passionate developers dedicated to creating innovative solutions.</p>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3 mb-8 lg:mb-0">
                    <p>Email: DhirajBhavsar.official@gmail.com</p>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3">
                
                </div> */}
      </div>

      <div className="text-center mt-3">
   
        <p className=" mb-5 text-2xl font-Josefin font-semibold">Thanks for visiting!</p>
        <p className="text-sm underline">@DhirajBhawsar 2024 rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
