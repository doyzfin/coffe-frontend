import { useState } from "react";
import Layout from "../../../components/Layout";
import styles from "../../../styles/Signup.module.css";
import newStyles from "../../../styles/NewPassword.module.css";
import Footer from "../../../components/module/Footer";

export default function forgetpassword() {
  const [form, setForm] = useState({
    userPassword: "",
    userPasswordConfirm: "",
  });

  const changeText = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleForgetPassword = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <>
      <Layout title="Forget Password">
        <div className={`container-fluid`}>
          <div
            className={`row position-relative pb-5 ${newStyles.headerForgetPassword}`}
          >
            <div className={newStyles.headerContent}>
              <form className={`mt-5`}>
                <input
                  className={`form-control ${styles.inputHeight} ${newStyles.inputWidth} mx-1 mx-auto`}
                  placeholder="Enter your email addres to get link"
                  name="userPassword"
                  onChange={(event) => changeText(event)}
                ></input>
                <input
                  className={`form-control ${styles.inputHeight} ${newStyles.inputWidth} mt-3 mx-auto`}
                  placeholder="Enter your email addres to get link"
                  name="userPasswordConfirm"
                  onChange={(event) => changeText(event)}
                ></input>
                <div className="mt-3">
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className={`${styles.yellowExpressButtonLarger}`}
                      onClick={handleForgetPassword}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
              <div className={newStyles.lowerHeaderContent}>
                <span className="text-center d-block fw-bold">
                  Click here if you didn't receive any link
                </span>
                <span className="text-center d-block fw-bold">
                  in 2 minutes
                </span>
                <div className="d-flex justify-content-center my-2">
                  <button className={newStyles.resendLinkBrown}>
                    Resend Link
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  );
}
