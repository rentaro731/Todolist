/**
 * 命名規則
 *
 * camelCase（キャメルケース）
 * → 2つ目以降の単語の頭文字を大文字
 * → ロワーキャメルケースともいう
 *
 * PascalCase（パスカルケース）
 * → 最初も大文字で、すべての単語の頭文字を大文字
 * → アッパーキャメルケースともいう
 *
 * snake_case（スネークケース）
 * → 単語の間をアンダーバー（アンスコ）で繋ぐ
 *
 * kebab-case（ケバブケース）
 * → 単語の間をハイフンで繋ぐ
 */

// 定数
// 再代入できない値 変わらない値
const HOGE = "hoeg";

// 変数
// 再代入できる値 後から変更できる値
const huga = ["hoge", "fuga"];

// 有名関数
// 関数に名前をつける
function kansuumei(hikisuu) {
  return "modorichi";
}

// 無名関数
// hogeという変数に対して名前のない関数を代入している
const hoge = function (hikisuu) {
  return "modorichi";
};

// アロー関数（無名関数）
const arrowFunc = () => {
  return "modorichi";
};

// アロー関数 省略形
// return は1行のときのみ省略できる
const arr = () => "modorichi";

// コールバック関数をアロー関数の省略形にすると
const list = ["apple", "banana"];
// list = {
//   forEach: (callback) => {
//     return callback(list[0]);
//   },
// };
// list.forEach((fruit) => console.log(fruit));

// let a = 0;

// console.log(++a);

// console.log("２回目", a++);

// console.log("３回目", ++a);
