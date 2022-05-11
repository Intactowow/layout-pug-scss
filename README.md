# layout-pug-scss
## Гайд по верстке, правила для дизайнеров
### Содержание:
1. Гайд по шаблону
   * [SCSS](#scss "SCSS")
     *  [Mixins](#Mixins "Mixins")
     *  [Структура и Принципы](#Структура-и-Принципы: "Структура и Принципы:")
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
Отступы в scss не пишем. Указываем их класом.
margin и padding. Num - размер отступа
* .mt-{num}, .mr-{num}, .mb-{num}, .ml-{num}
* .pt-{num}, .pr-{num}, .pb-{num}, .pl-{num}

Настройка в mixins/spacing.scss

    $n - кратность 
    $spacing-step - количество шаго которое сгенерируется. По стандарту 10 (mt-1 ... mt-10)

***

### Структура и Принципы:
    1. Все повторяющиеся блоки должны выноситься в отдельный компонент и генерироваться с помощью циклов. Не должно быть никаких дублей.
    2. Если у блоков есть цветовые особенности(разный фон, цвет текста, тень и т.д), то передаем эти значения в цикл/функцию/миксин.
    3. Отступы задаем классом в html/pug
    4. Все переменные цвета выносятся в abstracts/variables.scss. В коде не должно бы ть вставленый цветов вручную. Все берем только из переменных.
    5. Стилизация кнопок находится в abstracts/buttons.scss
    6. Общие стили для всех страниц можно занести в base/default.scss
    7. Шрифты подключаются в base/typography.scss
    8. В папке layout храним header, footer, sidebar и т.д.
    9. В папке pages храним файлы стилей от конкретных страницы. Например: home.scss, product.scss, contacts.scss и т.д.
    10. В папке untils храним стили от сторонних библиотек