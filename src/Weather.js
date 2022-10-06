import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    main : {
        overflow: 'auto',
        padding: 5,
    },
    text__left: {
        float: 'left',
    },
    text__right: {
        float: 'right',
    },
    span: {
        fontWeight: 'bold',
    }

  }));


  const HomePageHeader = () => {
    const classes = useStyles();
    return (
      <header className="header2">
        <h2>New York City,NY,United States</h2>
      <div className={classes.main}>
      <div className={classes.text__left}  >
          <Typography variant="h3" gutterBottom >
              21°C
          </Typography>
          <Typography variant="h5" gutterBottom >
              Clear
          </Typography>
          <Typography variant="h6" gutterBottom >
             Day 30°C  Night 20°C
          </Typography>
          </div>
      </div>
      </header>
      
    );
  };

function Weather({weather}) {
    return (
        <CardContent>
            <HomePageHeader/>
            
            </CardContent>    

            
    );
};

export default Weather;