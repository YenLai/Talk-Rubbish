function generateRubbish(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!options) return '必須要選一個角色來說幹話'

  return `身為一個${options}，${task[options][random(task[options])]}，${phrase[random(phrase)]}吧!`

}
function random(array) {
  return Math.floor(Math.random() * array.length)
}

module.exports = generateRubbish
