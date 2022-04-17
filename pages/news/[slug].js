import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useRouter } from "next/router";
import styles from "../../styles/Feed.module.css";
import clsx from "clsx";
import Head from "next/head";

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  const navigateNext = () => {
    router.push(`/news/${Number(pageNumber) + 1}`);
  };
  const navigatePrevious = () => {
    router.push(`/news/${pageNumber - 1}`);
  };
  return (
    <div>
      <Head>
        <title>News App | News</title>
        <link rel="icon" href="/logo-2.png" />
      </Head>
      <DefaultLayout>
        <div className="container px-5">
          <div className={styles.main}>
            {articles.map((article, index) => (
              <div key={index} className={styles.post}>
                <h1 onClick={() => (window.location.href = article.url)}>
                  {article.title}
                </h1>
                <p className="text-muted text-center">{article.description}</p>
                {!!article.urlToImage && <img src={article.urlToImage} />}
              </div>
            ))}
          </div>
          <div className="container text-center py-5">
            <button
              className={clsx(
                "btn btn-primary mx-3",
                pageNumber == 1 ? "disabled" : ""
              )}
              onClick={navigatePrevious}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className={clsx(
                "btn btn-primary mx-3",
                pageNumber == 5 ? "disabled" : ""
              )}
              onClick={navigateNext}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;
  if (!pageNumber || pageNumber > 5 || pageNumber < 1) {
    return {
      props: {
        pageNumber,
        articles: [],
      },
    };
  }
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}&&apiKey=d6bf57f0413a454586f6ce0a71b00311`
  );
  const data = await response.json();
  const { articles } = data;
  return {
    props: {
      pageNumber,
      articles,
    },
  };
};

export default Feed;
