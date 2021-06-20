import AdminDashboardNavbar from "../../../components/module/AdminDashboardNavbar";
import Layout from "../../../components/Layout";
import styles from "../../../styles/Dashboard.module.css";
import Footer from "../../../components/module/footer";

export default function AdminDashboard() {
  return (
    <>
      <Layout title="Admin Dashboard">
        <div className={styles.greyBackground}>
          <AdminDashboardNavbar />
          <div className="container">
            <h5 className={`fw-bold text-center pt-4 pb-3 ${styles.brownText}`}>
              See how your store progressed so far
            </h5>
            <div className="d-flex justify-content-center flex-wrap pb-3">
              <div className="row mx-1">
                <div className="d-flex justify-content-center">
                  <img
                    src="/Ellipse 189.png"
                    className={styles.bulletPeriod}
                  ></img>
                </div>
                <span className="text-center">Daily</span>
              </div>
              <div className="row mx-1">
                <div className="d-flex justify-content-center">
                  <img
                    src="/Ellipse 189.png"
                    className={styles.bulletPeriod}
                  ></img>
                </div>
                <span className="text-center">Weekly</span>
              </div>
              <div className="row mx-1">
                <div className="d-flex justify-content-center">
                  <img
                    src="/Ellipse 189.png"
                    className={styles.bulletPeriod}
                  ></img>
                </div>
                <span className="text-center">Monthly</span>
              </div>
            </div>
            <div className={`card ${styles.chartCard}`}>
              <div className="p-3">
                <h5 className="fw-bold">Monthly Report</h5>
                <span className="d-block">Last 9 months</span>
              </div>
            </div>
            <div className="pt-4">
              <button className={`${styles.downloadButton} w-100`}>
                <span className="fw-bold">Download Report</span>
              </button>
            </div>
          </div>
          <div className={`mt-5 ${styles.footerBorder}`}>
            <Footer />
          </div>
        </div>
      </Layout>
    </>
  );
}
