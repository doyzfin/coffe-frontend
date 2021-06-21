import styles from "../../../styles/Signup.module.css";
import forgetStyles from "../../../styles/Forgetpassword.module.css";
import Footer from "../../../components/module/Footer";

export default function forgetpassword() {
  return (
    <>
      <div className={`container-fluid`}>
        <div
          className={`row position-relative pb-5 ${forgetStyles.headerForgetPassword}`}
        >
          <div className={forgetStyles.headerContent}>
            <h1 className="text-center fw-bold">Forgot Your Password?</h1>
            <span className="text-center d-block fw-bold">
              Don't worry, we got your back!
            </span>
            <form className={`d-flex justify-content-center mt-5`}>
              <input
                className={`form-control ${styles.inputHeight} ${forgetStyles.inputWidth} mx-1`}
                placeholder="Enter your email addres to get link"
              ></input>
              <button className={`${styles.yellowExpressButtonLarger} mx-1`}>
                Send
              </button>
            </form>
            <div className={forgetStyles.lowerHeaderContent}>
              <span className="text-center d-block fw-bold">
                Click here if you didn't receive any link
              </span>
              <span className="text-center d-block fw-bold">in 2 minutes</span>
              <div className="d-flex justify-content-center my-2">
                <button className={forgetStyles.resendLinkBrown}>
                  Resend Link
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
