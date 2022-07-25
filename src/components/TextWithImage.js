import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import logo from '../logo.svg';

const useStyles = makeStyles((theme) => ({
        container:{
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        // padding:'4vw 12vw'
    },
    img: {
        width: '100%',
        height: 'auto'
    },
    title: {
        color: theme.palette.secondary.main,
    },
    subTitle: {
        color: theme.palette.secondary.light,
    }
}));

const Description = (props) => {
    return <Grid item xs><Typography variant="body1">{props.description}</Typography></Grid> 
}

const TextToTheRight = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.container} container direction="row" justifyContent="space-around" alignItems="center" spacing={3}>
            <Grid item xs={3}>
                <img   
                className={props.classes.img}             
                src={props.content.img}
                alt="This is a test" />
            </Grid>
            <Grid item xs={3}>
                <Grid className={classes.container} container direction="column" justifyContent="space-around" alignItems="center" spacing={3}>
                    <Grid item xs>
                        <Typography className={props.classes.title} variant="h6">{props.content.title}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography className={props.classes.subTitle} variant="body1">
                        <b>{props.content.subTitle}</b>
                        </Typography>
                    </Grid>
                    {props.content.descriptions.map(description => (
                         <Description description={description} />
                    ))}

                </Grid>
            </Grid>
        </Grid>
    );
}

const TextToTheLeft = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.container} container direction="row" justifyContent="space-around" alignItems="center" spacing={3}>
             <Grid item xs={3}>
                <Grid className={classes.container} container direction="column" justifyContent="space-around" alignItems="center" spacing={3}>
                    <Grid item xs>
                        <Typography className={props.classes.title} variant="h6">{props.content.title}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography className={props.classes.subTitle} variant="body1">
                        <b>{props.content.subTitle}</b>
                        </Typography>
                    </Grid>
                    {props.content.descriptions.map(description => (
                         <Description description={description} />
                    ))}

                </Grid>
            </Grid>
            <Grid item xs={3}>
                <img
                className={props.classes.img}  
                src={props.content.img}
                alt="This is a test" />
            </Grid>
        </Grid>
    );
}


export function TextWithImage(props) {  
    const classes = useStyles();  
    return (
        <div className={classes.container}>
        {props.textToTheRight ? 
        (<TextToTheRight classes={classes} content={props.content}/> ):
        ( <TextToTheLeft classes={classes} content={props.content}/>)}
        </div>
        )
}