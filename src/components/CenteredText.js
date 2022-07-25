import { Grid, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        background: theme.palette.primary.ligth,
        color: theme.palette.primary.contrastText,
        padding:'4vw 12vw'
    },
}));


export function CenteredText() {
    const classes = useStyles();
    return (
        
            <Grid className={classes.container} container direction="column"  justifyContent="space-around" alignItems="center" spacing={2}>
                <Grid item xs>
                    <Typography variant="body1" align="center" gutterBottom="true">
                        Un comprador personal puede ayudar con esto. Te aconsejarán sobre la proporción, la textura, el color y la línea, para que sepas exactamente qué buscar a la hora de elegir las prendas que más te gusten.

                    </Typography>
                </Grid>

                <Grid item xs>
                    <Typography variant="body1" align="center" gutterBottom="true">
                        <b>Este es uno de los servicios más cruciales a la hora de contratar a un personal shopper en Barcelona porque aunque hay una tonelada de información online sobre cómo descubrir la forma de tu cuerpo, la verdad es que la mayoría de las personas son una mezcla de más de una forma corporal.</b>
                    </Typography>
                </Grid>

                <Grid item xs>
                    <Typography variant="body1" align="center" gutterBottom="true">
                        Esto puede hacer que sea extremadamente difícil saber qué ponerse. Después de su experiencia personal de compra, no tendrás ninguna duda, y podrás comprar tanto en la tienda como por internet con seguridad.
                    </Typography>
                </Grid>
            </Grid>
       


    )
}