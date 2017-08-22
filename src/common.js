const formatURL = (url) =>  (
  url.length ? url.replace(/^https?:\/\//, '') : ''
)

export default formatURL