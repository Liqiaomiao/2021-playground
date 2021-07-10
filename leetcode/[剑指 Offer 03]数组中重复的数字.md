<p>找出数组中重复的数字。</p>

<p><br>
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>
[2, 3, 1, 0, 2, 5, 3]
<strong>输出：</strong>2 或 3 
</pre>

<p>&nbsp;</p>

<p><strong>限制：</strong></p>

<p><code>2 &lt;= n &lt;= 100000</code></p>
<div><div>Related Topics</div><div><li>数组</li><li>哈希表</li><li>排序</li></div></div></div>

<p><strong>实现：</strong></p>

**1. Set**

<p>
题目描述只要找到重复的即可，设置set,通过has判断是否已经存在于set结构中，如果存在（即为重复），立即退出循环，并返回当前值。
</p>

<dl>
<dt>复杂度</dt>
<dd>时间复杂度 O(N) ： 遍历数组使用 O(N) ，set 添加与查找元素皆为 O(1)</dd>
<dd>空间复杂度 O(N) ： set 占用 O(N) 大小的额外空间</dd>
</dl>

```javascript
 const findRepeatNumber = function(nums) {
    const mySet = new Set()
    for(let value of nums){
        if(mySet.has(value)){
            return value
        }
        mySet.add(value)
    }
};
```
**2. sort**

排序后遍历，当后一个值===前一个值，即为重复，退出循环并返回当前值

```javascript
const findRepeatNumber = function(nums) {
    const sorted = nums.sort()
    for(let i = 0;i< sorted.length;i++){
        if(sorted[i]===sorted[i+1]){
            return sorted[i]
        }
    }
}
```

**3. 原地交换**

将值和索引一一对应，如果值和已经存在的索引对应的值（注意排除索引 === 值），即为重复
<p>eg:</p>

```javascript
var a = [0,1,3,1]
// 0,1 已经在自己正确的位置，无需交换
// 3 应该在 a[3] 的位置
// 将值 3 拷贝一份 tmp = a[i] 
// 当前 索引i 的位置被 a[tmp] 替代,此时 a[tmp] 为1 ；所以 a[2]= 1
// 将值 3 替换到 a[tmp]的位置
// [0,1,1,3] 注意索引增加的条件为 a[i] === i,否则会出现重复的1没被循环的情况
```

<dl>
<dt>复杂度</dt>
<dd>时间复杂度O(N): 遍历数组使用 O(N) ，每轮遍历的判断和交换操作使用 O(1)</dd>
<dd>空间复杂度O(1): 使用常数复杂度的额外空间。 </dd>
</dl>

```javascript
const findRepeatNumber = function(nums) {
    let i = 0
    while (i < nums.length){
        if(nums[i] ===i||nums[i]===undefined){
            i++
            continue
        }
        if(nums[nums[i]] === nums[i]) return nums[i];

        let tmp = nums[i];
        nums[i] = nums[tmp];
        nums[tmp] = tmp;
    }
}
```


