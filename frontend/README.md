Области хранение данных:

- база данных на json-сервере
- BFF
- redux store

Сущности приложения:

- пользовател: БД (список пользователей), BFF (сессия текущего), store (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя), store (использование на клиенте)
- статья: БД (список статей), store (отображение в браузере)
- комментарий: БД (список комментарий), store (отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registered_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - comments: id / author_id / post_id / content / published_at

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для redux store (на клиенте)

- user: id / login / roleId / session
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registeredAt / role
