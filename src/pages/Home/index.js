import React from "react";
import css from "./Home.module.css";
import MobileHeader from "../../components/MobileHeader";
import "../../index.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div className={css.mainContainer}>
      <MobileHeader />
      <div className="page-wrap">
      <div className={css.logoContainer}>
        <svg
          version="1.1"
          viewBox="0 0 22.822728 6.4281295"
          className={css.logo}
        >
          <g transform="translate(-87.618398,-27.690699)" id="layer1">
            <path
              id="path3723"
              d="m 96.529085,33.99664 c -0.738804,-0.263575 -1.238849,-0.787871 -1.463563,-1.534539 -0.363353,-1.207329 0.155133,-2.504574 1.19672,-2.994178 0.982896,-0.462015 2.050912,-0.289153 2.791952,0.451886 0.628677,0.628678 0.716136,0.951613 0.716136,2.644283 0,1.276664 -0.01215,1.38544 -0.163768,1.466585 -0.247332,0.132368 -2.686664,0.105389 -3.077477,-0.03404 z m 1.302444,-0.737934 c 0.458845,-0.155632 0.725559,-0.383936 0.921582,-0.788865 0.385902,-0.797168 0.160096,-1.772583 -0.51355,-2.218381 -1.086285,-0.718869 -2.448565,0.03008 -2.448565,1.346158 0,0.597508 0.140295,0.95096 0.519071,1.307718 0.426233,0.401456 0.992163,0.532898 1.521462,0.35337 z m 9.601131,0.76254 c -0.5594,-0.130396 -0.98769,-0.481474 -1.26544,-1.037305 -0.24126,-0.482807 -0.25063,-0.547075 -0.28558,-1.957999 -0.0346,-1.398943 -0.0288,-1.466182 0.14362,-1.638546 0.22447,-0.224479 0.38621,-0.22727 0.60307,-0.01041 0.15593,0.155936 0.16933,0.282222 0.16933,1.596146 0,1.340092 0.0116,1.444019 0.19079,1.709922 0.54452,0.808009 1.79858,0.836175 2.3827,0.05351 0.16346,-0.219022 0.18036,-0.368038 0.20463,-1.803388 0.0263,-1.557366 0.0274,-1.565067 0.22936,-1.657093 0.16036,-0.07307 0.24804,-0.06289 0.41805,0.04851 l 0.21514,0.140962 v 2.19458 c 0,2.684103 0.13784,2.462253 -1.52167,2.449116 -0.62993,-0.005 -1.29773,-0.04459 -1.484,-0.08801 z m -18.393269,-0.09342 c -0.179087,-0.226519 -1.472866,-4.295594 -1.419381,-4.464109 0.07781,-0.24517 0.507934,-0.232872 0.668383,0.01911 0.06671,0.104775 0.318927,0.81915 0.560472,1.5875 0.241544,0.76835 0.465894,1.425502 0.498555,1.460337 0.03266,0.03484 0.262048,-0.631915 0.509749,-1.481667 0.247702,-0.849752 0.48866,-1.592628 0.535464,-1.650837 0.104047,-0.129401 0.505061,-0.139268 0.628856,-0.01547 0.0497,0.0497 0.275095,0.809821 0.500882,1.689163 0.225787,0.879342 0.427615,1.58171 0.448507,1.560818 0.02089,-0.02089 0.261391,-0.730783 0.534444,-1.577537 0.273053,-0.846754 0.538148,-1.589784 0.589101,-1.651178 0.148831,-0.179331 0.559513,-0.139928 0.622893,0.05976 0.05348,0.168515 -1.240294,4.23759 -1.419382,4.46411 -0.111364,0.140859 -0.445325,0.134684 -0.590935,-0.01093 -0.06422,-0.06422 -0.301404,-0.816693 -0.527081,-1.672167 -0.225676,-0.855474 -0.429436,-1.589938 -0.452798,-1.632143 -0.02336,-0.0422 -0.259545,0.675984 -0.524849,1.595974 -0.265304,0.919991 -0.535599,1.706413 -0.600656,1.747606 -0.17188,0.108831 -0.465474,0.09403 -0.562224,-0.02834 z m 13.948319,0.01072 c -0.29811,-0.118873 -0.58224,-0.402649 -0.77029,-0.769343 -0.14761,-0.287833 -0.16109,-0.523226 -0.16109,-2.812188 0,-2.383106 0.007,-2.502094 0.16377,-2.585706 0.23265,-0.124512 0.32149,-0.110381 0.51356,0.08169 0.14262,0.142621 0.16934,0.282222 0.16934,0.88496 v 0.715626 l 0.52916,0.02521 c 0.47925,0.02283 0.53178,0.04362 0.55683,0.220367 0.0452,0.318873 -0.12825,0.43984 -0.63069,0.43984 h -0.4553 v 1.316182 c 0,1.284539 0.005,1.321178 0.20781,1.524 0.1425,0.142493 0.30218,0.207818 0.508,0.207818 0.1873,0 0.36387,0.06368 0.46952,0.169334 0.20384,0.203835 0.20715,0.247001 0.0375,0.48916 -0.10556,0.150711 -0.21091,0.187104 -0.52917,0.182806 -0.21855,-0.003 -0.49259,-0.04334 -0.60899,-0.08975 z"
              style={{ strokeWidth: "0.08466666" }}
            />
          </g>
        </svg>
        <p className={css.slogan}>you can make the difference.</p>
        <div className={css.buttonContainer}>
          <Link className={css.link} to="/login">
            <Button buttonName="Sign In" />
          </Link>
          <Link className={css.link} to="/register">
            <Button buttonName="Register" />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
