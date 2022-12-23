import Navbar from './Navbar';
import classes from './Layout.module.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default Layout;
