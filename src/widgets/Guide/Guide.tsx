import { Link } from 'react-router-dom'
import styles from './Guide.module.scss'

export const Guide = () => {
  return (
    <>
      <h3 className={styles.title}>
        Логика регистрации и логина находится в папке features
      </h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.accent}>LOGIN:</span> <br /> Страница login
          содержит loginForm. Если данные о пользователе есть на БД api, вы
          успешно залогинетесь и перейдете на страницу profile. После, попасть
          на страницу login and registration не удастся, вы будете
          перенаправляться на страницу profile, пока не разлогинитесь (кнопка
          logout на странице profile). Что касается общих практик, обычно в
          storage или в куках хранят ТОЛЬКО jwt token, который генерируется на
          backend, и информация о текущем user получается именно по нему. Однако
          https://dummyjson.com/ api не предоставляет возможности для получения
          user по Jwt токену, поэтому для простоты демонстрации просто сохранил
          полученную info о user в localStorage, на основание которого я и
          вывожу инфу на странице profile.
        </li>
        <li className={styles.item}>
          <span className={styles.accent}>REGISTRATION:</span> <br />
          Логика страницы регистрации схожа с логином, но стоит учитывать что
          dummyjson.com api хоть и дает возможность добавить user по ендпоинту,
          но непосредственно у себя в базе данных они эту информацию не хранят,
          поэтому после того как вы разлогинитесь со вновь созданного user,
          снова залогинится за него вы не сможете. Но имитация регистрации
          сделана полностью, и в случае если на backend по указанному ендпоинту
          будет код по добавлению в БД нового юзера, все будет работать как
          надо. Или вы можете взгянуть как я реализовал jwt авторизацию на своем
          фул-стак проекте/блоге: <br />
          <Link to={'https://etv-blog-frontend.vercel.app/'} target="_blank">
            https://etv-blog-frontend.vercel.app/
          </Link>
          Так вот там вы как раз и увидите в storage только JWT token, проект
          полностью рабочий, вы можете регистрироваться, после отработает
          ендпоинт и добавит всю необходимую информацию в БД, ну и разумеется
          после можете совершенно свободно логинится за созданного пользователя.
          Код проекта так же в открытом достопе на gitHub если будет интересно
          <br />
          <Link
            to={'https://github.com/TrubitsynEgor/etv-blog-frontend'}
            target="_blank"
          >
            https://github.com/TrubitsynEgor/etv-blog-frontend
          </Link>
          <Link
            to={'https://github.com/TrubitsynEgor/blog-full-stack-backend'}
            target="_blank"
          >
            https://github.com/TrubitsynEgor/blog-full-stack-backend
          </Link>
        </li>
      </ul>
    </>
  )
}
