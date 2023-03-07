import instLogo from "./../../icons/instagram.svg";
import twitterLogo from "./../../icons/twitter.svg";
import facebookLogo from "./../../icons/facebook.svg";
import youtubeLogo from "./../../icons/youtube.svg";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>З'явились питання?</div>
      <div>
        Пишіть нам на пошту{" "}
        <a className={classes.anchor} href="mailto: book_ukr.gmail.com">
          book_ukr.gmail.com
        </a>
      </div>
      <div className={classes["social-networks"]}>
        <a target="_blank" href="https://www.instagram.com/book_ukr/">
          <img src={instLogo} />
        </a>

        <a target="_blank" href="https://twitter.com/">
          <img src={twitterLogo} />
        </a>

        <a target="_blank" href="https://facebook.com/">
          <img src={facebookLogo} />
        </a>

        <a target="_blank" href="https://www.youtube.com/">
          <img src={youtubeLogo} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
