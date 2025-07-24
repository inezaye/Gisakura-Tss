import './Foot.css';

const Foot = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} GS Gisakura. All rights reserved.</p>
    </footer>
  );
};
export default Foot;