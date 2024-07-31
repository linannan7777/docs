## js数组对象以某个key为主键去重

在JavaScript中，如果你有一个数组，其中的每个元素都是一个对象，并且你想要根据某个特定的key（属性）去重，你可以使用几种方法来实现。这里提供一个使用`Array.prototype.reduce()`方法的示例，以及一个使用ES6中的`Set`结合对象属性取值的例子。

### 方法1：使用 `reduce()`

```javascript
function uniqueByKey(arr, key) {
    return arr.reduce((accumulator, current) => {
        // 如果accumulator中不存在当前对象的key值，则添加
        if (!accumulator.some(item => item[key] === current[key])) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
}

// 示例
const array = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' } // 重复的对象
];

const uniqueArray = uniqueByKey(array, 'id');
console.log(uniqueArray);
```

### 方法2：使用 `Set` 和映射

```javascript
function uniqueByKeyUsingSet(arr, key) {
    const seen = new Set();
    return arr.filter(item => {
        const keyValue = item[key];
        // 如果Set中没有这个key的值，则添加并保留该对象
        if (!seen.has(keyValue)) {
            seen.add(keyValue);
            return true;
        }
        return false;
    });
}

// 同样的示例
const array = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' }
];

const uniqueArrayUsingSet = uniqueByKeyUsingSet(array, 'id');
console.log(uniqueArrayUsingSet);
```

这两种方法都可以有效地根据对象中的某个key去除数组中的重复元素。选择哪种方法取决于个人偏好或具体场景，但通常使用`Set`的方法（方法2）在现代JavaScript开发中更为常见，因为它更简洁且性能也不错。