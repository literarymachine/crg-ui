export const formatURL = (url) =>  (
  url.length ? url.replace(/^https?:\/\//, '') : ''
)

export const getTitle = (data) => (
  data.about && data.about.name
    ? data.about.name
    : data.totalItems + " Entries"
)

export default {
  getTitle, formatURL
}
