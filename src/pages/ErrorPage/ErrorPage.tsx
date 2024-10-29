import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <Layout>
      <section className="error">
        <div className="container error__container">
          <div className="error__content">
            <h2 className="error__title">404</h2>
            <h3 className="error__subtitle">Страница не найдена</h3>
            <p>Возможно, этот фильм еще на съемке...</p>
            <Link to={"/"} className="button button-primary">На главную</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ErrorPage
