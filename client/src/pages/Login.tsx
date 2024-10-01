import React, { useState } from "react";
import "../styles/pages/Login.scss";
import { Link } from "react-router-dom";

import logoIcon from "../assets/images/login-page/logo.png";
import fbIcon from "../assets/images/login-page/fb-icon.png";
import ggIcon from "../assets/images/login-page/gg-icon.png";
import wechatIcon from "../assets/images/login-page/wechat-icon.png";
import twitchIcon from "../assets/images/login-page/twitch-icon.png";

const Login: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="login-page">
      {/* main layout */}
      <div className="main-layout">
        {/* login form */}
        <div className="login-form">
          {/* Scroll bar */}
          <div className="scroll-bar">
            {/* logo */}
            <div className="brand-logo">
              <img src={logoIcon} alt="Logo" />
            </div>
            {/* bar */}
            <ul>
              <li
                className={`sign-in-bar ${isSignIn ? "active" : ""}`}
                id="signInBtn"
              >
                <a
                  href="#login"
                  className="login-icon"
                  id="login-ic"
                  onClick={() => setIsSignIn(true)}
                >
                  <div className="icon">
                    <span className="solar--login-3-bold-duotone"></span>
                  </div>
                  <p>Sign In</p>
                </a>
                <div className="line"></div>
              </li>
              <li
                className={`sign-up-bar ${!isSignIn ? "active" : ""}`}
                id="signUpBtn"
              >
                <a
                  href="#regis"
                  className="regis-icon"
                  id="regis-ic"
                  onClick={() => setIsSignIn(false)}
                >
                  <div className="icon">
                    <span className="solar--user-plus-bold-duotone"></span>
                  </div>
                  <p>Sign Up</p>
                </a>
                <div className="line"></div>
              </li>
              <li>
                <Link to="/" className="home-icon" data-scroll="home">
                  <div className="icon">
                    <span className="solar--home-smile-bold-duotone"></span>
                  </div>
                  <p>Home</p>
                </Link>
              </li>
            </ul>
          </div>
          {/* form input login */}
          {isSignIn ? (
            <section className="sign-in" id="login">
              {/* form login action */}
              <form
                action=""
                className="sign-in-form form-input"
                id="login-frm"
                method="post"
              >
                <div className="form-contain">
                  {/* input fields */}
                  <div className="input-fields">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                    <div className="input-box">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <span
                        className="iconify"
                        id="hide-pwd"
                        data-icon="ph:eye-slash-light"
                        data-width="26"
                        data-height="26"
                      ></span>
                      <span
                        className="iconify"
                        id="unhide-pwd"
                        data-icon="ph:eye-light"
                        data-width="26"
                        data-height="26"
                      ></span>
                    </div>
                  </div>
                  {/* line text */}
                  <div className="line-text">
                    <p>or continue with</p>
                  </div>
                  {/* method options */}
                  <div className="signin-options">
                    <a href="/">
                      <img src={fbIcon} alt="Facebook" />
                    </a>
                    <a href="/">
                      <img src={ggIcon} alt="Google" />
                    </a>
                    <a href="/">
                      <img src={wechatIcon} alt="WeChat" />
                    </a>
                    <a href="/">
                      <img src={twitchIcon} alt="Twitch" />
                    </a>
                  </div>
                  {/* Remember Me & Forgot Password */}
                  <div className="rmbMe-forgotPwd">
                    <label className="rmbMe">
                      <input
                        type="checkbox"
                        name="rememberme"
                        id="rememberme"
                      />
                      <span className="checkmark"></span>
                      Remember Me
                    </label>
                    <a href="/" className="forgot-link">
                      Forgot Your Password
                    </a>
                  </div>
                  {/* button sign in */}
                  <input
                    type="submit"
                    name="login"
                    value="sign in"
                    className="signin-btn"
                  />
                  {/* privacy & link sign up */}
                  <div className="link-wrapper">
                    <a href="/" className="privacy">
                      Privacy Policy
                    </a>
                    <span className="sign-up-link">
                      Don&rsquo;t you have an account yet?&nbsp;
                      <a href="/" id="signup-link" onClick={toggleForm}>
                        Sign Up
                      </a>
                    </span>
                  </div>
                </div>
              </form>
              {/* banner */}
              <div className="banner" id="banner-login text-banner">
                <div className="text">
                  <h2>Start Your Journey.</h2>
                  <p>Sign in with a Next In account</p>
                </div>
              </div>
            </section>
          ) : (
            <section className="sign-up" id="regis">
              {/* Method Regis */}
              <div className="regis-options" id="regisOp">
                <div className="method-contain" id="method-contain">
                  <a
                    href="/"
                    className="email-regis regis-link"
                    id="email-signup"
                  >
                    <img
                      src="../assets/images/login-page/nextin-option.png"
                      alt="Next In"
                    />
                    <span>Sign up with Next In</span>
                  </a>
                  <a href="/" className="fb-regis regis-link">
                    <img
                      src="../assets/images/login-page/fb-option.png"
                      alt="Facebook"
                    />
                    <span>Sign up with Facebook</span>
                  </a>
                  <a href="/" className="gg-regis regis-link">
                    <img
                      src="../assets/images/login-page/gg-option.png"
                      alt="Google"
                    />
                    <span>Sign up with Google</span>
                  </a>
                  <a href="/" className="wechat-regis regis-link">
                    <img
                      src="../assets/images/login-page/wechat-option.png"
                      alt="WeChat"
                    />
                    <span>Sign up with WeChat</span>
                  </a>
                  <a href="/" className="twitch-regis regis-link">
                    <img
                      src="../assets/images/login-page/twitch-option.png"
                      alt="Twitch"
                    />
                    <span>Sign up with Twitch</span>
                  </a>
                  <span className="sign-in-link">
                    Already have a Next In account?&nbsp;
                    <a href="/" id="signin-link" onClick={toggleForm}>
                      Sign In
                    </a>
                  </span>
                </div>
              </div>
              {/* next in regis form */}
              <form action="#" className="sign-up-form" id="regis-frm">
                <div className="regis-form-contain" id="regis-contain">
                  {/* input fields */}
                  <div className="input-fields">
                    <div className="fields-name">
                      <input
                        type="text"
                        name="fname"
                        placeholder="First Name"
                        required
                        className="fname"
                      />
                      <input
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                    <div className="input-box">
                      <input
                        type="password"
                        name="pwd"
                        placeholder="Password"
                        required
                      />
                      <span
                        className="iconify"
                        id="hide-pwd"
                        data-icon="ph:eye-slash-light"
                        data-width="26"
                        data-height="26"
                      ></span>
                      <span
                        className="iconify"
                        id="unhide-pwd"
                        data-icon="ph:eye-light"
                        data-width="26"
                        data-height="26"
                      ></span>
                      <span
                        className="iconify"
                        id="in4-pwd"
                        data-icon="mdi-light:information"
                        data-width="26"
                        data-height="26"
                      ></span>
                    </div>
                  </div>
                  {/* terms */}
                  <div className="argeeTerms">
                    <label className="terms">
                      <input
                        type="checkbox"
                        checked
                        name="terms"
                        id="termsofservice"
                      />
                      <span className="checkmark"></span>I have read and agree
                      to the&nbsp;
                      <a href="/" className="terms-link">
                        terms of service
                      </a>
                    </label>
                  </div>
                  {/* regis button */}
                  <input
                    type="submit"
                    name="regisbtn"
                    value="continue"
                    className="regis-btn"
                  />
                  {/* privacy & link sign up */}
                  <div className="link-wrapper">
                    <a href="/" className="privacy">
                      Privacy Policy
                    </a>
                    <span className="sign-up-link">
                      Already have a Next In account?&nbsp;
                      <a href="/" id="signin-link-1" onClick={toggleForm}>
                        Sign In
                      </a>
                    </span>
                  </div>
                </div>
              </form>
              {/* banner */}
              <div className="banner" id="banner-regis text-banner">
                <div className="text">
                  <h2>Create New Account.</h2>
                  <p id="txt-choose-method">Choose your sign up method</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
