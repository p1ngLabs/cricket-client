import { createStyles } from '@mantine/core';
import banner from 'public/images/banner.jpg';

const useStyles = createStyles(() => ({
  banner: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
}));

const Banner = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.banner} style={{ backgroundImage: `url(${banner.src})` }}>
      <div className={classes.overlay}></div>
    </div>
  );
};

export default Banner;
