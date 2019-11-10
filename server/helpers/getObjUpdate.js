function getObjUpdate(body) {
  let allowedField = ['title', 'content', 'tag', 'publish']
  let obj = {}
  allowedField.forEach(el => {
    for (let field in body) {
      if (el == field) {
        obj[field] = body[field]
      }
    }
  })
  return obj
}

module.exports = getObjUpdate