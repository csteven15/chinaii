import React, { Fragment } from 'react';
import {
  Grid, CssBaseline, ExpansionPanel,
  ExpansionPanelDetails, ExpansionPanelSummary,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';
import Item from './Item';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    whiteSpace: 'nowrap',
    fontWeight: 600,
  },
  secondaryHeading: {
    justifyContent: 'flexStart',
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
    fontWeight: 300,
  },
}));


function Category(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(!expanded);
  };

  const { name, items, description } = props.data;
  const itemList = [];

  for (let i in items) {
    itemList.push(
      <Grid key={i} item xs={6} sm={4} md={3}>
        <Item data={items[i]} />
      </Grid>
    );
  }
  return (
    <Fragment>
      <CssBaseline/>
      <ExpansionPanel expanded={expanded} onChange={handleChange(expanded)}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />} style={{ textAlign: 'left' }}>
          <table style={{ textAlign: 'left' }}>
            <tbody>
              <tr>
                <td className={classes.heading}>{name}</td>
              </tr>
              { description ? <tr><td className={classes.secondaryHeading}>{description}</td></tr> : null }
            </tbody>
          </table>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container style={{ marginTop: '-30px' }}>
            { itemList }
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  );
}
export default Category;
