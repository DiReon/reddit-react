// 1. Работа с простыми типами
// Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;
type TConcatFn = (arg1: string, arg2: string) => string;

const concatFn: TConcatFn = (a: string, b: string): string => {
  return a + b;
}
// Решение______________________________________________________________
const result = concatFn('abc', 'def');

// 2. Работа с интерфейсами
// Напишите интерфейс для описания следующих данных

interface IHometask {
  howIDoIt: string,
  simeArray: Array<string | number>,
  withData: Omit<IHometask, 'withData'>[]
}

// Решение ----------------------------------------------
const MyHometask: IHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// 3. Типизация функций, используя Generic
// В уроке про Generics мы написали интерфейс массива MyArray
// interface MyArray<T> {
//   [N: number]: T;
//
//   добавьте типизацию для метода reduce
//   reduce();
// }

// Решение---------------------------------------------------------------------------
interface MyArray<T> {
  [N: number]: T;
  reduce(fn: ((accumulator: T, value: T) => T), initialValue: T): T[];
}

const numberMyArray = [1,2,3,4] as MyArray<number>;
const sum = numberMyArray.reduce((accumulator, value) => accumulator + value, 0);
console.log('sum:', sum);

const stringMyArray = ['a', 'b', 'c!'] as MyArray<string>;
const concatenatedString = stringMyArray.reduce((accumulator, value) => accumulator + value, 'result: ');
console.log('concatenated string:', concatenatedString);

// 4. Работа с MappedTypes
// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

// Решение-----------------------------------------------------------------
type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}
// Проверка----------------------------------------------------------------
const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}

// 5*. Работа с Generic, Mapped Types, Type inference №1
// Это React Functional Component
function HomeComponent(props: { firstProp: string }) {
  return (`
    <div>
      { props.firstProp }
    </div>`
  )
}

// Напишите такой тип, который извлечет тип props из этого или любого другого React компонента.
// Подсказка: любой реакт компонент расширяет React.ComponentType<Props>

// Решение----------------------------------------------------------
type TMyType<T> = T extends ((props: infer E) => any) ? E : never;
// Проверка--------------------------------------------------------
type TArgsType = TMyType<typeof HomeComponent>;

// 6*. Работа с Generic, Mapped Types, Type inference №2
// Задание ----------------------------------------------------
// Дан namespace JSX. Получить к нему доступ можно после установки пакета @types/react.
// Мы проделывали это в одном из первых уроков.
// Среди JSX IntrinsicElements есть Элемент DIV, получить доступ к нему можно так:
type TDivElement = JSX.IntrinsicElements['div'];
const div: TDivElement = {
  some: '1231',
  className: 'sd',
}
// Этот тип описывает все свойства, доступные для HTMLDivElement.
// Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.

// Решение-------------------------------------------------------
type TGetJSXPropsProp<Str extends string> = Str extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[Str] : never;

// Проверка------------------------------------------------------
type TDivProps = TGetJSXPropsProp<'div'>
const props: TDivProps = {
  className: 'handler', // не выкидывает ошибку так как валидно для div элемента
  some: '1233', // throw error потому что не содержится в атрибутах div
}

type AProps = TGetJSXPropsProp<'a'>
const aProps: AProps = {
  className: 'handler',
  href: 'dummyURL',
  some: '1233',
}
