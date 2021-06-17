import styles from "../../../styles/Signup.module.css";

export default function signup() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-lg-6 col-md-6 col-sm-6 d-none d-sm-block g-0`}>
            <img src="/signup/signup_left_page.png" className="img-fluid"></img>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="d-flex justify-content-between p-4">
              <div className="d-flex">
                <span>Testing</span>
                <span className="fw-bold">Coffee Shop</span>
              </div>
              <span>Two</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
