import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import {useRouter} from 'next/router' ;


const Info = ({ profile }) => {
  const { avatar_url, name, bio, html_url } = profile;
  const router=useRouter() ;
  return (
    <div>
      <Head>
        <title>News App | Info</title>
        <link rel="icon" href="/logo-2.png" />
      </Head>
      <DefaultLayout>
        <div className={styles.mainEom}>
          <div className=" p-5 bg-light border rounded-3 mb-5">
            <h2>{name}</h2>
            <p>{bio + "......"}</p>
            <div className={styles.employeeOfTheMonth}>
              <img src={avatar_url} alt="..." />
            </div>
            <div className="mt-3 text-center">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => (router.push (html_url))}
              >
                Check github account
              </button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const response = await fetch(
    `https://api.github.com/users/SaadaniMohamedAmine`
  );
  const profile = await response.json();
  return {
    props: { profile },
  };
};

export default Info;
