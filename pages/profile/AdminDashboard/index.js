import AdminDashboardNavbar from "../../../components/module/AdminDashboardNavbar";
import Layout from "../../../components/Layout";
import styles from "../../../styles/Dashboard.module.css";

export default function AdminDashboard() {
  return (
    <>
      <Layout title="Admin Dashboard">
        <div className={styles.greyBackground}>
          <AdminDashboardNavbar />
          <h5>Admin Dashboard</h5>
        </div>
      </Layout>
    </>
  );
}
