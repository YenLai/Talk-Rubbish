function generateRubbish(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!options) return '必須要選一個角色來說幹話'

  let result = `身為一個${options}，`


  if (options === 'engineer') {
    result += `${task.engineer[Math.floor(Math.random() * task.engineer.length)]}，`
  }
  if (options === 'designer') {
    result += `${task.designer[Math.floor(Math.random() * task.designer.length)]}，`
  }
  if (options === 'entrepreneur') {
    result += `${task.entrepreneur[Math.floor(Math.random() * task.entrepreneur.length)]}，`
  }
  result += `${phrase[Math.floor(Math.random() * phrase.length)]}吧!`

  return result
}

module.exports = generateRubbish
