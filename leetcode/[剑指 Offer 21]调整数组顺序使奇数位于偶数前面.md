<p>输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。</p>

<p> </p>

<p><strong>示例：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,2,3,4]
<strong>输出：</strong>[1,3,2,4] 
<strong>注：</strong>[3,1,2,4] 也是正确的答案之一。</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ol>
	<li><code>0 <= nums.length <= 50000</code></li>
	<li><code>1 <= nums[i] <= 10000</code></li>
</ol>
<div><div>Related Topics</div><div><li>数组</li><li>双指针</li><li>排序</li></div></div>\n<div><li>👍 144</li><li>👎 0</li></div>

**实现**

**1. 排序**


```javascript
var exchange = function(nums) {
  return nums.sort((a,b)=>b%2-a%2) // b-a 降序排列 奇数/2 余 1， 偶数/2 余 0；降序排列后为 奇数在前，偶数在后
};
```

**2. 双指针**

```javascript
var exchange = function(nums) {
    let left = 0;
    let right = nums.length - 1
    while (left < right) {
        // left 寻找偶数，没有找到跳过（不对数组操作），序号追加
        if (nums[left] % 2 === 1) {
            left++
            continue
        }
        if (nums[right] % 2 === 0) {// right 寻找奇数，没有找到跳过（不对数组操作），序号追加
            right--
            continue
        }
        // 当 left 找到偶数，并且 right 找到奇数 进行互换
        let tmp = nums[left]
        nums[left] = nums[right]
        nums[right] = tmp
    }
    return nums
}
```
