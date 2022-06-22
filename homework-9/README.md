# Домашнее задание

## Шаг 1

- Инициализируй npm в проекте
```shell
npm init
```
- В корне проекта создай файл `index.js`
- Поставь пакет [nodemon](https://www.npmjs.com/package/nodemon) как зависимость разработки (devDependencies)
- В файле `package.json` добавь "скрипты" для запуска `index.js`
- Скрипт `start` который запускает `index.js` с помощью `node`
- Скрипт `start:dev` который запускает `index.js` с помощью `nodemon`

## Шаг 2

В корне проекта создай папку `db`. Для хранения контактов скачай и используй файл [contacts.json](./contacts.json), положив его в папку `db`.

В корне проекта создай файл `contacts.js`.

- Сделай импорт модулей `fs` и `path` для работы с файловой системой
- Создай переменную `contactsPath` и запиши в нее путь к файлу `contacts.json`. Для составления пути используй методы модуля `path`.
- Добавь функции для работы с коллекцией контактов. В функциях используй модуль `fs` и его методы `readFileSync()` и `writeFileSync()`
Пример - 
```js
// ...
let resultRead = readFileSync(contactsPath, 'utf-8')

// ...
writeFileSync(contactsPath)
```
- Сделай экспорт созданных функций через `module.exports`

```js
// contacts.js

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */


/** Написать функции для работы со списком контактов */

/**
 * Вернуть список контактов
 */
function listContacts() {
  // ...твой код
}

/**
 * Вернуть контакт по id
 */
function getContactById(contactId) {
  // ...твой код
}

/**
 * Удалить контакт из файла контактов
 */
function removeContact(contactId) {
  // ...твой код
}

/**
 * Добавить контакт в файл по id
 */
function addContact(name, email, phone) {
  // ...твой код
}

```

## Шаг 3

Сделай импорт модуля `contacts.js` в файле `index.js` и проверь работоспособность функций для работы с контактами.

## Шаг 4

Используй функцию `invokeAction()` которая получает тип выполняемого действия и необходимые аргументы. Функция вызывает соответствующий метод из файла `contacts.js` передавая ему необходимые аргументы.

```js
// index.js

// TODO: дописать функцию
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

```

## Шаг 5

проверить работу на следующем

```js

// index.js
let params

// -----
params = {
  action: 'list'
}
invokeAction(params)

// -----
params = {
  action: 'get',
  id: 5,
}
invokeAction(params)

// -----
params = {
  action: 'add',
  id: 5,
  name: 'Peter',
  email: 'peter@gmail.com',
  phone: '937-99-92'
}
invokeAction(params)

// -----
params = {
  action: 'remove',
  id: 3,
}
invokeAction(params)
```

## Шаг 6 - Сдача домашнего задания.

После - пришлите в телеграм ссылку на репозиторий с домашним заданием
