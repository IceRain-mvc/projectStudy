# Hook

----

## 1.什么是hook

    1) Hook是react 16.8 的新特性
    
    2) 他是为解决class 组件而出生的
    
## 2.什么时候使用hook
    
    当我们有了class组件 那为什么还用hook呢
    就是因为我们有一些组件是无状态组件 当我们想在其中添加state的时候 **

## 2.hook的特点:

    1) 函数式组件
    2) 向后兼容
    3) 可用可不用
    
## 3.为什么会出现hook

    1) 组件之间复用逻辑状态很难
       比如两个组件同事要做同一件事情  我们很难抽取他们公共部分
    2) 解决嵌套地狱  比如 provider consumers render 高阶组件
    3) 复杂的组件变得难以理解
    
## 4:如何使用hook

```js

function HookState() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(2);
    const [obj, setObj] = useState({name: {num: 1}});
    window.useState = useState;

    useEffect(() => {
        console.log("111");
        document.title = "hello cuilibao";

    });

    return <>
        <p>{count}</p>
        <p>{obj.name.num}</p>
        <button onClick={() => {
            setCount(count + 1);
            setNum(num + 1);

            setObj({name: {num: num + 1}})
        }}>按钮 获取State
        </button>
    </>
}
```


  
## 5:hook的注意事项 以及常见问题

> 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。

> 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）
