import { makeStyles, createStyles, Theme, lighten } from '@material-ui/core/styles';

export const useGalleryRootStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1)
            }
        }
    })
);
