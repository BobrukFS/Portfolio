import {
  ArrowLongRightIcon,
  ClipboardDocumentListIcon,
  EnvelopeIcon,
  ShareIcon,
} from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

interface ButtonProps {
  primaryColor: string;
  secondaryColor: string;
  borderColor: string;
  href: string;
  text?: string;
  icon?: React.ReactNode;
  radius?: boolean;
  animation?: boolean;
}

export const Button = ({
  primaryColor,
  secondaryColor,
  borderColor,
  href,
  text,
  icon,
  radius,
  animation,
}: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const bgTailwindPrimary = `bg-${primaryColor}`;
  const bgTailwindSecondary = `bg-${secondaryColor}`;
  const textTailwindPrimary = `text-${primaryColor}`;
  const textTailwindSecondary = `text-${secondaryColor}`;
  const borderTailwind = `border border-${borderColor}`;

  const iconElement =
    icon === "arrow" ? (
      <ArrowLongRightIcon
        className={clsx(
          "rounded-full p-1 w-6 h-6 transition-all duration-500",
          {
            [`rotate-90 ${bgTailwindPrimary} ${textTailwindSecondary}`]:
              isHover,
            [`${bgTailwindSecondary} ${textTailwindPrimary}`]: !isHover,
          }
        )}
      ></ArrowLongRightIcon>
    ) : icon === "cv" ? (
      <ClipboardDocumentListIcon
        className={clsx(
          "rounded-full p-1 w-6 h-6 transition-all duration-500",
          {
            [`${bgTailwindPrimary} ${textTailwindSecondary}`]: isHover,
            [`${bgTailwindSecondary} ${textTailwindPrimary}`]: !isHover,
          }
        )}
      ></ClipboardDocumentListIcon>
    ) : icon === "message" ? (
      <EnvelopeIcon
        className={`${bgTailwindSecondary} ${textTailwindPrimary} rounded-full p-1 w-6 h-6`}
      />
    ) : icon === "share" ? (
      <ShareIcon
        className={`${bgTailwindPrimary} ${textTailwindSecondary} rounded-full w-6 h-8`}
      ></ShareIcon>
    ) : (
      icon
    );
  const radiusTailwind = radius ? "rounded-full" : "rounded-lg";

  return (
    <Link
      href={href}
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
      className={clsx(
        `flex gap-x-2 items-center justify-start px-3 py-2 w-auto ${radiusTailwind} transition-all duration-500`,
        {
          [`${
            animation ? bgTailwindSecondary : bgTailwindPrimary
          } ${borderTailwind} px-6`]: isHover,
          [`${bgTailwindPrimary} ${borderTailwind}`]: !isHover,
        }
      )}
    >
      {iconElement}
      {text && (
        <p
          className={clsx("text-md transition-all duration-500", {
            [`${
              animation
                ? `${bgTailwindSecondary} ${textTailwindPrimary}`
                : ` ${bgTailwindPrimary} ${textTailwindSecondary}`
            }`]: isHover,
            [`${bgTailwindPrimary} ${textTailwindSecondary}`]: !isHover,
          })}
        >
          {text}
        </p>
      )}
    </Link>
  );
};
