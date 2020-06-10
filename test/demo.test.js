/**
 * @description 测试demo
 * @author liyjun
 */

function sum(a, b) {
    return a + b
}
test('测试10 + 20 = 30', () => {
    const res = sum(10, 20)
    expect(res).toBe(30)
})
test('测试10 + 20 != 40', () => {
    const res = sum(10, 20)
    expect(res).not.toBe(40)
})