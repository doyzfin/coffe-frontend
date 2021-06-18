import styles from "../../../styles/Signup.module.css";
import Footer from "../../../components/module/footer";

export default function login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row position-relative pb-5">
          <div className={`col-lg-6 col-md-6 col-sm-6 d-none d-sm-block g-0`}>
            <img src="/signup/signup_left_page.png" className="img-fluid"></img>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="d-flex justify-content-between p-4">
              <div className={`d-flex justify-content-around h-100 my-auto`}>
                <img src="/coffee1.png" className="me-2"></img>
                <span className="fw-bold my-auto ms-2">Coffee Express</span>
              </div>
              <div className="d-flex my-auto">
                <button className={styles.yellowExpressButton}>Sign Up</button>
              </div>
            </div>
            <div className="row w-100 mt-4">
              <h4 className="text-center fw-bold mt-4">Login</h4>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <form className="mt-5 px-5">
                  <div className="my-4">
                    <span className="fw-bold">Email Address</span>
                    <input
                      type="email"
                      className={`form-control mt-2 ${styles.inputHeight}`}
                      placeholder="Enter your email address"
                    ></input>
                  </div>
                  <div className="my-4">
                    <span className="fw-bold">Password</span>
                    <input
                      type="password"
                      className={`form-control mt-2 ${styles.inputHeight}`}
                      placeholder="Enter your password"
                    ></input>
                  </div>

                  <span className="d-block fw-bold text-decoration-underline">
                    Forgot Password?
                  </span>

                  <div className="mt-5">
                    <button
                      className={`w-100 ${styles.yellowExpressButtonLarger}`}
                    >
                      Login
                    </button>
                  </div>
                  <div className="mt-3">
                    <button
                      className={`w-100 ${styles.whiteExpressButtonLarger}`}
                    >
                      Login with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={`card ${styles.memberCard}`}>
            <div className="d-flex justify-content-around h-100 p-4">
              <div className="row">
                <h5 className="fw-bold">Get your member</h5>
                <h5 className="fw-bold">card now!</h5>
                <span>Let's join our member and enjoy the deals.</span>
              </div>
              <div className="row my-auto">
                <button className={styles.yellowCardButton}>Create Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
}
