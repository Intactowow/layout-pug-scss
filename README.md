# layout-pug-scss
## Гайд по верстке, правила для дизайнеров
### Содержание:
1. Гайд по шаблону
   * [SCSS](#scss "SCSS")
2. [Правила для дизайнеров](./designer/README.md "Правила для дизайнеров")

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
margin и padding
* m(t, r, b, l), my(t, b), mx(r, l), mt(param), mr(param), mb(param), ml(param)
* p(t, r, b, l), py(t, b), px(r, l), pt(param), pr(param), pb(param), pl(param)

Пример 1:

    m(2, 1, 3, 5);

Результат:

    margin-top: 0.5rem;
    margin-right: 0.25rem;
    margin-bottom: 1rem;
    margin-left: 4rem;

Пример 2:

    mx(3, 5);

Результат:

    margin-right: 1rem;
    margin-left: 4rem;