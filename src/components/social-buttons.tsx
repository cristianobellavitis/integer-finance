"use client";

import { FacebookShareButton, FacebookIcon } from "next-share";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { LinkedinShareButton, LinkedinIcon } from "next-share";

export const FacebookButton = ({
  url,
  quote,
}: {
  url: string;
  quote: string;
}) => {
  return (
    <FacebookShareButton url={url} quote={quote}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  );
};

export const TwitterButton = ({
  url,
  title,
}: {
  url: string;
  title: string;
}) => {
  return (
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  );
};

export const LinkedinButton = ({ url }: { url: string }) => {
  return (
    <LinkedinShareButton url={url}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
  );
};
