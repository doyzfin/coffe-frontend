import AdminDashboardNavbar from "../../../components/module/AdminDashboardNavbar";
import Layout from "../../../components/Layout";
import styles from "../../../styles/Dashboard.module.css";
import Footer from "../../../components/module/footer";
import axiosApiIntances from "utils/axios";
import { authPage } from "middleware/authorizationPage";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  const charts = await axiosApiIntances
    .get("/chart/daily", {
      headers: {
        Authorization: `Bearer ${data.token || ""}`,
      },
    })
    .then((res) => {
      return res.data;
    });
  const dataChart = charts.data.map((item) => {
    const data = { DAY: item.DAY, Total: parseInt(item.Total) };
    return data;
  });

  return {
    props: { data: dataChart },
  };
}

export default function AdminDashboard(props) {
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
              <div className="row mx-1"></div>
              <div className="row mx-1"></div>
            </div>
            <div className={`card ${styles.chartCard}`}>
              <div className="p-3">
                <h5 className="fw-bold">Daily Report</h5>
                <span className="d-block">Last 7 Days</span>
              </div>

              <BarChart
                width={1100}
                height={600}
                data={props.data}
                barSize={50}
                margin={{ top: 50, left: 20, right: 20, bottom: 20 }}
              >
                <XAxis padding={{ left: 20, right: 100 }} dataKey="DAY" />
                <YAxis type="number" />
                <CartesianGrid horizontal={false} />
                <Tooltip />
                <Bar dataKey="Total" fill="#6a4029" isAnimationActive={true} />
              </BarChart>
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
