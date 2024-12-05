import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-neutral text-white p-10">
        <aside>
          <h4 className="font-medium text-2xl">CONTACT US</h4>
          <p>
            123 ABS Street, Uni 21, Bangladesh
            <br />
            +88 123456789
            <br />
            Mon - Fri: 08:00 - 22:00
            <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </aside>
        <aside>
          <h4 className="font-medium text-2xl">Follow US</h4>
          <p>Join us on social media</p>
          <div className="flex gap-4 ">
            <FaFacebookF className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaTwitter className="text-xl" />
          </div>
        </aside>
      </footer>
      <footer className="footer footer-center bg-black text-white p-4">
        <aside>
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
