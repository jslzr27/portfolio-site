import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function NoMatch() {
    return (
        <Card>
            <CardContent>
                <Typography>
                <h1>404 Page Not Found</h1>
                <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
                </span>
                 </h1>
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Back To Home</Button>
            </CardActions>
        </Card>
    );
  }
  
  export default NoMatch;