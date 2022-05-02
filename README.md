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