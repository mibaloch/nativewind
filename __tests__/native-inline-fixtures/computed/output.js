Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = Test;
var _tailwindcssReactNative = require("tailwindcss-react-native");
var _reactNative = require("react-native");
var _src = require("../../../src");
var _jsxRuntime = require("react/jsx-runtime");
function Test() {
  var a = "font-bold";
  return (0, _jsxRuntime.jsx)(_src.TailwindProvider, {
    children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: (0, _tailwindcssReactNative.__useParseTailwind)(a, {
        styles: __tailwindStyles,
        media: __tailwindMedia,
      }),
      children: "Hello world!",
    }),
  });
}
const __tailwindStyles = _reactNative.StyleSheet.create({
  "font-bold": { fontWeight: "700" },
});
const __tailwindMedia = {};
