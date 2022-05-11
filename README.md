# layout-pug-scss
## Гайд по верстке, правила для дизайнеров
### Содержание:
1. Гайд по шаблону
   * [Установка и запуск](#установка-и-запуск "Установка")
   * [PUG](#pug "Pug")
     * [Структура проекта](#структура) 
     * [Правила](#правила)
   * [SCSS](#scss "SCSS")
     * [Mixins](#Mixins "Mixins")
     * [Структура и Принципы](#структура-и-принципы "Структура и Принципы:")
     * [Используем БЕМ наименования](#bem "Используем БЕМ наименования")
2. [Frameworks(React, Vue)](#frameworks)
3. [Тестирование верстки](#тестирование-верстки)
4. [Правила для дизайнеров](./designer/README.md "Правила для дизайнеров")
5. [Оптимизация google pagespeed insights](#оптимизация-google-pagespeed-insights)
6. [Дополнительные ссылки](#дополнительные-ссылки)

## Установка и запуск
#### Yarn
Установка

    yarn

Запуск:
    
    yarn start

Сборка

    yarn build
***
## PUG
### Правила:
Используем pug по максимуму.

Никаких дублей кода быть не должно. Используем условия, циклы, разбиваем код на логические блоки, для переиспользования.
### Структура проекта:
```
project   
│
└───src
│    └───components
│    └───fonts
│    └───images
│    └───js
│    └───layout
│    └───mixins
│    └───pages
│    └───scss
│    │ index.js
│─── .gitignore
│─── package.json
│─── README.mb
│─── webpack.config.js
│─── yarn.lock
```
***
## SCSS
### Mixins:
***
#### ellipsis
Обрезает текст и ставит в конце троеточие:
* ellipsis
* ellipsis-multiline($font-size, $line-height, $lines-to-show)
***
#### font
Подключение шрифта из папки fonts
* font($alias, $name)
***
#### input-placeholder
Добавление стиля для placeholder
* input-placeholder { styles }
***
#### reset-link
* reset-link - Сброс стандартных стилей у ссылки
***
#### reset-list
* reset-list - Сброс стандартных стилей у ol / li
***
#### after/before
* after/after - Стандартные стили для after/before которые используются как декоративные элементы(иконки, плашки и т.д.)
***
#### flex
* flex - Располагает элементы на странице как Вам нужно

Пример 1: 

> flex(column);

Результат:

    display: flex;
    flex-direction: column;

Пример 2:

> flex(column, center, center, nowrap);

Результат:

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
***
#### size
* size($width, $height: $width) - Задает размеры блоку

Пример:

> size(500px, $height: 300px);

Результат:

    width: 500px;
    height: 300px;

***
#### spacing
Отступы в scss не пишем. Указываем их класом.
margin и padding. Num - размер отступа
* .mt-{num}, .mr-{num}, .mb-{num}, .ml-{num}
* .pt-{num}, .pr-{num}, .pb-{num}, .pl-{num}

Настройка в mixins/spacing.scss

    $n - кратность 
    $spacing-step - количество шагов которое сгенерируется. По стандарту 10 (mt-1 ... mt-10)

***

### Структура и Принципы:
Правила написания scss airbnb: [Ссылка](https://github.com/vladislav805/airbnb-css-ru)

    1. Все повторяющиеся блоки должны выноситься в отдельный компонент и генерироваться с помощью циклов. Не должно быть никаких дублей.
    2. Если у блоков есть цветовые особенности(разный фон, цвет текста, тень и т.д), то передаем эти значения в цикл/функцию/миксин.
    3. Отступы задаем классом в html/pug
    4. Все переменные цвета выносятся в abstracts/variables.scss. В коде не должно бы ть вставленый цветов вручную. Все берем только из переменных.
    5. Стилизация кнопок находится в abstracts/buttons.scss
    6. Общие стили для всех страниц можно занести в base/default.scss
    7. Шрифты подключаются в base/typography.scss
    8. В папке layout храним header, footer, sidebar и т.д.
    9. В папке pages храним файлы стилей от конкретных страницы. Например: home.scss, product.scss, contacts.scss и т.д.
    10. В папке untils храним стили от сторонних библиотек.
***
### BEM:
    Используем БЭМ наименования классов.
Если проект будет разрабатываться на React, то используем PascalCased написание. [Подробнее](https://github.com/vladislav805/airbnb-css-ru#oocss-%D0%B8-bem "PascalCase")
Документация БЭМ - https://ru.bem.info/methodology/css/
***
### Frameworks:
Если проект планируется разрабатывать на одном из фреймоврках описаных ниже, то используем соответствующие CLI.

1. React - https://github.com/facebook/create-react-app
2. Vue - https://github.com/vuejs/vue-cli
***
### Тестирование верстки
Всю верстку тестируем в сервисе [browserstack.com](https://browserstack.com/)
Тестируем последние 3 верскии ios и android
***
### Оптимизация google pagespeed insights
1. Все картинки должны быть оптимизированы в сервисе [tinypng.com](http://tinypng.org/)
2. Всем тегам img обязательно добавлять атрибуты width и height.
3. Картинки подгружать через lazyload
4. Не допускать большие вложенности в html, так же использовать before/after где это возможно для сокращения html.
5. Не использовать шрифты с сторонних сервисов. Шрифты подключенные через **_font-face_** должны иметь свойство _**display: swap;**_
6. Не использовать **_jquery_** для слайдеров, табов, модалок и прочего.
7. По возможности использовать адаптивные изображения **_<picture>_**
8. Все скрипты аналитики, jivosite и прочее подключаем через отложенную загрузку
***
### Дополнительные ссылки
1. [Pug](https://pugjs.org/)
2. [Scss](https://sass-scss.ru/guide/)
3. [React](https://reactjs.org/)
4. [Vue](https://vuejs.org/)
5. Google pagesSpeed:
    1. [habr.com](https://habr.com/ru/post/436966/)
    2. [vc.ru](https://vc.ru/dev/212614-google-pagespeed-insights-2021)