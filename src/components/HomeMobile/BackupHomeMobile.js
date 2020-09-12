import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Grid,
  Paper,
  GridList,
  GridListTile,
} from '@material-ui/core';
/*
  import {
    AttachMoneyIcon,
    EmojiEmotionsIcon,
    FitnessCenterIcon,
    EcoIcon,
    PlaceIcon,
    EmojiPeopleIcon,
    EmojiObjectsIcon,
    SpaIcon
  } from '@material-ui/icons';
 */
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import EcoIcon from '@material-ui/icons/Eco';
import PlaceIcon from '@material-ui/icons/Place';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SpaIcon from '@material-ui/icons/Spa';
import styles from '../../themes/homeTheme';
import LogOutButton from '../LogOutButton/LogOutButton';

const iconList = [
  EmojiEmotionsIcon,
  EcoIcon,
  FitnessCenterIcon,
  SpaIcon,
  AttachMoneyIcon,
  PlaceIcon,
  EmojiPeopleIcon,
  EmojiObjectsIcon
]

const realmNames = [
Emotional,
Nutritional,
Physical,
Spiritual,
Financial,
Environmental,
Social,
Intellectual
]

class HomeMobile extends Component {
  goRealm = () => this.props.history.push('/');

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid
            // className={classes.leftSideFlex}
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <h1 className={classes.welcomeMessage} id="welcome">
              Hello{' '}
              <span className={classes.userName}>
                {this.props.state.user.username}
              </span>
              ,
            </h1>
            <h3 className={classes.exploreInvitation}>Explore a Realm.</h3>

            {/* TABLE OF REALMS */}
            <Grid className={classes.GridListRoot}>
              <GridList cols={2} cellHeight={90} className={classes.gridList}>

                {/* FIRST ROW */}
                <GridListTile
                  onClick={this.goEmotional}
                  className={classes.gridListTile}
                >
                  <div className={classes.buttonContainer}>
                    <Paper elevation={3} className={classes.buttonPaper}>
                      <div className={classes.button}>
                        <EmojiEmotionsIcon className={classes.icon} />
                        <br/>
                        <div className={classes.realmName}>Emotional</div>
                      </div>
                    </Paper>
                  </div>
                </GridListTile>
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.buttonContainer}>
                    <Paper elevation={3} className={classes.buttonPaper}>
                      <div className={classes.button}>
                        <EcoIcon className={classes.icon} />
                        <br/>
                        <div className={classes.realmName}>Nutritional</div>
                      </div>
                    </Paper>
                  </div>
                </GridListTile>

                {/* SECOND ROW */}
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.buttonContainer}>
                    <Paper elevation={3} className={classes.buttonPaper}>
                      <div className={classes.button}>
                        <FitnessCenterIcon className={classes.icon} />
                        <br/>
                        <div className={classes.realmName}>Physical</div>
                      </div>
                    </Paper>
                  </div>
                </GridListTile>
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.buttonContainer}>
                    <Paper elevation={3} className={classes.buttonPaper}>
                      <div className={classes.button}>
                        <SpaIcon className={classes.icon} />
                        <br/>
                        <div className={classes.realmName}>Spiritual</div>
                      </div>
                    </Paper>
                  </div>
                </GridListTile>

                {/* THIRD ROW */}
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.buttonContainer}>
                    <Paper elevation={3} className={classes.buttonPaper}>
                      <div className={classes.button}>
                        <AttachMoneyIcon className={classes.icon} />
                        <br/>
                        <div className={classes.realmName}>Financial</div>
                      </div>
                    </Paper>
                  </div>
                </GridListTile>
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.buttonContainer}>
                    <Paper elevation={3} className={classes.buttonPaper}>
                      <div className={classes.button}>
                        <PlaceIcon className={classes.icon} />
                        <br/>
                        <div className={classes.realmName}>Environmental</div>
                      </div>
                    </Paper>
                  </div>
                </GridListTile>

                {/* FOURTH ROW */}
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.buttonContainer}>
                    <Paper elevation={3} className={classes.buttonPaper}>
                      <div className={classes.button}>
                        <EmojiPeopleIcon className={classes.icon} />
                        <br/>
                        <div className={classes.realmName}>Social</div>
                      </div>
                    </Paper>
                  </div>
                </GridListTile>
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.buttonContainer}>
                    <Paper elevation={3} className={classes.buttonPaper}>
                      <div className={classes.button}>
                        <EmojiObjectsIcon className={classes.icon} />
                        <br/>
                        <div className={classes.realmName}>Intellectual</div>
                      </div>
                    </Paper>
                  </div>
                </GridListTile>

              </GridList>
            </Grid>  {/* End of Table of Realms */}

          </Grid>
          <Grid item>
            <LogOutButton/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(HomeMobile));