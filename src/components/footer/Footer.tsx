const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="container mx-auto">
      the cricket project &copy; {currentYear}
    </footer>
  );
};

export default Footer;
