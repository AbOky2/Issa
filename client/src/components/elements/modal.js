import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

export default function ResponsiveDialog({ children, openModal, onClose, onClick, ...props }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid item container xs={12}>
            <Dialog fullScreen={fullScreen} open={openModal} onClose={onClose} aria-labelledby="responsive-dialog-title" disableBackdropClick
                {...props}
            >
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary" autoFocus>Annuler</Button>
                    <Button autoFocus onClick={onClick} color="primary">Confirmer</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}