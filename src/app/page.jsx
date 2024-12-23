"use client";

import React from "react";
import PropTypes from "prop-types";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Dock, DockIcon } from "@/components/ui/dock";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { FadeText } from "@/components/ui/fade-text";

export default function HomePage() {
  return (
    <div>
      <div className="relative overflow-hidden ">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={2}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full skew-y-12"
          )}
        />
        <div className="flex flex-col mt-10 md:flex-row justify-center">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left px-8">
            <div className="flex-1 max-w-lg">
              <div className="text-4xl font-bold font-cera ">
                <FadeText
                  text={
                    <>
                      Hey there! I'm{" "}
                      <span className="italic text-yellow-400">
                        Azka Bariqlana
                      </span>
                    </>
                  }
                  direction="up"
                  framerProps={{
                    show: {
                      transition: {
                        duration: 0.8,
                      },
                    },
                  }}
                />
              </div>

              <FadeText
                text={
                  <p className="text-lg mb-6">
                    I'm a web developer focused on building modern,
                    high-performance websites. My goal is to blend creativity
                    with technical skills to create user-friendly and visually
                    appealing web applications.
                  </p>
                }
                direction="right"
                framerProps={{
                  show: {
                    transition: {
                      delay: 0.5,
                      duration: 0.8,
                    },
                  },
                }}
              />
            </div>

            <div className="flex-1 flex justify-center">
              <FadeText
                text={
                  <img
                    src="/images/copy.jpg"
                    alt="Azka Bariqlana"
                    className="w-48 h-48 rounded-full shadow-lg object-cover"
                  />
                }
                framerProps={{
                  show: {
                    transition: {
                      delay: 1,
                      duration: 0.8,
                    },
                  },
                }}
                direction="left"
              />
            </div>
          </div>
        </div>

        {/* Connect with me Section */}
        <FadeText
          text={
            <div className="flex flex-col items-center mt-10 space-y-6 ">
              <h2 className="text-md font-semibold">Connect with me:</h2>
              <Dock iconMagnification={60} iconDistance={100}>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3 rounded-full hover:scale-110 transition-transform duration-200">
                  <Link
                    href="https://github.com/azkbrqlna"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.gitHub className="w-8 h-8 text-black dark:text-white" />
                  </Link>
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3 rounded-full hover:scale-110 transition-transform duration-200">
                  <Link
                    href="https://www.linkedin.com/in/azka-bariqlana-06a3482a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.linkedIn className="w-8 h-8 text-blue-700 dark:text-blue-400" />
                  </Link>
                </DockIcon>
              </Dock>
            </div>
          }
          direction="down"
          framerProps={{
            show: {
              transition: {
                delay: 1.5,
                duration: 0.8,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

const Icons = {
  gitHub: (props) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  linkedIn: (props) => (
    <svg viewBox="0 0 448 448" {...props}>
      <path
        fill="currentColor"
        d="M100.3 448H7.4V149.3h92.9V448zM53.9 109.3C24.2 109.3 0 85.1 0 55.5 0 25.8 24.2 0 53.9 0c29.7 0 53.9 24.2 53.9 55.5 0 29.6-24.2 53.8-53.9 53.8zm394.1 338.7h-92.9V281.5c0-39.8-16.5-66.9-50.3-66.9-25.5 0-40.7 17.2-47.4 33.8-2.4 5.9-3 13.7-3 21.5v118.5h-92.9V149.3h92.9v43.8h1.3c12.9-24.4 44.1-50.5 85.5-50.5 62.4 0 112.2 41.4 112.2 130.8v173.5z"
      ></path>
    </svg>
  ),

  instagram: (props) => (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        fill="currentColor"
        d="M224.1 141c-63.6 0-115.6 51.9-115.6 115.6 0 63.7 51.9 115.6 115.6 115.6s115.6-51.9 115.6-115.6c0-63.7-51.9-115.6-115.6-115.6zM224.1 300c-41.7 0-75.4-33.7-75.4-75.4 0-41.7 33.7-75.4 75.4-75.4 41.7 0 75.4 33.7 75.4 75.4 0 41.7-33.7 75.4-75.4 75.4zm101.1-148.1c0 8.3-6.7 14.9-14.9 14.9h-43.5c-8.2 0-14.9-6.7-14.9-14.9V56.2c0-8.3 6.7-14.9 14.9-14.9h43.5c8.3 0 14.9 6.7 14.9 14.9v95.7zM224.1 0c-62.5 0-113.5 50.9-113.5 113.5v284.1c0 62.5 50.9 113.5 113.5 113.5h123.3c62.5 0 113.5-50.9 113.5-113.5V113.5C337.6 50.9 286.6 0 224.1 0z"
      ></path>
    </svg>
  ),
};

Icons.gitHub.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
Icons.linkedIn.propTypes = Icons.gitHub.propTypes;
